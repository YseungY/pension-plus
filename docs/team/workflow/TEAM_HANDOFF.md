# 팀원 전달 메시지 (카카오톡용 초안)

## 기능1 담당자에게

```text
기능1(이관 현황판) 담당 부탁해요.

GitHub Issue: 
- https://github.com/YseungY/pension-plus/issues/2 (이전 계좌·종목 확인 + 제한사항 확인)
- https://github.com/YseungY/pension-plus/issues/3 (이관 현황판)

작업 폴더: src/features/transfer/
근거 문서: docs/submission/PRD_MVP.md, docs/submission/SRS_MVP.md (FR-002~009), docs/team/product/예상_프로토타입.html

시작 전에:
1. README.md '팀원 시작 순서' 그대로 따라주세요.
2. 루트의 AGENTS.md를 AI에게 먼저 읽게 해주세요.
3. work/<본인이름> 브랜치에서 작업하고 dev로 PR 올려주세요.

공통 라우팅·레이아웃·mock 타입(src/lib/mock-types.ts, src/components/layout/)은
이미 만들어놨으니 그대로 가져다 쓰시면 됩니다.
```

## 기능2 담당자에게

```text
기능2(인출순서 시뮬레이터) 담당 부탁해요.

GitHub Issue:
- https://github.com/YseungY/pension-plus/issues/4 (인출 조건 입력 + 한도 계산)
- https://github.com/YseungY/pension-plus/issues/5 (인출 결과 화면)

작업 폴더: src/features/withdrawal/
근거 문서: docs/submission/PRD_MVP.md, docs/submission/SRS_MVP.md (FR-010~012), docs/team/product/예상_프로토타입.html

시작 전에:
1. README.md '팀원 시작 순서' 그대로 따라주세요.
2. 루트의 AGENTS.md를 AI에게 먼저 읽게 해주세요.
3. work/<본인이름> 브랜치에서 작업하고 dev로 PR 올려주세요.

계산 로직(연금수령한도·인출순서·세액)은 docs/team/references/SRS_원본_v1.0.md §7.1 산식과
프로토타입 검증값을 기준으로 만들고, UI 컴포넌트와 분리해서 npm run test로 확인해주세요.
```

## 공통 안내

- 9월 2일 14시 이후 통합 시작, 9월 3일 11시 코드 동결 (`docs/team/start/개발전_준비.md` §5)
- 막히는 부분은 바로 공유해주세요 — 혼자 오래 고민하지 않기
