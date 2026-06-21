#!/usr/bin/env node
/**
 * projects.json -> README.md 의 프로젝트 영역 자동 생성기.
 *
 * README.md 안의 아래 두 마커 사이만 교체합니다. 나머지(헤더/About/Contact)는 그대로 둡니다.
 *   <!-- PROJECTS:START -->
 *   <!-- PROJECTS:END -->
 *
 * 사용법:  node scripts/generate-readme.mjs
 * 의존성 없음 (Node 18+ 기본 모듈만 사용).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(root, "projects.json");
const README = join(root, "README.md");

const START = "<!-- PROJECTS:START -->";
const END = "<!-- PROJECTS:END -->";

const STATUS = {
  idea: { emoji: "💡", label: "아이디어" },
  building: { emoji: "🚧", label: "제작 중" },
  testing: { emoji: "🧪", label: "테스트 중" },
  done: { emoji: "✅", label: "완료" },
};

function link(label, url) {
  return `[${label}](${url && url.trim() ? url : "#"})`;
}

/** 카드(table cell) 한 장 렌더링 */
function card(p) {
  const s = STATUS[p.status] ?? STATUS.idea;
  const img = p.image && p.image.trim()
    ? `<img src="${p.image}" alt="${p.name}" width="100%">`
    : `<sub>이미지 없음 — assets/ 에 스크린샷을 추가하세요</sub>`;
  const tech = (p.tech ?? []).map((t) => `\`${t}\``).join(" ") || "`[수정 필요: 기술]`";
  const highlights = (p.highlights ?? []).map((h) => `- ${h}`).join("\n");

  const parts = [
    `<td width="50%" valign="top">`,
    ``,
    `### ${s.emoji} ${p.name}`,
    ``,
    img,
    ``,
    `**한 줄 설명**`,
    p.oneLiner || "[수정 필요: 한 문장 설명]",
    ``,
    `**해결하는 문제 / 주요 기능**`,
    highlights || "- [수정 필요: 핵심 기능]",
    ``,
    `**사용 기술**`,
    tech,
    ``,
    `**상태:** ${s.emoji} ${s.label}`,
    ``,
    `${link("🔗 데모", p.demo)} · ${link("💻 GitHub", p.repo)}`,
  ];

  // 선택: "설계에서 고려한 점" — 접이식으로 노력/깊이를 보여줌
  if (p.notes && p.notes.length) {
    parts.push(
      ``,
      `<details>`,
      `<summary>🧠 <b>설계에서 고려한 점</b></summary>`,
      ``,
      ...p.notes.map((n) => `- ${n}`),
      ``,
      `</details>`,
    );
  }

  parts.push(``, `</td>`);
  return parts.join("\n");
}

/** 카드들을 2열 table로 묶기 */
function cardGrid(items) {
  if (items.length === 0) return "_아직 없습니다._";
  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    const pair = items.slice(i, i + 2).map(card).join("\n\n");
    rows.push(`<tr>\n\n${pair}\n\n</tr>`);
  }
  return `<table>\n${rows.join("\n")}\n</table>`;
}

/** 아이디어 목록 table */
function ideaTable(items) {
  if (items.length === 0) return "_아직 없습니다._";
  const head = "| 상태 | 프로젝트 | 한 줄 설명 | 해결하려는 문제 |\n|:---:|---|---|---|";
  const rows = items.map((p) => {
    const problem = (p.highlights ?? []).join(", ") || "[수정 필요]";
    return `| 💡 | ${p.name} | ${p.oneLiner || "[수정 필요]"} | ${problem} |`;
  });
  return [head, ...rows].join("\n");
}

function build(projects) {
  const inProgress = projects.filter((p) => p.status === "building" || p.status === "testing");
  const done = projects.filter((p) => p.status === "done");
  const ideas = projects.filter((p) => p.status === "idea");

  return [
    `## 🚧 진행 중인 프로젝트`,
    ``,
    cardGrid(inProgress),
    ``,
    `---`,
    ``,
    `## ✅ 완료한 프로젝트`,
    ``,
    cardGrid(done),
    ``,
    `---`,
    ``,
    `## 💡 앞으로 만들 프로젝트 / 아이디어`,
    ``,
    ideaTable(ideas),
    ``,
    `> 아이디어가 구체화되면 \`projects.json\`의 status를 \`building\`으로 바꾸세요. 자동으로 카드 섹션으로 이동합니다.`,
  ].join("\n");
}

const { projects } = JSON.parse(readFileSync(DATA, "utf8"));
const readme = readFileSync(README, "utf8");

const startIdx = readme.indexOf(START);
const endIdx = readme.indexOf(END);
if (startIdx === -1 || endIdx === -1) {
  console.error(`README.md 에 ${START} / ${END} 마커가 필요합니다.`);
  process.exit(1);
}

const before = readme.slice(0, startIdx + START.length);
const after = readme.slice(endIdx);
const next = `${before}\n\n${build(projects)}\n\n${after}`;

if (next !== readme) {
  writeFileSync(README, next);
  console.log("README.md 갱신 완료.");
} else {
  console.log("변경 없음.");
}
