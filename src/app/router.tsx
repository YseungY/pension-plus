import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from '../components/layout/AppLayout'
import { PlaceholderScreen } from '../components/layout/PlaceholderScreen'
import { HomePage } from './HomePage'
import { MyInfoPage } from './MyInfoPage'
import { CancelPage } from './pension-savings/CancelPage'
import { DepositHistoryPage } from './pension-savings/DepositHistoryPage'
import { DepositLimitPage } from './pension-savings/DepositLimitPage'
import { PensionReceiptPage } from './pension-savings/PensionReceiptPage'
import { PensionSavingsPage } from './PensionSavingsPage'
import { TransferIntroPage } from '../features/transfer/pages/TransferIntroPage'
import { SplashPage } from '../features/onboarding/pages/SplashPage'
import { OnboardingPage } from '../features/onboarding/pages/OnboardingPage'
import { ConnectPage } from '../features/onboarding/pages/ConnectPage'
import { PreviewPage } from '../features/onboarding/pages/PreviewPage'

export function AppRouter() {
  return (
    <BrowserRouter basename="/app">
      <AppLayout>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pension-savings" element={<PensionSavingsPage />} />
          <Route path="/pension-savings/deposit-limit" element={<DepositLimitPage />} />
          <Route path="/pension-savings/deposit-history" element={<DepositHistoryPage />} />
          <Route path="/pension-savings/pension-receipt" element={<PensionReceiptPage />} />
          <Route path="/pension-savings/cancel" element={<CancelPage />} />
          <Route path="/my-info" element={<MyInfoPage />} />
          <Route path="/transfer/intro" element={<TransferIntroPage />} />
          <Route
            path="/transfer/pre-check"
            element={
              <PlaceholderScreen
                title="실물이전 사전조회"
                description="퇴직연금 유형·계좌를 선택하고 이전 가능 조건 3가지를 확인합니다."
              />
            }
          />
          <Route
            path="/transfer/holdings"
            element={
              <PlaceholderScreen
                title="사전조회 결과"
                description="보유 종목을 그대로 옮김·현금화 2그룹으로 판정하고 매매 제한 예상 구간을 보여줍니다."
              />
            }
          />
          <Route
            path="/transfer/status"
            element={
              <PlaceholderScreen
                title="이전 진행 현황"
                description="이관 진행 단계와 예상 완료일을 기간으로 보여줍니다."
              />
            }
          />
          <Route
            path="/transfer/complete"
            element={
              <PlaceholderScreen
                title="이전 완료"
                description="실물이전이 완료된 결과와 재편입 안내를 보여줍니다."
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
