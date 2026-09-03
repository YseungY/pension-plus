import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { formatWon } from '../../../lib/format'
import { calculateWithdrawalTax, exceedsEvalAmount } from '../calculator/withdrawalTax'
import { pensionLimit, taxBucketBalances, withdrawalRequest } from '../mock/withdrawal'

const tabs = ['본인 · 중도인출', '타 명의 · 상속'] as const

export function WithdrawalInputPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0])
  const [amountInput, setAmountInput] = useState(String(withdrawalRequest.evalAmount))
  const [agreed, setAgreed] = useState(false)

  const amount = Number(amountInput.replace(/[^0-9]/g, '')) || 0
  const exceeded = exceedsEvalAmount(amount, withdrawalRequest.evalAmount)
  const result = useMemo(
    () => (exceeded ? null : calculateWithdrawalTax(amount, { ...taxBucketBalances })),
    [amount, exceeded],
  )

  const limitUsedBeforeThis = pensionLimit.alreadyWithdrawn
  const limitUsedTotal = limitUsedBeforeThis + amount
  const limitExcess = Math.max(0, limitUsedTotal - pensionLimit.total)
  const gaugeAlready = Math.min(limitUsedBeforeThis, pensionLimit.total)
  const gaugeThis = Math.min(amount, Math.max(0, pensionLimit.total - limitUsedBeforeThis))
  const gaugeTotal = Math.max(pensionLimit.total, limitUsedTotal)

  const canSubmit = agreed && amount > 0 && !exceeded

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="연금 외 수령" backTo="/pension-savings" accountLabel="신연금저축 123-456-789 01" />

      <div className="flex border-b border-line px-5">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`flex-1 border-b-2 py-3 text-[14px] transition ${
              tab === t ? 'border-navy-800 font-[700] text-navy-800' : 'border-transparent text-text-secondary'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === tabs[0] ? (
        <>
          <div className="flex-1 px-5 pb-8 pt-4">
            {exceeded ? (
              <div className="rounded-2xl border border-status-danger/30 bg-white p-4">
                <p className="text-[13px] font-[800] text-status-danger">인출 희망 금액이 평가금액을 초과했습니다</p>
                <p className="mt-2 text-[13px] leading-[1.55] text-text-secondary">
                  최대 인출 가능액: <strong className="text-navy-800">{formatWon(withdrawalRequest.evalAmount)}</strong>
                </p>
              </div>
            ) : (
              <div className="rounded-[18px] bg-navy-800 p-6 shadow-[0_10px_24px_rgba(14,32,51,0.14)]">
                <p className="text-[13px] font-[600] text-navy-300">예상 인출가능 금액</p>
                <p className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-[17px] font-[700] text-white">세후</span>
                  <span className="text-[30px] font-[700] tabular-nums tracking-[-0.025em] text-mint-400">
                    {(result ? result.netAmount : 0).toLocaleString('ko-KR')}
                  </span>
                  <span className="text-[15px] font-[600] text-white">원</span>
                </p>
                <div className="mt-4 flex flex-col gap-2.5 border-t border-white/15 pt-4 text-[13.5px]">
                  <div className="flex justify-between">
                    <span className="text-navy-300">총 평가금액(적립금)</span>
                    <span className="font-[600] tabular-nums text-white">{formatWon(withdrawalRequest.evalAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-300">세금합계</span>
                    <span className="font-[600] tabular-nums text-[#FF9AA7]">{result ? formatWon(result.totalTax) : '0원'}</span>
                  </div>
                </div>
              </div>
            )}

            <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">인출 희망 금액</h2>
            <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
              <input
                inputMode="numeric"
                value={amount.toLocaleString('ko-KR')}
                onChange={(e) => setAmountInput(e.target.value)}
                className="w-full bg-transparent text-[17px] font-[800] tabular-nums text-navy-800 outline-none"
                aria-label="인출 희망 금액"
              />
              <span className="shrink-0 text-[15px] text-text-tertiary">원</span>
            </div>

            <h2 className="mb-2.5 mt-6 text-[15px] font-[700] text-navy-800">연금수령한도 대비 인출 현황</h2>
            <div className="rounded-2xl border border-line p-4">
              <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full bg-navy-300" style={{ width: `${(gaugeAlready / gaugeTotal) * 100}%` }} />
                <div className="h-full bg-mint-500" style={{ width: `${(gaugeThis / gaugeTotal) * 100}%` }} />
                {limitExcess > 0 && (
                  <div className="h-full bg-status-danger" style={{ width: `${(limitExcess / gaugeTotal) * 100}%` }} />
                )}
              </div>
              <dl className="mt-3 flex flex-col gap-1.5 text-[12.5px]">
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-text-secondary">
                    <span className="h-2 w-2 rounded-full bg-navy-300" /> 이미 인출
                  </dt>
                  <dd className="font-[700] tabular-nums text-navy-800">{formatWon(limitUsedBeforeThis)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1.5 text-text-secondary">
                    <span className="h-2 w-2 rounded-full bg-mint-500" /> 이번 인출
                  </dt>
                  <dd className="font-[700] tabular-nums text-navy-800">{formatWon(amount)}</dd>
                </div>
                {limitExcess > 0 && (
                  <div className="flex justify-between">
                    <dt className="flex items-center gap-1.5 text-status-danger">
                      <span className="h-2 w-2 rounded-full bg-status-danger" /> 한도 초과분
                    </dt>
                    <dd className="font-[700] tabular-nums text-status-danger">{formatWon(limitExcess)}</dd>
                  </div>
                )}
              </dl>
              <p className="mt-3 border-t border-dashed border-line pt-3 text-[11.5px] leading-[1.5] text-text-tertiary">
                연금수령한도({formatWon(pensionLimit.total)})를 넘겨도 인출은 가능하지만, 초과분은 인출 항목 및 세금 시뮬레이션에서
                불리하게 계산될 수 있습니다.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-line p-4 text-center">
              <h3 className="text-[15px] font-[700] text-navy-800">내 인출 순서와 세금은?</h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.5] text-text-secondary">
                법령에 따른 인출 순서와 비과세 혜택을 미리 확인해보세요.
              </p>
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-xl border border-line p-3.5">
              <input
                id="withdrawal-agree"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-navy-800"
              />
              <label htmlFor="withdrawal-agree" className="text-[12.5px] leading-[1.55] text-text-secondary">
                본인은 「소득세법 시행령」 제40조의2 제6항에 따라 신연금 계좌의 중도인출을 신청합니다.
              </label>
            </div>
          </div>

          <div className="px-5 pb-8">
            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => navigate('/withdrawal/result', { state: { amount } })}
              className={`h-14 w-full rounded-[14px] text-[16px] font-[800] transition ${
                canSubmit ? 'bg-navy-800 text-white active:scale-[0.98]' : 'cursor-not-allowed bg-surface-2 text-text-tertiary'
              }`}
            >
              해지없이 출금하기
            </button>
          </div>
        </>
      ) : (
        <div className="flex-1 px-5 pb-8 pt-6">
          <h2 className="text-[19px] font-[800] text-navy-800">타 명의 계좌 조회 안내</h2>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-text-secondary">
            상속 예정이거나 본인 명의가 아닌 계좌의 조회를 희망하시는 경우, 관련 법령에 따라 직접 조회가 제한됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-line p-4">
            <h3 className="text-[15px] font-[700] text-navy-800">상속인 금융거래 조회</h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-text-secondary">
              상속인의 편의를 위해 피상속인(사망자) 명의의 모든 금융채권 및 채무를 확인하실 수 있는 서비스입니다.
            </p>
            <a
              href="https://www.fss.or.kr/fss/cvpl/inhCerEc/main.do?menuNo=200010"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex h-11 w-full items-center justify-center rounded-xl border border-line text-[13.5px] font-[700] text-text-secondary transition active:scale-[0.98]"
            >
              금감원 상속인금융거래조회 바로가기
            </a>
          </div>

          <div className="mt-3 rounded-2xl bg-surface p-4">
            <h3 className="text-[15px] font-[700] text-navy-800">KB증권 고객센터 안내</h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-text-secondary">
              타 명의 계좌 인출 및 상속 절차에 대한 상세한 안내가 필요하신 경우 고객센터로 문의해 주시기 바랍니다.
            </p>
            <p className="mt-4 text-center text-[24px] font-[800] tabular-nums text-navy-800">1588-6611</p>
          </div>
        </div>
      )}
    </main>
  )
}
