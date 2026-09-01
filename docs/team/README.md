# 팀원 개발 가이드 — 이 문서만 먼저 보세요

연금플러스는 3명이 기능을 나눠 만드는 4일 MVP입니다. 이 문서만 보고 시작하고, 세부 조건이 필요할 때만 8번 참고자료를 엽니다.

## 1. 담당 기능

| 담당 | 수정할 폴더 | 구현 화면 | Issue |
|---|---|---|---|
| 공통·통합 | `src/app`, `src/components`, `src/lib` | 온보딩·홈·연금저축 관리·라우팅·통합·배포 | #1, #6 |
| 기능1 | `src/features/transfer` | 계좌 확인 → 제한사항 → 이관 현황판 | [#2](https://github.com/YseungY/pension-plus/issues/2), [#3](https://github.com/YseungY/pension-plus/issues/3) |
| 기능2 | `src/features/withdrawal` | 연금 외 수령 조건 확인 → 모의계산 결과 | [#4](https://github.com/YseungY/pension-plus/issues/4), [#5](https://github.com/YseungY/pension-plus/issues/5) |

기능1·2 담당자 이름만 팀 채팅에서 확정합니다. 다른 담당 폴더와 공통 설정은 수정하지 않습니다.

## 2. 처음 시작 — 그대로 복사하세요

Node.js가 `v24`인지 먼저 확인합니다.

```bash
node --version
git --version
```

저장소를 처음 받았다면:

```bash
git clone https://github.com/YseungY/pension-plus.git
cd pension-plus
npm install
git switch dev
git pull origin dev
git switch -c work/<본인이름>
npm run dev
```

이미 개인 브랜치를 만들었다면 작업 시작 전에:

```bash
git switch dev
git pull origin dev
git switch work/<본인이름>
git merge dev
npm run dev
```

터미널에 나온 `http://localhost:포트번호`를 브라우저에서 엽니다. 서버를 끄면 주소도 열리지 않습니다.

## 3. 코딩 에이전트에게 보내는 요청

아래 내용을 그대로 복사하고 대괄호만 담당 기능에 맞게 바꿉니다. 참고 파일 목록은 지우지 마세요.

```text
연금플러스 4일 MVP 작업입니다.

먼저 루트의 AGENTS.md를 읽어주세요.

담당 기능: [기능1 이관 현황판 / 기능2 연금 외 수령]
관련 Issue: [Issue 번호와 URL]
수정 가능한 폴더: [src/features/transfer / src/features/withdrawal]
수정하면 안 되는 곳: 공통 설정, 라우터, 다른 기능 폴더

참고 파일(모두 수정 금지, 참고만):
- 화면 구조·흐름·문구·샘플 데이터: docs/team/product/예상_프로토타입.html
- 시각 스타일(색상·타이포·카드 모양): docs/team/design/design-system/의 디자인 시스템·모바일 앱
  dc.html 두 파일 + docs/team/design/디자인시스템_개발적용가이드.md
- 이미 구현된 src/app/HomePage.tsx, src/features/onboarding/와 색상·폰트·카드 스타일이
  같아 보이게 만들어주세요. 새 색상 값을 만들지 말고 src/styles/globals.css의
  토큰(navy-*, mint-*, surface, line, text-* 등)을 쓰세요.

모든 화면에서 뒤로가기(헤더 버튼·브라우저 뒤로가기)가 정상 동작해야 하고, 홈에서 시작해
담당 흐름의 끝까지 막히거나 끊기지 않고 자연스럽게 이어져야 합니다.

Issue의 완료 조건과 현재 코드를 먼저 확인하고 구현 계획을 5단계 이내로 제시해주세요.
한 화면씩 구현하고, 완료 후 npm run build와 npm run test를 실행해주세요.
마지막에 변경 파일, 브라우저 확인 방법, 남은 문제를 알려주세요.
```

## 4. 구현해야 하는 주소

| 주소 | 화면 | 담당 |
|---|---|---|
| `/` | 스플래시 | 공통 |
| `/onboarding` | 진행 링 온보딩 | 공통 |
| `/connect` | 시연용 바로 연결 | 공통 |
| `/home` | 홈 | 공통 |
| `/login`, `/signup` | 시연용 로그인·회원가입 | 공통 |
| `/pension-savings` | 연금저축 관리 (구현 완료) | 공통 |
| `/transfer/holdings` | 이전 계좌·종목 확인 | 기능1 |
| `/transfer/restrictions` | 이전 전 제한사항 | 기능1 |
| `/transfer/status` | 이관 현황판 | 기능1 |
| `/withdrawal/input` | 연금 외 수령 조건 확인 | 기능2 |
| `/withdrawal/result` | 연금 외 수령 결과 | 기능2 |

**화면 진입 흐름**

- 홈의 "타사 퇴직연금 가져오기" 버튼 → `/transfer/holdings`(기능1 시작)
- 홈의 "이관사 확인 진행 중" 카드 → `/transfer/status`
- 홈의 "연금저축 관리" 버튼 → `/pension-savings`, 그 안 출금 관리 > "연금 외 수령" → `/withdrawal/input`(기능2 시작)

`/pension-savings`는 입출금 관리 탭에 입금 관리·출금 관리 항목이 다 보이지만, 실제로 눌러서 이동하는 항목은 **연금 외 수령**뿐입니다(공통에서 구현 완료, 기능2는 손댈 필요 없음). 새 주소나 기능을 임의로 추가하지 않고, 실제 인증·계좌 연결·DB·금융 API·이체·출금도 만들지 않습니다.

## 5. 완료 확인

작업을 끝내기 전에 아래만 확인합니다.

- [ ] 홈에서 시작해 담당 흐름의 끝까지 막히거나 끊기지 않고 자연스럽게 이어진다.
- [ ] 모든 화면에서 뒤로가기(헤더 버튼·브라우저 뒤로가기)가 정상 동작한다.
- [ ] 모바일 너비에서 가로 스크롤이 없다.
- [ ] `시연용 데이터` 또는 `모의계산` 안내가 보인다.
- [ ] 실제 금융 거래가 실행되는 것처럼 보이지 않는다.
- [ ] `npm run build`가 성공한다.
- [ ] 계산을 수정했다면 `npm run test`가 성공한다.
- [ ] 다른 담당 폴더를 수정하지 않았다.

## 6. 커밋과 PR — 그대로 복사하세요

```bash
git status
git add <내가 수정한 파일>
git commit -m "feat: 구현한 화면 이름"
git push -u origin work/<본인이름>
```

GitHub에서 반드시 `work/<본인이름> → dev` 방향으로 PR을 만듭니다. `main`으로 바로 보내지 않습니다.

PR에는 아래 세 가지만 씁니다.

```markdown
## 구현한 것
-

## 확인 방법
1.

## 남은 문제
- 없음
```

## 7. 문제가 생기면

혼자 오래 해결하지 말고 아래 형식으로 팀 채팅에 보냅니다.

```text
작업 브랜치:
실행한 명령:
열려고 한 주소:
터미널 오류:
오류 화면 캡처:
직전에 수정한 파일:
```

충돌이 나면 파일을 삭제하거나 `git reset --hard`를 실행하지 않습니다. 공통 파일 수정이 필요하면 통합 담당자에게 먼저 알립니다.

## 8. 필요할 때만 보는 참고자료

- 화면과 샘플 데이터: [예상 프로토타입](product/예상_프로토타입.html)
- 상세 기능 조건: [상세 PRD](product/PRD_원본상세.md)
- 디자인 구현 기준: [디자인 시스템 가이드](design/디자인시스템_개발적용가이드.md)
- 설치·Git 상세 설명: [개발환경·협업 가이드](development/개발환경_협업가이드.md)
- 최종 제출 기준: [PRD](../submission/PRD_MVP.md), [SRS](../submission/SRS_MVP.md)

핵심 기준이 서로 다르면 `docs/submission/PRD_MVP.md`, `docs/submission/SRS_MVP.md`, GitHub Issue 순으로 우선합니다.
