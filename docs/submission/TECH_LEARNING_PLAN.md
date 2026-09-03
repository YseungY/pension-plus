# 기술 학습 계획

> 학습 주제는 최대 3개로 제한하고, 실제 제품 결정과 코드·배포에 적용한 증거를 남깁니다.

## 1. React에서 URL·컴포넌트·상태는 어떻게 연결되는가?

- 필요한 이유: 여러 화면의 사용자 흐름을 URL로 연결하고 새로고침에도 같은 화면을 유지해야 합니다.
- 적용 위치: React Router와 기능별 페이지 구성
- 확인할 것: 직접 URL 진입, 뒤로 가기, 새로고침 시 화면 유지
- 완료 증거: `src/app/router.tsx`에서 `/app` 하위 17개 경로를 연결했습니다. `vercel.json`의 SPA rewrite를 적용했고, 2026-09-03 `npm run build` 성공으로 타입과 번들 생성을 확인했습니다.
- 남은 한계: 브라우저별 뒤로가기 동작과 모바일 실기기 접근성은 제한된 시연 환경에서만 확인했습니다.

## 2. 시연용 데이터와 실제 API의 경계는 어떻게 나누는가?

- 필요한 이유: 실제 마이데이터 연동 상황을 가정하되 이번 MVP에서는 로컬 데이터만 사용합니다.
- 적용 위치: 기능별 mock 데이터와 데이터 조회 함수
- 확인할 것: UI를 바꾸지 않고 향후 API 호출로 교체할 수 있는지 검토합니다.
- 완료 증거: 기능1은 `src/features/transfer/mock/holdings.ts`, 기능2는 `src/features/withdrawal/mock/withdrawal.ts`에서 데이터를 분리했습니다. 계산은 `calculator/withdrawalTax.ts`로 UI와 분리했고 3개 단위 테스트가 통과했습니다.
- 남은 한계: 실제 인증·동의·오류 응답은 이번 범위에서 검증하지 않습니다.

## 3. Vercel Preview·Production 배포는 어떻게 작동하는가?

- 필요한 이유: 팀 PR을 미리 확인하고 최종 배포 URL을 안정적으로 제출해야 합니다.
- 적용 위치: Preview 배포, Production 배포, 하위 경로 새로고침 설정
- 확인할 것: 모바일 접속, 직접 URL 진입, HTTPS, Production URL
- 완료 증거: [Production](https://pension-plus.vercel.app)에서 HTTP 200 응답을 확인했습니다. `/`는 소개 페이지, `/app`은 모바일 시연 앱으로 분리하고 하위 경로 새로고침을 `vercel.json`으로 지원합니다.
- 남은 한계: 별도 커스텀 도메인과 실제 금융 API 운영 환경은 이번 MVP 범위에 포함하지 않았습니다.

