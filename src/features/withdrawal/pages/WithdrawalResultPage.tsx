import { useLocation, useNavigate } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { formatWon } from '../../../lib/format'
import { calculateWithdrawalTax } from '../calculator/withdrawalTax'
import { taxBucketBalances, withdrawalRequest } from '../mock/withdrawal'
import type { TaxBucketType } from '../../../lib/mock-types'

const BUCKET_LABEL: Record<TaxBucketType, { name: string; tag?: string; desc?: string; taxLabel?: string }> = {
  tax_exempt: { name: '과세제외금액', tag: '비과세', desc: '세액공제를 받지 않은 원금' },
  retirement_income: { name: '이연퇴직소득', taxLabel: '퇴직소득세 70~50%' },
  deduction_or_gain: { name: '과세대상소득', desc: '세액공제 받은 원금 + 운용수익', taxLabel: '연금소득세 3.3~5.5%' },
}

export function WithdrawalResultPage() {
  const location = useLocation() as { state?: { amount?: number } }
  const navigate = useNavigate()
  const amount = location.state?.amount ?? withdrawalRequest.evalAmount
  const result = calculateWithdrawalTax(amount, { ...taxBucketBalances })

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="연금 외 수령 결과" backTo="/withdrawal/input" />

      <div className="flex-1 px-5 pb-8 pt-4">
        <div className="rounded-[18px] bg-navy-800 p-6 shadow-[0_10px_24px_rgba(14,32,51,0.14)]">
          <p className="text-[13px] font-[600] text-navy-300">실수령액 (확정)</p>
          <p className="mt-2 flex items-baseline gap-2">
            <span className="text-[30px] font-[700] tabular-nums tracking-[-0.025em] text-mint-400">
              {result.netAmount.toLocaleString('ko-KR')}
            </span>
            <span className="text-[15px] font-[600] text-white">원</span>
          </p>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-white/15 pt-4 text-[13.5px]">
            <div className="flex justify-between">
              <span className="text-navy-300">총 인출금액</span>
              <span className="font-[600] tabular-nums text-white">{formatWon(result.totalWithdrawal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-navy-300">세금합계</span>
              <span className="font-[600] tabular-nums text-[#FF9AA7]">{formatWon(result.totalTax)}</span>
            </div>
          </div>
        </div>

        <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">법정 인출순서</h2>
        <p className="mb-3 text-[13px] leading-[1.5] text-text-secondary">
          법령에 따라 아래 순서대로 인출되며, 항목별로 세금이 다르게 부과됩니다. 순서는 바꿀 수 없습니다.
        </p>
        <div className="overflow-hidden rounded-[14px] border border-line">
          <div className="grid grid-cols-[24px_1fr_auto] gap-3 bg-navy-800 px-4 py-3">
            <span className="text-[11.5px] font-[700] text-navy-300">순</span>
            <span className="text-[11.5px] font-[700] text-white">재원</span>
            <span className="text-[11.5px] font-[700] text-white">세율</span>
          </div>
          {result.buckets.map((bucket, i) => {
            const meta = BUCKET_LABEL[bucket.bucketType]
            return (
              <div
                key={bucket.bucketType}
                className={`grid grid-cols-[24px_1fr_auto] items-center gap-3 border-t border-line px-4 py-3.5 first:border-t-0 ${
                  i === 0 ? 'bg-mint-100' : ''
                }`}
              >
                <span className={`text-[13px] ${i === 0 ? 'text-mint-700' : 'text-text-tertiary'}`}>{i + 1}</span>
                <span className="flex flex-col gap-0.5">
                  <span className={`flex items-center gap-1.5 text-[14px] font-[700] ${i === 0 ? 'text-mint-700' : 'text-navy-800'}`}>
                    {meta.name}
                    {meta.tag && (
                      <span className="rounded bg-mint-200 px-1.5 py-0.5 text-[10px] font-[800] text-mint-700">{meta.tag}</span>
                    )}
                  </span>
                  <span className={`text-[12px] ${i === 0 ? 'text-mint-700' : 'text-text-tertiary'}`}>
                    {meta.desc ?? '세액공제를 받지 않은 원금'}
                  </span>
                </span>
                <span className="flex flex-col items-end gap-1">
                  <span className={`text-[14px] tabular-nums ${i === 0 ? 'text-mint-700' : 'text-navy-800'}`}>
                    {bucket.amount.toLocaleString('ko-KR')}
                  </span>
                  <span className={`text-[11.5px] font-[700] ${i === 0 ? 'text-mint-700' : 'text-text-secondary'}`}>
                    {meta.taxLabel ?? '비과세'}
                  </span>
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-line p-4">
          <h3 className="text-[15px] font-[700] text-navy-800">💡 비과세 인출을 희망하시나요?</h3>
          <p className="mt-1.5 text-[12.5px] leading-[1.55] text-text-secondary">
            은행연합회에서 연금저축 한도를 조회 및 변경하신 후, 비과세용 추가 계좌를 개설하시면 세금 부담 없이 인출하실 수 있습니다.
          </p>
          <button
            type="button"
            aria-disabled="true"
            className="mt-3 h-11 w-full cursor-default rounded-xl border border-line text-[13.5px] font-[700] text-text-secondary"
          >
            은행연합회 연금저축 한도 조회
          </button>
          <button
            type="button"
            aria-disabled="true"
            className="mt-2 h-11 w-full cursor-default rounded-xl bg-surface-2 text-[13.5px] font-[800] text-text-tertiary"
          >
            비과세 인출용 추가 계좌개설
          </button>
        </div>

        <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-3.5">
          <p className="text-[11.5px] leading-[1.55] text-text-tertiary">
            ※ 본 결과는 <strong className="text-navy-800">모의계산</strong>입니다. 실제 원천징수 세액과 다를 수 있으며, 투자·세무
            자문에 해당하지 않습니다.
          </p>
        </div>
      </div>

      <div className="px-5 pb-8">
        <button
          type="button"
          onClick={() => navigate('/pension-savings')}
          className="h-14 w-full rounded-[14px] bg-navy-800 text-[16px] font-[800] text-white transition active:scale-[0.98]"
        >
          확인했어요
        </button>
      </div>
    </main>
  )
}
