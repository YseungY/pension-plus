import type { WithdrawalRequest } from '../../../lib/mock-types'

// 시연용 데이터. docs/submission/SRS_MVP.md FR-010~012 근거.
export const withdrawalRequest: WithdrawalRequest = {
  accountType: 'self',
  withdrawalAmount: 18_500_000,
  evalAmount: 18_500_000,
  paymentYear: 2026,
  age: 48,
}

// 3층 인출순서 재원별 잔액. bucketType 순서 = 법정 인출순서.
export const taxBucketBalances = {
  tax_exempt: 3_500_000,
  retirement_income: 2_000_000,
  deduction_or_gain: 13_000_000,
} as const

// 연금수령한도(연간) 대비 사용 현황. FR-010 게이지에 사용.
export const pensionLimit = {
  total: 12_000_000,
  alreadyWithdrawn: 4_000_000,
}
