import { Link } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { Notice } from '../../../components/ui/Notice'
import { formatWon } from '../../../lib/format'
import { holdings } from '../mock/holdings'

const transferable = holdings.filter((h) => h.status === 'TRANSFERABLE')
const cashRequired = holdings.filter((h) => h.status === 'CASH_REQUIRED')
const transferableAmount = transferable.reduce((sum, h) => sum + h.evalAmount, 0)
const realizedPl = cashRequired.reduce((sum, h) => sum + (h.realizedPl ?? 0), 0)
const cashSettledAmount = cashRequired.reduce((sum, h) => sum + h.evalAmount, 0) + realizedPl
const finalTotal = transferableAmount + cashSettledAmount
const fixedDeposit = transferable.find((h) => h.name === '정기예금')

export function TransferCompletePage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="이전 완료" backTo="/home" />

      <div className="flex-1 px-6 pb-8 pt-7">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-100">
          <span className="text-[26px] font-[800] text-mint-600">✓</span>
        </span>
        <h1 className="mt-5 text-[26px] font-[800] leading-[1.3] tracking-[-0.03em] text-navy-800">이전이 끝났어요</h1>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-text-secondary">8월 28일 신청 · 9월 5일 완료 · 7영업일</p>

        <div className="mt-5 rounded-[20px] border border-line p-5">
          <div className="flex items-baseline justify-between">
            <span className="text-[13px] text-text-secondary">그대로 이전 · {transferable.length}종</span>
            <span className="text-[15px] font-[700] tabular-nums text-navy-800">{formatWon(transferableAmount)}</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-[13px] text-text-secondary">현금 입고 · {cashRequired.length}종</span>
            <span className="text-[15px] font-[700] tabular-nums text-navy-800">{formatWon(cashSettledAmount)}</span>
          </div>
          <div className="my-4 h-px bg-line" />
          <div className="flex items-baseline justify-between">
            <strong className="text-[14.5px] font-[700] text-navy-800">총 입고 금액</strong>
            <span className="text-[19px] font-[700] tabular-nums text-mint-700">{formatWon(finalTotal)}</span>
          </div>
        </div>

        {fixedDeposit && (
          <p className="mt-3 text-[12.5px] leading-[1.6] text-text-tertiary">
            정기예금 {formatWon(fixedDeposit.evalAmount)}은 만기와 약정 금리가 유지된 상태로 해지 없이 입고됐습니다.
          </p>
        )}

        <div className="mt-4">
          <Notice tone="success" title={`현금 ${formatWon(cashSettledAmount)}이 예수금으로 남아 있어요`}>
            운용 지시가 필요합니다. 매매 거래는 재개되었습니다.
          </Notice>
        </div>
      </div>

      <div className="flex gap-2.5 border-t border-line px-5 py-3.5 pb-8">
        <button
          type="button"
          aria-disabled="true"
          className="h-14 flex-1 cursor-default rounded-[14px] border border-[#CBD5DD] text-[15px] font-[700] text-navy-800"
        >
          다른 상품 보기
        </button>
        <Link
          to="/home"
          className="flex h-14 flex-[1.4] items-center justify-center rounded-[14px] bg-mint-500 text-[15.5px] font-[700] text-[#062B22] transition active:scale-[0.98]"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  )
}
