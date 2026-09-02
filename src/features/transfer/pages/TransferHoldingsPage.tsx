import { Info } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Notice } from '../../../components/ui/Notice'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { formatWon } from '../../../lib/format'
import { LockCalendar } from '../components/LockCalendar'
import { ProductTransferabilityModal } from '../components/ProductTransferabilityModal'
import { TransferFaqModal } from '../components/TransferFaqModal'
import { holdings } from '../mock/holdings'

const totalAmount = holdings.reduce((sum, h) => sum + h.evalAmount, 0)
const cashRequired = holdings.filter((h) => h.status === 'CASH_REQUIRED')

function estimatedPl(amount: number) {
  const positive = amount >= 0
  return (
    <span className={positive ? 'text-status-progress' : 'text-status-danger'}>
      {positive ? '+' : ''}
      {formatWon(amount)}
    </span>
  )
}

export function TransferHoldingsPage() {
  const location = useLocation() as { state?: { mode?: 'real' | 'cash' } }
  const isCash = location.state?.mode === 'cash'
  const [isSold, setIsSold] = useState(false)
  const [productModalOpen, setProductModalOpen] = useState(false)
  const [faqModalOpen, setFaqModalOpen] = useState(false)

  const transferable = isCash ? [] : holdings.filter((h) => h.status === 'TRANSFERABLE')
  const cashGroup = isCash ? holdings : cashRequired
  const transferableAmount = transferable.reduce((sum, h) => sum + h.evalAmount, 0)
  const cashAmount = cashGroup.reduce((sum, h) => sum + h.evalAmount, 0)

  const durationLabel = isCash ? '5~7영업일' : isSold ? '4~5영업일' : '7~9영업일'
  const durationBreakdown = isCash
    ? '전액 매도 후 현금이전 · 상품별 결제 3~5영업일'
    : isSold
      ? '실물이전 3영업일 + 잔여 현금화 결제 3영업일'
      : '실물이전 3영업일 + 현금화 대상 결제 5영업일'

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="사전조회 결과" backTo="/transfer/pre-check" />

      <div className="flex-1 px-5 pb-8 pt-4">
        <div className="rounded-[20px] bg-surface p-5">
          <p className="text-[12.5px] font-[600] text-text-tertiary">이관회사 보유 · 총 평가금액</p>
          <p className="mt-2 text-[27px] font-[700] tabular-nums tracking-[-0.03em] text-navy-800">
            {totalAmount.toLocaleString('ko-KR')}
            <span className="ml-1 text-[15px] font-[600] text-text-secondary">원</span>
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between rounded-xl bg-mint-100 px-3.5 py-3">
              <span className="text-[13.5px] font-[600] text-mint-700">그대로 이전 · {transferable.length}종</span>
              <span className="text-[14.5px] font-[700] tabular-nums text-mint-700">{formatWon(transferableAmount)}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-warning-surface px-3.5 py-3">
              <span className="text-[13.5px] font-[600] text-warning-text">현금으로 이전 · {cashGroup.length}종</span>
              <span className="text-[14.5px] font-[700] tabular-nums text-warning-text">{formatWon(cashAmount)}</span>
            </div>
          </div>
        </div>

        {isCash && (
          <div className="mt-3">
            <Notice tone="warning" title="현금이전을 선택했습니다">
              아래 실물이전 판정과 무관하게 보유 6종 전액이 매도된 뒤 현금으로 이전됩니다. 정기예금도 중도해지되어 약정 금리를 받을 수
              없습니다.
            </Notice>
          </div>
        )}

        <div className="mt-4 rounded-[20px] border border-line p-5">
          <div className="flex items-baseline justify-between">
            <h2 className="text-[15px] font-[700] text-navy-800">매매 제한 예상</h2>
            <span className="text-[13px] font-[700] text-status-warning">{durationLabel}</span>
          </div>
          <div className="mt-3">
            <LockCalendar fast={!isCash && isSold} />
          </div>
          <p className="mt-3 text-[12px] leading-[1.5] text-text-tertiary">{durationBreakdown}</p>
        </div>

        <div className="mt-4 flex flex-col gap-5">
          {transferable.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <p className="flex items-center gap-1.5 text-[14px] font-[700] text-mint-700">
                <span className="h-[7px] w-[7px] rounded-full bg-mint-500" aria-hidden="true" /> 그대로 옮겨집니다 · {transferable.length}건
              </p>
              {transferable.map((h) =>
                h.name === '정기예금' ? (
                  <div key={h.code} className="flex flex-col gap-1.5 rounded-xl border border-mint-200 bg-mint-100 p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-[600] text-navy-800">
                        {h.name}
                        <span className="ml-1.5 inline-flex h-4.5 items-center rounded-full bg-mint-200 px-1.5 text-[10.5px] leading-none font-[800] text-mint-700">
                          해지 없음
                        </span>
                      </span>
                      <span className="text-[13.5px] font-[700] tabular-nums text-navy-800">{formatWon(h.evalAmount)}</span>
                    </div>
                    <p className="text-[12.5px] leading-[1.5] text-mint-700">
                      만기 전이라도 해지 없이 이전 — 중도해지 이자 손실 없음
                    </p>
                  </div>
                ) : (
                  <div key={h.code} className="flex items-center justify-between rounded-xl border border-line px-3.5 py-3">
                    <span className="text-[14px] font-[600] text-navy-800">{h.name}</span>
                    <span className="text-[13.5px] font-[700] tabular-nums text-navy-800">{formatWon(h.evalAmount)}</span>
                  </div>
                ),
              )}
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            <p className="flex items-center gap-1.5 text-[14px] font-[700] text-warning-text">
              <span className="h-[7px] w-[7px] rounded-full bg-status-warning" aria-hidden="true" /> 현금으로 이전됩니다 ·{' '}
              {cashGroup.length}건
            </p>
            {cashGroup.map((h) => {
              const isCriticalActive = h.isCriticalPath && !isCash
              const sold = isCriticalActive && isSold
              const isForcedCash = h.status === 'TRANSFERABLE'
              return (
                <div
                  key={h.code}
                  className={`flex flex-col gap-1.5 rounded-xl border p-3.5 ${
                    isCriticalActive ? 'border-status-warning/50 bg-warning-surface' : 'border-line'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-[600] text-navy-800">
                      {h.name}
                      {isCriticalActive && (
                        <span className="ml-1.5 inline-flex h-4.5 items-center rounded-full bg-[#FCEAED] px-1.5 text-[10.5px] leading-none font-[800] text-status-danger">
                          조건 ③
                        </span>
                      )}
                    </span>
                    <span className="text-[13.5px] font-[700] tabular-nums text-navy-800">{formatWon(h.evalAmount)}</span>
                  </div>
                  <p className="text-[12.5px] leading-[1.5] text-warning-text">
                    {isForcedCash ? (
                      <>현금이전 선택으로 매도 후 현금으로 이전됩니다.</>
                    ) : sold ? (
                      <strong className="text-mint-700">현금화 접수를 완료했습니다.</strong>
                    ) : (
                      <>
                        {isCriticalActive && <>이 상품이 전체 일정을 정합니다 · </>}예상 손익 {estimatedPl(h.realizedPl ?? 0)}
                      </>
                    )}
                  </p>
                  {isCriticalActive && !sold && (
                    <button
                      type="button"
                      onClick={() => setIsSold(true)}
                      className="mt-1 h-[38px] w-full rounded-[10px] border border-status-warning/40 bg-white text-[13.5px] font-[700] text-warning-text transition active:scale-[0.98]"
                    >
                      먼저 현금화해 일정 당기기
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex gap-2.5 rounded-2xl bg-surface p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-text-tertiary" aria-hidden="true" />
          <p className="text-[12.5px] leading-[1.6] text-text-secondary">
            <strong className="text-navy-800">신청 전 확인하세요.</strong> 실물이전이 불가한 상품은{' '}
            <strong className="text-navy-800">매도 후 현금으로</strong> 이전되고, 금융기관별로 수수료 등 조건이 다를 수 있습니다.{' '}
            <strong className="text-navy-800">DC형</strong> 가입자는 소속 회사의 규약으로 정해진 금융기관 내에서만 이전할 수 있습니다.
          </p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setProductModalOpen(true)}
            className="h-10 flex-1 rounded-xl border border-line text-[13px] font-[700] text-text-secondary transition active:scale-[0.98]"
          >
            상품별 가능 여부
          </button>
          <button
            type="button"
            onClick={() => setFaqModalOpen(true)}
            className="h-10 flex-1 rounded-xl border border-line text-[13px] font-[700] text-text-secondary transition active:scale-[0.98]"
          >
            자주 묻는 질문
          </button>
        </div>

        <p className="mt-4 text-[11.5px] leading-[1.5] text-text-tertiary">
          ※ 상품별 실물이전 가능 여부는 계약 형태·상품 특성에 따라 달라질 수 있으며, 최종 판정은 이관회사 조회 결과를 따릅니다.
        </p>
      </div>

      <div className="flex gap-2.5 border-t border-line px-5 py-3.5 pb-8">
        <button
          type="button"
          aria-disabled="true"
          className="h-14 flex-1 cursor-default rounded-[14px] border border-[#CBD5DD] text-[15px] font-[700] text-navy-800"
        >
          결과 저장
        </button>
        <Link
          to="/transfer/status"
          className="flex h-14 flex-[1.3] items-center justify-center rounded-[14px] bg-navy-800 text-[15.5px] font-[700] text-white transition active:scale-[0.98]"
        >
          이전 신청하기
        </Link>
      </div>

      <ProductTransferabilityModal open={productModalOpen} onClose={() => setProductModalOpen(false)} />
      <TransferFaqModal open={faqModalOpen} onClose={() => setFaqModalOpen(false)} />
    </main>
  )
}
