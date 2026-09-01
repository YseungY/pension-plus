import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from '../components/layout/AppLayout'
import { PlaceholderScreen } from '../components/layout/PlaceholderScreen'
import { HomePage } from './HomePage'
import { PensionSavingsPage } from './PensionSavingsPage'
import { SplashPage } from '../features/onboarding/pages/SplashPage'
import { OnboardingPage } from '../features/onboarding/pages/OnboardingPage'
import { ConnectPage } from '../features/onboarding/pages/ConnectPage'
import { PreviewPage } from '../features/onboarding/pages/PreviewPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pension-savings" element={<PensionSavingsPage />} />
          <Route
            path="/transfer/holdings"
            element={
              <PlaceholderScreen
                title="이전 계좌·종목 확인"
                description="보유 종목을 그대로 옮김·팔아야 함·판정 불가 3그룹으로 판정해 보여줍니다."
              />
            }
          />
          <Route
            path="/transfer/restrictions"
            element={
              <PlaceholderScreen
                title="이전 전 제한사항 확인"
                description="이체 불가 조건과 매매 잠금 구간, 매매 가능 여부를 보여줍니다."
              />
            }
          />
          <Route
            path="/transfer/status"
            element={
              <PlaceholderScreen
                title="이관 현황판"
                description="이관 진행 단계와 예상 완료일을 기간으로 보여줍니다."
              />
            }
          />
          <Route
            path="/withdrawal/input"
            element={
              <PlaceholderScreen
                title="연금 외 수령"
                description="연금저축 관리 > 출금 관리에서 진입합니다. 인출 희망 금액과 연금수령한도를 입력합니다."
              />
            }
          />
          <Route
            path="/withdrawal/result"
            element={
              <PlaceholderScreen
                title="연금 외 수령 결과"
                description="3층 법정 인출순서와 예상 세금·실수령액을 보여줍니다."
              />
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
