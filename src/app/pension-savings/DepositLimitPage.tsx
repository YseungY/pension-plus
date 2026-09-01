import { Info } from 'lucide-react'
import { SubPageHeader } from '../../components/layout/SubPageHeader'

export function DepositLimitPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="입금한도 설정" backTo="/pension-savings" accountLabel="신연금저축 123-456-789 01" />

      <div className="flex-1 px-5 pb-8 pt-6">
        <p className="text-[13px] font-[700] text-text-secondary">현재 한도 금액</p>
        <p className="mt-2 text-[30px] font-[800] tabular-nums text-navy-800">6,000,000원</p>

        <div className="mt-5 h-2 w-full rounded-full bg-surface-2">
          <div className="h-2 w-[33%] rounded-full bg-mint-500" />
        </div>
        <div className="mt-2 flex justify-between text-[12px] text-text-tertiary">
          <span>0원</span>
          <span>18,000,000원</span>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between text-[14px]">
            <span className="flex items-center gap-2 text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-mint-500" aria-hidden="true" />
              올해 입금한 금액
            </span>
            <span className="font-[700] tabular-nums text-navy-800">0원</span>
          </div>
          <div className="flex items-center justify-between text-[14px]">
            <span className="flex items-center gap-1 text-text-secondary">
              남아있는 한도
              <Info className="h-3.5 w-3.5 text-text-tertiary" aria-hidden="true" />
            </span>
            <span className="font-[700] tabular-nums text-navy-800">6,000,000원</span>
          </div>
        </div>

        <button
          type="button"
          aria-disabled="true"
          className="mt-4 w-full cursor-default rounded-xl border border-line py-3 text-[13px] font-[700] text-text-secondary"
        >
          전 금융기관 한도조회
        </button>

        <div className="mt-8">
          <p className="flex items-center gap-1 text-[14px] font-[700] text-navy-800">
            한도 금액 변경하기
            <Info className="h-3.5 w-3.5 text-text-tertiary" aria-hidden="true" />
          </p>
          <div className="mt-3 flex items-center justify-end rounded-xl border border-line px-4 py-3 text-[15px] text-text-tertiary">원</div>
        </div>
      </div>

      <div className="px-5 pb-8">
        <button type="button" aria-disabled="true" className="h-14 w-full cursor-default rounded-[14px] bg-surface-2 text-[16px] font-[800] text-text-tertiary">
          입금한도 변경 확정
        </button>
      </div>
    </main>
  )
}
