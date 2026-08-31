# /goal — Issue #1 공통 기반 구현 (라우팅·레이아웃·mock 타입)

> AI-Place-Mate 예제(`docs/04-course/.../시각 프로토타이핑 TASK 우선 수행`)의 `/goal` 구조를
> 연금플러스 프로젝트 실제 파일·이슈에 맞춰 옮긴 버전. `aztks-agent`는 이 프로젝트에 없으므로
> 5축 평가 대신 §5에서 PRD·FINAL_CHECKLIST 근거의 자체 체크리스트로 대체한다.

## 1) 작업 핵심 목표 및 범위

- 목표: GitHub Issue [`#1` 공통 라우팅·레이아웃·mock 데이터 스키마 공통 기반](https://github.com/YseungY/pension-plus/issues/1)을 완료한다.
- 근거 문서: `docs/01-product/예상_프로토타입.html`(시각 프로토타입, 수정 금지·참고만), `docs/SRS.md`(FR-001~FR-012), `AGENTS.md`(구현 규칙).
- 시작 지점: 현재 브랜치 `feat/issue-1-common-foundation`에서 그대로 이어서 작업한다(새 브랜치 불필요).
- 작업 대상:
  - `src/app/router.tsx`, `src/app/App.tsx` — 6개 화면 라우트
  - `src/components/` — 공통 레이아웃(하단 고객센터 바 등)
  - `src/lib/` — 시연용 mock 데이터 공통 타입(`TRANSFER`, `HOLDING`, `LOCK_WINDOW`, `TRADING_WINDOW` 등, SRS §7.2 대응 원본은 `docs/SRS_연금플러스_v1.0.md` §7.2)
  - `src/styles/`, Tailwind 설정 — 디자인 토큰 (`docs/03-design/디자인시스템_개발적용가이드.md` 기준)
- 작업 자율성: 사용자 승인을 기다리지 않고 종료 조건 도달까지 진행한다. 단 **`src/features/transfer`, `src/features/withdrawal` 내부 화면 구현·main 머지·배포·새 패키지 설치는 하지 않는다** — 애초에 시도하지 않는다.

## 2) 작업 세부 규칙

- `AGENTS.md`를 먼저 읽고 그 규범 안에서 작업한다 (모바일 360px 우선, 계산식/컴포넌트 분리, 디자인 토큰 사용, `any` 금지, `시연용 데이터` 표시, 요청 범위 밖 수정 금지).
- 구현 순서:
  1. 라우트 6개 등록: `/`(홈), `/transfer/holdings`(이전 계좌·종목 확인), `/transfer/restrictions`(이전 전 제한사항 확인), `/transfer/status`(이관 현황판), `/withdrawal/input`(인출 조건 입력), `/withdrawal/result`(인출 결과) — 각 라우트는 해당 폴더의 완성 전까지 자리표시자(placeholder) 컴포넌트만 연결
  2. 공통 레이아웃: 하단 고객센터 바 고정 (KB증권/이관사 번호 분리 표시 — SRS FR-002 전제조건)
  3. `src/lib`에 mock 데이터 공통 타입 정의 (`TRANSFER`, `HOLDING`, `LOCK_WINDOW`, `TRADING_WINDOW`, `withdrawal_request`, `tax_bucket_breakdown`)
  4. 디자인 토큰(Tailwind 설정)을 `연금플러스 디자인 시스템.dc.html` 기준으로 연결
- 각 단계가 끝나면 커밋한다. 커밋 메시지는 한국어 Conventional Commits, 푸터에 `Refs #1`. **`Closes`는 쓰지 않는다** — 라우트 자리표시자만 만들 뿐 화면 구현은 기능1·2 담당자 몫이라 이슈가 완전히 끝나는 게 아니다.
- 미해소 결정: mock 타입 필드명 등 SRS §7.2에 명시 안 된 세부사항은 사용자에게 묻지 말고 SRS·PRD 근거로 직접 결정한 뒤, 무엇을 왜 그렇게 정했는지 커밋 메시지 본문에 한 줄로 남긴다.

## 3) 종료 조건 및 종료 방법

- 종료 조건 (아래 모두 충족 시 STOP):
  - 6개 라우트가 전부 연결되고 §5 자체 체크리스트가 전건 통과 → `STOP REASON: SELF_CHECK_PASS`
  - 위 조건 도달 전 SRS·PRD에 없는 핵심 의사결정(화면 URL 구조, 공통 타입 필드 등)이 3건 이상 쌓이면 → `STOP REASON: DECISION_BUDGET`, 사용자에게 보고 후 재개
- 종료 방법:
  1. `npm run build` 실행, exit 0 출력을 대화에 남긴다. **[게이트 1]**
  2. `npm run dev`를 백그라운드로 띄우고 6개 라우트에 각각 접속해 200/정상 렌더를 확인한 결과를 대화에 남긴다. **[게이트 2]**
  3. `rg -n "\bany\b" src -g "*.ts" -g "*.tsx"` 실행 — `any` 사용 0건 확인. **[게이트 3]**
  4. `git log --oneline main..HEAD`로 이번 작업 커밋 목록을, `git status --porcelain`으로 범위 밖 파일 변경이 없음을 대화에 남긴다.

## 4) 기타 제약조건

- main 머지 금지 · force push 금지 · 배포(Vercel) 트리거 금지.
- `docs/01-product/예상_프로토타입.html`, `docs/SRS.md`, `docs/PRD.md`는 참고만 하고 수정하지 않는다.
- `src/features/transfer/`, `src/features/withdrawal/` 내부 파일은 README만 있는 상태를 유지하고 건드리지 않는다 (담당자 몫).
- 새 패키지를 설치하지 않는다 (이미 있는 Vite·React·TypeScript·Tailwind·React Router 범위 안에서 작업).

## 5) 자체 평가 체크리스트 (aztks-agent 대체)

`aztks-agent`가 없으므로, PRD `docs/PRD.md` §5 성공 기준과 `docs/FINAL_CHECKLIST.md`(pension-plus-srs 원본)를 근거로 아래 5축을 스스로 판정하고 전건 통과해야 완료로 본다.

| 축 | 통과 조건 |
|---|---|
| **완전성** | 6개 화면 라우트가 전부 존재하고 이동 가능 |
| **일관성** | 모든 mock 타입이 `src/lib`에 정의되어 있고, 화면 컴포넌트가 픽스처를 직접 만들지 않고 이 타입만 참조 |
| **표시 규칙** | 레이아웃에 `시연용 데이터` 표시 자리(추후 화면이 채울 슬롯)가 마련되어 있음 |
| **모바일 우선** | 360px 폭에서 레이아웃(특히 하단 고객센터 바)이 깨지지 않음 |
| **경계 준수** | `src/features/transfer`, `src/features/withdrawal` 내부에 아무 파일도 새로 생기지 않음 |

하나라도 NO면 해당 항목만 고치고 게이트 1~4를 다시 통과시킨 뒤 재평가한다.

---

## 실행 방법

```text
/goal

@docs/05-workflow/goal-prompts/GOAL-issue-1-common-foundation.md 에서 정의하고 있는 작업 방법에 따라
목표를 완수할 때까지 작업을 수행해줘.
```

