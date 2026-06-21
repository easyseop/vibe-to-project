# 포트폴리오 관리 가이드

이 저장소는 **허브(hub)** 입니다. 실제 프로젝트 코드는 각자 별도 저장소에 두고(멀티레포),
여기서는 목록만 카드로 모아 보여줍니다.

## 🗂 구조 (3층)

| 저장소 | 역할 |
|---|---|
| `easyseop/easyseop` | **프로필 / 이력서** (계정 첫 화면). 템플릿: [`templates/profile-README.md`](./templates/profile-README.md) |
| `easyseop/vibe-to-project` | **포트폴리오 허브** (이 저장소). 프로젝트 카드 목록 |
| `easyseop/<project>` | **개별 프로젝트** 코드 + 상세 README |

## ✅ 프로젝트 추가/수정 — `projects.json` 한 곳만 고치면 끝

README.md 는 **직접 수정하지 않습니다.** [`projects.json`](./projects.json) 만 편집하세요.

```jsonc
{
  "name": "할일 타이머",                    // 프로젝트 이름
  "status": "building",                     // idea | building | testing | done
  "oneLiner": "포모도로 + 할일 관리 웹앱",   // 한 줄 설명
  "highlights": ["오프라인 지원", "통계 대시보드"], // 문제/주요 기능
  "tech": ["React", "TypeScript"],          // 사용 기술
  "image": "./assets/todo-timer.png",       // 스크린샷 (없으면 "")
  "demo": "https://todo-timer.vercel.app",  // 데모 URL (없으면 "")
  "repo": "https://github.com/easyseop/todo-timer", // 코드 저장소 (없으면 "")
  "notes": [                                // (선택) "설계에서 고려한 점" — 접이식으로 표시
    "**의존성 최소화:** 외부 API 없이 동작하도록 설계",
    "**엣지케이스:** 빈 데이터/예외 입력 방어 처리"
  ]
}
```

> `notes` 는 카드 하단에 접이식(`<details>`)으로 들어갑니다. 기술적 고민·설계 의도·엣지케이스 대응 등 **"이런 것까지 고려했다"** 를 보여주고 싶을 때 사용하세요. 없으면 생략됩니다.

### 상태 변경 (예: 제작 중 → 완료)
`status` 값만 `"building"` → `"done"` 으로 바꾸면 카드가 자동으로 "완료" 섹션으로 이동합니다.

| status | 표시 | 위치 |
|---|---|---|
| `idea` | 💡 아이디어 | 아이디어 표 |
| `building` | 🚧 제작 중 | 진행 중 카드 |
| `testing` | 🧪 테스트 중 | 진행 중 카드 |
| `done` | ✅ 완료 | 완료 카드 |

## 🔄 README 반영 방법

- **자동:** `projects.json` 을 수정해 push 하면 GitHub Action(`.github/workflows/build-readme.yml`)이 README 를 다시 생성해 커밋합니다.
- **수동(로컬 미리보기):**
  ```bash
  node scripts/generate-readme.mjs
  ```

## 🚀 새 프로젝트를 만들 때 흐름

1. 새 저장소 `easyseop/<project>` 생성 → 코드 + 상세 README 작성
2. (선택) Vercel/Netlify 로 배포 → 데모 URL 확보
3. 스크린샷을 이 저장소 `assets/` 에 추가
4. `projects.json` 에 항목 1개 추가 → push → 끝
