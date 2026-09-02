import { describe, expect, it } from 'vitest'
import { calculateWithdrawalTax, exceedsEvalAmount } from './withdrawalTax'

describe('calculateWithdrawalTax', () => {
  it('전액 인출 시 재원 순서대로 배분하고 세금을 합산한다', () => {
    const result = calculateWithdrawalTax(18_500_000, {
      tax_exempt: 3_500_000,
      retirement_income: 2_000_000,
      deduction_or_gain: 13_000_000,
    })

    expect(result.totalWithdrawal).toBe(18_500_000)
    expect(result.buckets.map((b) => b.bucketType)).toEqual(['tax_exempt', 'retirement_income', 'deduction_or_gain'])
    expect(result.totalTax).toBeCloseTo(2_000_000 * 0.55 + 13_000_000 * 0.044)
    expect(result.netAmount).toBeCloseTo(result.totalWithdrawal - result.totalTax)
  })

  it('비과세 한도 내 인출은 세금이 0이다', () => {
    const result = calculateWithdrawalTax(1_000_000, {
      tax_exempt: 3_500_000,
      retirement_income: 2_000_000,
      deduction_or_gain: 13_000_000,
    })

    expect(result.buckets).toHaveLength(1)
    expect(result.totalTax).toBe(0)
    expect(result.netAmount).toBe(1_000_000)
  })
})

describe('exceedsEvalAmount', () => {
  it('평가금액을 초과하면 true를 반환한다', () => {
    expect(exceedsEvalAmount(20_000_000, 18_500_000)).toBe(true)
    expect(exceedsEvalAmount(18_500_000, 18_500_000)).toBe(false)
  })
})
