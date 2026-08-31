// 시연용 mock 데이터 공통 타입.
// SRS §7.2 상태·데이터 모델(docs/SRS_연금플러스_v1.0.md)에 대응한다.
// 기능1·기능2 화면은 이 타입만 참조하고, 픽스처 리터럴을 직접 만들지 않는다.

export const DEMO_DATA_LABEL = '시연용 데이터'
export const MOCK_CALC_LABEL = '모의계산'

export type ConfidenceLevel = 'confirmed' | 'estimated'

export interface DateBand {
  from: string
  to: string
  businessDaysMin?: number
  businessDaysMax?: number
}

export type TransferStatus =
  | 'DRAFT'
  | 'RECEIVED'
  | 'REQUESTED'
  | 'VERIFYING'
  | 'LIQUIDATING'
  | 'REMITTING'
  | 'COMPLETED'
  | 'ACTION_REQUIRED'
  | 'REJECTED'
  | 'PARTIAL_BLOCKED'
  | 'DELAYED'

export interface Transfer {
  transferId: string
  status: TransferStatus
  fromInstitution: string
  toAccount: string
  submittedAt: string
  expectedCompletion: DateBand
}

export type HoldingStatus = 'TRANSFERABLE' | 'CASH_REQUIRED' | 'UNDETERMINED'

export interface Holding {
  code: string
  name: string
  status: HoldingStatus
  evalAmount: number
  realizedPl?: number
  settleDays?: number
  isCriticalPath: boolean
  layer: ConfidenceLevel
}

export interface LockWindow {
  startAt: string
  endBand: DateBand
  confidence: ConfidenceLevel
}

export type TradingAction = 'buy' | 'sell' | 'pay' | 'claim'

export interface TradingWindowStatus {
  value: 'OPEN' | 'SELL_ONLY' | 'LOCKED' | 'REOPENED'
  allowed: Record<TradingAction, boolean>
  confidence: ConfidenceLevel
}

export interface WithdrawalRequest {
  accountType: 'self' | 'other'
  withdrawalAmount: number
  evalAmount: number
  paymentYear: number
  age: number
}

export type TaxBucketType = 'tax_exempt' | 'retirement_income' | 'deduction_or_gain'

export interface TaxBucketBreakdown {
  bucketType: TaxBucketType
  amount: number
  taxRate: number
  layer: ConfidenceLevel
}
