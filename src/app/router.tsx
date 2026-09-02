import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from '../components/layout/AppLayout'
import { HomePage } from './HomePage'
import { MyInfoPage } from './MyInfoPage'
import { CancelPage } from './pension-savings/CancelPage'
import { DepositHistoryPage } from './pension-savings/DepositHistoryPage'
import { DepositLimitPage } from './pension-savings/DepositLimitPage'
import { PensionReceiptPage } from './pension-savings/PensionReceiptPage'
import { PensionSavingsPage } from './PensionSavingsPage'
import { TransferIntroPage } from '../features/transfer/pages/TransferIntroPage'
import { TransferPreCheckPage } from '../features/transfer/pages/TransferPreCheckPage'
import { TransferHoldingsPage } from '../features/transfer/pages/TransferHoldingsPage'
import { TransferStatusPage } from '../features/transfer/pages/TransferStatusPage'
import { TransferCompletePage } from '../features/transfer/pages/TransferCompletePage'
import { WithdrawalInputPage } from '../features/withdrawal/pages/WithdrawalInputPage'
import { WithdrawalResultPage } from '../features/withdrawal/pages/WithdrawalResultPage'
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
          <Route path="/transfer/pre-check" element={<TransferPreCheckPage />} />
          <Route path="/transfer/holdings" element={<TransferHoldingsPage />} />
          <Route path="/transfer/status" element={<TransferStatusPage />} />
          <Route path="/transfer/complete" element={<TransferCompletePage />} />
          <Route path="/withdrawal/input" element={<WithdrawalInputPage />} />
          <Route path="/withdrawal/result" element={<WithdrawalResultPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
