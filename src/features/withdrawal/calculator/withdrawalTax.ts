import type { TaxBucketBreakdown, TaxBucketType } from '../../../lib/mock-types'

const BUCKET_ORDER: { type: TaxBucketType; rate: number }[] = [
  { type: 'tax_exempt', rate: 0 },
  { type: 'retirement_income', rate: 0.55 },
  { type: 'deduction_or_gain', rate: 0.044 },
]

export interface WithdrawalTaxResult {
  buckets: TaxBucketBreakdown[]
  totalWithdrawal: number
  totalTax: number
  netAmount: number
}

/** 인출 금액을 법정 순서(비과세 → 이연퇴직소득 → 과세대상소득)대로 재원에서 차감하며 세금을 모의계산한다. */
export function calculateWithdrawalTax(
  amount: number,
  balances: Record<TaxBucketType, number>,
): WithdrawalTaxResult {
  let remaining = Math.max(0, amount)
  const buckets: TaxBucketBreakdown[] = []

  for (const { type, rate } of BUCKET_ORDER) {
    const balance = balances[type]
    const allocated = Math.min(remaining, balance)
    buckets.push({ bucketType: type, amount: allocated, taxRate: rate, layer: 'estimated' })
    remaining -= allocated
    if (remaining <= 0) break
  }

  const totalWithdrawal = buckets.reduce((sum, b) => sum + b.amount, 0)
  const totalTax = buckets.reduce((sum, b) => sum + b.amount * b.taxRate, 0)

  return { buckets, totalWithdrawal, totalTax, netAmount: totalWithdrawal - totalTax }
}

/** FR-011: 인출 희망 금액이 평가금액을 초과하면 계산을 진행하지 않는다. */
export function exceedsEvalAmount(amount: number, evalAmount: number): boolean {
  return amount > evalAmount
}
