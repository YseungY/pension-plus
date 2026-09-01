# 연금플러스

연금 이전 진행 과정과 인출순서를 이해하기 쉽게 보여주는 모바일 웹 MVP입니다.

## 최종 제출 허브

| 산출물 | 링크 | 상태 |
|---|---|---|
| Master Deck | [16페이지 발표 원고](docs/team/workflow/MASTER_DECK.md) | 구현·검증 결과 반영 중 |
| PRD | [MVP PRD](docs/submission/PRD_MVP.md) | 완료 |
| SRS | [SRS Lite](docs/submission/SRS_MVP.md) | 완료 |
| 기술 학습 계획 | [TECH_LEARNING_PLAN](docs/submission/TECH_LEARNING_PLAN.md) | 작성 중 |
| Knowledge Base | [KB Index](docs/submission/knowledge-base/00-index.md) | 기본 구조 완료 |
| AI 협업 기록 | [AI_WORKFLOW_LOG](docs/submission/AI_WORKFLOW_LOG.md) | Goal 1 기록 완료 |
| GitHub Project | [Project #13](https://github.com/users/YseungY/projects/13) | 진행 중 |
| 배포 제품 | Vercel URL 추가 예정 | 미배포 |

전체 문서 설명은 [문서 인덱스](docs/README.md)에서 확인합니다.

## 팀 개발 시작

> **팀원은 [한 장짜리 팀원 개발 가이드](docs/team/README.md)만 먼저 확인하세요.** 설치, 담당 기능, 에이전트 요청문, 완료 조건과 PR 방법이 한 문서에 있습니다.

```bash
npm install
npm run dev
```

작업은 개인 `work/<이름>` 브랜치에서 진행하고 `dev` 브랜치로 PR을 만듭니다.

## MVP 기능

- 기능1: 연금 이전 가능 여부·예상 손익·진행 단계·제한 업무 확인
- 기능2: 연금수령한도·인출 재원 순서·예상 세금·실수령액 확인
- 로그인·회원가입: 제출 요건 확인을 위한 시연용 UI

실제 계정·인증·데이터베이스·금융기관 API·이체·출금은 구현하지 않습니다. 모든 계좌와 계산 결과는 시연용이며 실제 결과와 다를 수 있습니다.

## 기술 구성

Vite · React · TypeScript · Tailwind CSS · React Router · Vitest · Vercel
