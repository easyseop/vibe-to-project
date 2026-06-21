<div align="center">

# 🛠️ Vibe to Product

**아이디어를 빠르게 실제 제품으로 만들어가는 바이브코딩 포트폴리오입니다.**

작은 아이디어를 직접 만들고, 출시하고, 기록합니다.

[![Portfolio](https://img.shields.io/badge/Status-Building-blue)](https://github.com/easyseop/vibe-to-project)
[![Profile](https://img.shields.io/badge/Resume-Profile-181717?logo=github)](https://github.com/easyseop)
[![Projects Board](https://img.shields.io/badge/GitHub-Projects-181717?logo=github)](https://github.com/easyseop?tab=projects)

</div>

---

## 👋 About

안녕하세요, **[수정 필요: 이름/닉네임]** 입니다.
저는 **[수정 필요: 한 줄 소개 — 예: 일상의 불편함을 작은 웹앱으로 해결하는 것을 좋아합니다]**.

- 🧩 만드는 것: **[수정 필요: 예: 웹앱 · 자동화 도구 · AI 사이드 프로젝트]**
- 🧰 주로 쓰는 기술: **[수정 필요: 예: React, TypeScript, Next.js, Python]**
- 📄 이력서 / 자기소개: **[프로필 보기](https://github.com/easyseop)**
- 📋 전체 진행 상황: **[GitHub Projects 보드](https://github.com/easyseop?tab=projects)**

**상태 표기:** 💡 아이디어 · 🚧 제작 중 · 🧪 테스트 중 · ✅ 완료

> 아래 프로젝트 영역은 [`projects.json`](./projects.json) 으로부터 자동 생성됩니다. **직접 수정하지 마세요.** `projects.json`만 고치면 됩니다.

---

<!-- PROJECTS:START -->

## 🚧 진행 중인 프로젝트

<table>
<tr>

<td width="50%" valign="top">

### 🚧 Stock Chart Analyze

<sub>이미지 없음 — assets/ 에 스크린샷을 추가하세요</sub>

**한 줄 설명**
차트를 '군중 심리의 지도'로 읽어 매수·매도·보유 신호와 손절가를 제시하는 주식 분석 도구.

**해결하는 문제 / 주요 기능**
- OHLCV만으로 탐욕·공포 등 심리 신호 분석 (외부 API 불필요)
- ADX·이동평균·RSI·지지/저항·추세선·매물대 등 기술 지표 모듈
- 일/주/월 멀티 타임프레임 분석 + plotly 인터랙티브 차트
- ATR 기반 손절가 자동 계산, 오프라인 데모 모드

**사용 기술**
`Python` `pandas` `plotly` `FinanceDataReader`

**상태:** 🚧 제작 중

[🔗 데모](#) · [💻 GitHub](https://github.com/easyseop/Stock-chart-analyze)

<details>
<summary>💡 <b>기획에서 고려한 점</b></summary>

- **문제 정의:** 개인 투자자가 차트를 '감'으로만 본다는 점에서 출발 — 감정이 아닌 일관된 기준으로 읽게 하자는 게 기획의 시작점
- **핵심 컨셉:** "차트는 예언이 아니라 군중 심리의 지도" — 적중을 약속하는 도구가 아니라, 시장 심리를 해석하는 도구로 포지셔닝
- **타깃 사용자:** 보조지표를 잔뜩 켜두고도 결정을 못 내리는 개인 투자자. 신호 개수보다 '왜 이 신호인지'를 이해시키는 걸 우선
- **책임 있는 신호:** 매수 추천만 던지지 않고 손절가·리스크 관리를 항상 한 세트로 — 사용자가 잃지 않게 돕는 걸 제품 원칙으로
- **신뢰 = 재현성:** 누가 돌려도 같은 결과가 나오도록 외부 데이터 의존을 최소화하자고 기획 (블랙박스 신호에 대한 불신 해소)
- **확장 로드맵:** v2에서 일목균형표·상대강도·백테스트로 '검증 가능성'을 다음 목표로 설정

</details>

</td>

</tr>
</table>

---

## ✅ 완료한 프로젝트

<table>
<tr>

<td width="50%" valign="top">

### ✅ Kanji JLPT Study

<img src="./assets/kanji-jlpt-study.png" alt="Kanji JLPT Study" width="100%">

**한 줄 설명**
빌드 없이 index.html 하나로 바로 쓰는 JLPT(N5·N4·N3) 한자 612자 학습 웹앱.

**해결하는 문제 / 주요 기능**
- 레벨·북마크·암기 진도별 필터 + 한자/뜻/음훈/영어 검색
- 상세 보기, 플래시카드, 4지선다 퀴즈 학습 모드
- TTS 음성 읽기, 다크 모드, 획순(KanjiVG) 표시
- PWA 설치 + 오프라인 지원, 진도 자동 저장

**사용 기술**
`HTML` `JavaScript` `Python` `PWA`

**상태:** ✅ 완료

[🔗 데모](https://easyseop.github.io/Kanji-jlpt-study/) · [💻 GitHub](https://github.com/easyseop/Kanji-jlpt-study)

<details>
<summary>💡 <b>기획에서 고려한 점</b></summary>

- **진입장벽 제거:** 설치·회원가입·결제 없이 링크만 열면 바로 공부 — '시작하기까지의 마찰'을 없애는 걸 1순위로 기획
- **학습 흐름 설계:** 단순 암기 나열이 아니라 목록 → 한자카드 → 퀴즈 → 복습으로 이어지는 학습 사이클을 의도적으로 구성
- **꾸준함 유도:** 진도바·연속 학습일·정답률 등 행동을 시각화해 '계속 하고 싶게' 만드는 동기 설계
- **끝이 보이는 범위:** 612자(N5·N4·N3)로 학습 범위를 명확히 한정해 '완주 가능하다'는 성취감을 주도록 기획
- **다양한 학습 스타일 배려:** 다크 모드·음성 읽기(TTS)·획순 표시로 보는 사람마다 다른 공부 방식을 수용
- **자투리 시간 타깃:** 출퇴근·쉬는 시간에 폰으로 쓰는 상황을 가정해 오프라인(PWA) 동작을 전제로 설계

</details>

</td>

</tr>
</table>

---

## 💡 앞으로 만들 프로젝트 / 아이디어

_아직 없습니다._

> 아이디어가 구체화되면 `projects.json`의 status를 `building`으로 바꾸세요. 자동으로 카드 섹션으로 이동합니다.

<!-- PROJECTS:END -->

---

## 📫 Contact

- GitHub: [@easyseop](https://github.com/easyseop)
- Email: **[수정 필요: 이메일]**
- 기타: **[수정 필요: 블로그 / X / LinkedIn 등]**

---

<div align="center">

<sub>이 포트폴리오는 계속 업데이트됩니다 · Made with vibe ✨</sub>

</div>
