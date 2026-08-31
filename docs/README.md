# 연금플러스 문서 인덱스

문서는 목적에 따라 `최종 제출`, `팀 개발`, `원본·참고자료`로 나눕니다. 처음부터 모든 문서를 읽지 않고 현재 작업에 필요한 문서만 확인합니다.

## 1. 최종 제출 핵심 문서

| 문서 | 역할 | 상태 |
|---|---|---|
| [MVP PRD](./PRD.md) | 3명·4일 MVP의 목표와 범위 | 범위 확정 |
| [SRS Lite](./SRS.md) | 구현 Requirement와 Acceptance Criteria | 작성 중 |
| [기술 학습 계획](./TECH_LEARNING_PLAN.md) | 기술 선택·학습·적용 결과 | 작성 중 |
| [Knowledge Base](./knowledge-base/00-index.md) | 근거·결정·도메인 지식·용어 | 기본 구조 완료 |
| [AI 협업 기록](./AI_WORKFLOW_LOG.md) | Goal 실행 등 판단을 바꾼 AI 활용 사례 2~3개 | Goal 1 기록 완료 |

최종 README에서는 위 문서와 GitHub Issues·Project·배포 URL·Master Deck을 한 번에 연결합니다.

## 2. 팀 개발 시작 문서

팀원이 처음 저장소를 받으면 아래 순서로 확인합니다.

1. [개발 전 준비](./00-start/개발전_준비.md)
2. [간단 실행계획](./00-start/간단_실행계획.md)
3. [개발환경·협업 가이드](./02-development/개발환경_협업가이드.md)
4. [예상 프로토타입](./01-product/예상_프로토타입.html)
5. [디자인 시스템 적용 가이드](./03-design/디자인시스템_개발적용가이드.md)

## 3. 기능 구현 근거

| 영역 | 먼저 읽을 문서 | 필요할 때 추가 확인 |
|---|---|---|
| 공통·통합 | [MVP PRD](./PRD.md), [SRS Lite](./SRS.md) | [공통 작업 프롬프트](./05-workflow/goal-prompts/GOAL-issue-1-common-foundation.md) |
| 기능1 이관 | [상세 PRD](./01-product/PRD.md)의 기능1 부분 | 예상 프로토타입·디자인 가이드 |
| 기능2 인출 | [상세 PRD](./01-product/PRD.md)의 기능2·계산 부분 | 상세 SRS·테스트 기준 |

## 4. 폴더 안내

```text
docs/
├─ PRD.md                  # 최종 제출용 MVP PRD
├─ SRS.md                  # 최종 제출용 SRS Lite
├─ TECH_LEARNING_PLAN.md   # 기술 학습 계획과 적용 기록
├─ knowledge-base/         # KB 인덱스·근거·결정·용어
├─ 00-start/               # 개발 전 결정과 4일 일정
├─ 01-product/             # 상세 PRD와 예상 프로토타입
├─ 02-development/         # 개발환경·Git 협업 기준
├─ 03-design/              # 디자인 적용 가이드와 원본
├─ 04-course/              # 수업 제출 기준과 강사 가이드
├─ 05-workflow/            # Issue별 AI 작업 프롬프트
└─ 99-background/          # 역기획·이전 계획 참고자료
```

## 5. 원본·참고자료

- [상세 SRS v1.0](./SRS_연금플러스_v1.0.md): 전체 제품 요구사항 원본
- [수업자료 안내](./04-course/README.md): 최종 제출 기준과 참고 순서
- [배경자료 안내](./99-background/README.md): 역기획 과정과 이전 상세 계획

원본 문서는 근거 확인용입니다. MVP 구현 범위는 `PRD.md`와 `SRS.md`를 우선합니다.

