# 연금플러스

연금 이전 진행 과정과 인출순서를 이해하기 쉽게 보여주는 모바일 웹 MVP입니다.

## MVP 기능

- 기능1: 연금 이전 가능 여부·예상 손익·진행 단계·제한 업무 확인
- 기능2: 연금수령한도·인출 재원 순서·예상 세금·실수령액 확인

## 팀원 시작 순서

아래 순서대로 확인합니다.

1. `docs/00-start/개발전_준비.md`를 팀과 함께 채웁니다.
2. `docs/00-start/간단_실행계획.md`에서 일정과 역할을 확인합니다.
3. `docs/01-product/예상_프로토타입.html`에서 전체 화면 흐름을 봅니다.
4. `docs/03-design/design-system/연금플러스 디자인 시스템.dc.html`에서 디자인을 확인합니다.
5. `docs/02-development/개발환경_협업가이드.md`에 따라 환경과 브랜치를 준비합니다.
6. 코딩 에이전트에게 루트의 `AGENTS.md`를 먼저 읽게 합니다.

담당 기능의 상세 조건이 필요할 때만 `docs/01-product/PRD.md`의 관련 부분을 확인합니다.

## 기술 구성

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Vitest
- Vercel

## 브랜치

```text
main             최종 시연 가능한 버전
dev              팀 작업 통합 버전
work/<이름>      개인 작업 브랜치
```

`main`과 `dev`에 직접 push하지 않고 개인 브랜치에서 `dev`로 PR을 만듭니다.

## 문서 구조

```text
docs/
├─ 00-start/         # 팀원이 가장 먼저 확인
├─ 01-product/       # PRD와 예상 프로토타입
├─ 02-development/   # 개발환경과 Git 협업
├─ 03-design/        # 디자인 규칙과 원본
├─ 04-course/        # 수업 제출 계획과 강사 가이드
└─ 99-background/    # 역기획과 이전 검토 자료
```

## 팀원에게 보낼 안내

```text
GitHub 저장소를 clone한 뒤 README의 '팀원 시작 순서'대로 확인해주세요.

개발 전에는 아래 파일 두 개만 먼저 보면 됩니다.
1. docs/00-start/개발전_준비.md
2. docs/00-start/간단_실행계획.md

화면은 docs/01-product/예상_프로토타입.html,
디자인은 docs/03-design/design-system/연금플러스 디자인 시스템.dc.html을 참고해주세요.

환경 설치와 Git 사용은 docs/02-development/개발환경_협업가이드.md를 따라주세요.
AI에게 작업을 요청할 때는 반드시 루트의 AGENTS.md를 먼저 읽게 해주세요.
```

## 주의

- 모든 계좌·종목·이관 상태는 시연용 데이터입니다.
- 로그인·회원가입은 시연용 UI와 홈 진입 흐름만 제공하며 실제 계정이나 세션을 생성하지 않습니다.
- 실제 금융기관 API, 본인 인증, 데이터베이스, 이체와 출금 실행은 MVP 범위에 포함하지 않습니다.
- 계산 결과는 모의계산이며 실제 원천징수 결과와 다를 수 있습니다.
