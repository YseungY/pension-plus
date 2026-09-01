# 팀원 전달 메시지 (카카오톡용 초안)

## 기능1 담당자에게

```text
기능1(이관 현황판) 담당 부탁해요.

홈 화면 "타사 퇴직연금 가져오기" 버튼을 누르면 시작되는 흐름이에요.
계좌·종목 확인 → 제한사항 확인까지 진행한 뒤, 이후에는 홈의 "이관사 확인 진행 중" 카드를 눌러서
이관 현황판(진행 중인 단계)으로 들어가는 구조입니다.

GitHub Issue: 
- https://github.com/YseungY/pension-plus/issues/2 (이전 계좌·종목 확인 + 제한사항 확인)
- https://github.com/YseungY/pension-plus/issues/3 (이관 현황판)

작업 폴더: src/features/transfer/
근거 문서: docs/submission/PRD_MVP.md, docs/submission/SRS_MVP.md (FR-002~009), docs/team/product/예상_프로토타입.html
(프로토타입에서 "타사 퇴직연금 가져오기" 메뉴 → screen-f1-0부터 이어지는 화면들 참고)

시작 전에:
1. README.md '팀원 시작 순서' 그대로 따라주세요.
2. 루트의 AGENTS.md를 AI에게 먼저 읽게 해주세요.
3. work/<본인이름> 브랜치에서 작업하고 dev로 PR 올려주세요.

공통 라우팅·레이아웃·mock 타입(src/lib/mock-types.ts, src/components/layout/)은
이미 만들어놨으니 그대로 가져다 쓰시면 됩니다.
```

## 기능2 담당자에게

```text
기능2(연금 외 수령) 담당 부탁해요.
※ "인출순서 시뮬레이터"에서 이름·진입 구조가 바뀌었어요.

홈 화면 "연금저축 관리" 버튼(/pension-savings)은 공통에서 이미 만들어놨어요.
그 화면 출금 관리 섹션의 "연금 외 수령"을 누르면 기능2 화면(/withdrawal/input)으로 넘어옵니다.
기능2는 여기서부터 시작하면 돼요 — 연금저축 관리 화면은 안 건드려도 됩니다.
연금 외 수령 화면은 탭(본인·중도인출 / 타 명의·상속) 중 "본인·중도인출"만 실제로 만들고,
"타 명의·상속" 탭은 프로토타입처럼 안내 문구만 있는 정적 화면으로 두면 됩니다.

GitHub Issue:
- https://github.com/YseungY/pension-plus/issues/4 (연금 외 수령 조건·한도 계산)
- https://github.com/YseungY/pension-plus/issues/5 (연금 외 수령 결과 화면)

작업 폴더: src/features/withdrawal/
근거 문서: docs/submission/PRD_MVP.md, docs/submission/SRS_MVP.md (FR-010~012), docs/team/product/예상_프로토타입.html
(프로토타입에서 "연금저축 관리" 메뉴 → screen-manage의 "연금 외 수령" 항목 → screen-f2-detail 흐름과
"인출 항목 및 세금 시뮬레이터" 모달 참고. screen-f2-entry는 화면 어디서도 연결되지 않는 미사용 화면이니 참고하지 마세요.)

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
