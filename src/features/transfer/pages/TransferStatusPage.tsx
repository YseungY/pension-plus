import { Check } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { holdings } from '../mock/holdings'
import type { Holding } from '../../../lib/mock-types'

const STEPS = ['신청', '통보', '확인', '처리', '완료'] as const
type Step = 3 | 4 | 5

interface StepConfig {
  bannerTitle: string
  bannerSub: string
  bannerChip?: string
  dday?: string
  bannerTone: 'warning' | 'mint'
  focusTitle: string
  focusDesc: string
  focusTime: string
  showPhone: boolean
  cancelEnabled: boolean
  confirmedCount: number
  activeLabel: string
  restrictions: { buy: boolean; sell: boolean; pay: boolean; claim: boolean }
}

const STEP_CONFIG: Record<Step, StepConfig> = {
  3: {
    bannerTitle: '지금은 매도만 가능합니다',
    bannerSub: '매수 재개 예상 9/2(수) ~ 9/3(목)',
    bannerChip: '신청 당일 · 취소 가능',
    dday: 'D-5',
    bannerTone: 'warning',
    focusTitle: '이관회사가 보유 내역을 확인하고 있어요',
    focusDesc: '우리가 진행을 앞당길 수 없는 구간입니다. 확인이 끝나면 바로 알려드려요.',
    focusTime: '보통 1~3영업일',
    showPhone: true,
    cancelEnabled: true,
    confirmedCount: 4,
    activeLabel: '매도 체결 · 결제 3영업일',
    restrictions: { buy: false, sell: true, pay: false, claim: false },
  },
  4: {
    bannerTitle: '지금은 매매가 모두 제한됩니다',
    bannerSub: '실물이전과 현금화 결제가 진행 중입니다',
    bannerChip: '취소 불가 · 의사 재확인 완료',
    dday: 'D-2',
    bannerTone: 'warning',
    focusTitle: '실물이전과 현금화를 처리하고 있어요',
    focusDesc: '결제가 끝나는 종목부터 순서대로 반영됩니다. 완료되면 알려드려요.',
    focusTime: '보통 2~5영업일',
    showPhone: false,
    cancelEnabled: false,
    confirmedCount: 5,
    activeLabel: '현금화 결제 중',
    restrictions: { buy: false, sell: false, pay: false, claim: false },
  },
  5: {
    bannerTitle: '매매 거래가 재개되었습니다',
    bannerSub: '이관된 잔고를 확인해 주세요',
    bannerTone: 'mint',
    focusTitle: '이전이 모두 완료됐어요',
    focusDesc: '',
    focusTime: '',
    showPhone: false,
    cancelEnabled: false,
    confirmedCount: 6,
    activeLabel: '',
    restrictions: { buy: true, sell: true, pay: true, claim: true },
  },
}

function trackLabel(holding: Holding, config: StepConfig, isLastPending: boolean): { label: string; state: 'done' | 'active' | 'pending' } {
  if (holding.status === 'TRANSFERABLE') {
    return { label: holding.name === '정기예금' ? '이전 대기 · 해지 없음' : '이전 대기', state: 'done' }
  }
  if (!holding.isCriticalPath) {
    return { label: '이전 대기', state: 'done' }
  }
  if (isLastPending) {
    return { label: config.activeLabel || '현금화 중', state: 'active' }
  }
  return { label: '현금화 완료', state: 'done' }
}

const restrictionRows = (r: StepConfig['restrictions']) =>
  [
    { label: '새로 사기 (매수)', allowed: r.buy },
    { label: '팔기 (매도)', allowed: r.sell },
    { label: '추가 납입', allowed: r.pay },
    { label: '연금 수령 신청', allowed: r.claim },
  ] as const

export function TransferStatusPage() {
  const [step, setStep] = useState<Step>(3)
  const config = STEP_CONFIG[step]
  const isLastPending = step < 5

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="이전 진행 현황" backTo="/home" />

      <div
        className={`mx-5 mt-3 flex items-center justify-between gap-4 rounded-2xl px-5 py-4.5 ${
          config.bannerTone === 'mint' ? 'bg-mint-500' : 'bg-status-warning'
        }`}
      >
        <div className="flex flex-col gap-1.5">
          <strong className={`text-[15.5px] font-[800] ${config.bannerTone === 'mint' ? 'text-[#062B22]' : 'text-white'}`}>
            {config.bannerTitle}
          </strong>
          <span className={`text-[12.5px] ${config.bannerTone === 'mint' ? 'text-[#062B22]/80' : 'text-white/90'}`}>
            {config.bannerSub}
          </span>
          {config.bannerChip && (
            <span className="w-fit rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-[700] text-warning-text">
              {config.bannerChip}
            </span>
          )}
        </div>
        {config.dday && (
          <span className="shrink-0 rounded-full bg-[#FFCC00] px-3 py-1.5 text-[13px] font-[800] text-navy-800">{config.dday}</span>
        )}
      </div>

      <div className="flex-1 px-5 pb-8 pt-6">
        <div className="flex items-start">
          {STEPS.map((label, i) => {
            const s = i + 1
            const done = s < step
            const active = s === step
            return (
              <div key={label} className={`flex flex-col gap-2.5 ${i === STEPS.length - 1 ? 'flex-none w-10' : 'flex-1'}`}>
                <div className="flex items-center">
                  <span
                    className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full ${
                      done
                        ? 'bg-mint-500 text-white'
                        : active
                          ? 'bg-status-progress text-white shadow-[0_0_0_5px_rgba(42,111,219,0.14)]'
                          : 'border-2 border-dashed border-navy-300 bg-white'
                    }`}
                  >
                    {done && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                  {i < STEPS.length - 1 && <span className={`h-[3px] flex-1 ${done ? 'bg-mint-500' : 'bg-line'}`} />}
                </div>
                <span
                  className={`text-[12.5px] font-[700] ${active ? 'text-status-progress' : done ? 'text-navy-800' : 'text-text-tertiary'}`}
                >
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex gap-5 border-t border-line pt-3">
          <span className="flex items-center gap-1.5 text-[12px] text-text-secondary">
            <span className="h-[9px] w-[9px] rounded-full bg-mint-500" aria-hidden="true" /> 완료
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-text-secondary">
            <span className="h-[9px] w-[9px] rounded-full bg-status-progress" aria-hidden="true" /> 현재 단계
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-text-secondary">
            <span className="h-[9px] w-[9px] rounded-full border-2 border-dashed border-navy-300" aria-hidden="true" /> 통제 밖 대기
          </span>
        </div>

        {step < 5 ? (
          <div className="mt-5 rounded-[20px] bg-navy-800 p-5 text-white">
            <p className="text-[12.5px] font-[600] text-navy-300">지금 단계 · {step} / 5</p>
            <p className="mt-2 text-[19px] font-[700] leading-[1.35] tracking-[-0.02em]">{config.focusTitle}</p>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-navy-300">{config.focusDesc}</p>
            {config.showPhone && (
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[13px] text-white/90">이관회사 대표번호 1588-0000</span>
                <button type="button" aria-disabled="true" className="cursor-default text-[13px] font-[700] text-mint-400">
                  저장
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 rounded-[20px] border border-mint-200 bg-mint-100 p-5">
            <p className="text-[19px] font-[700] text-mint-700">{config.focusTitle}</p>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-mint-700">이관된 잔고와 최종 결과는 완료 화면에서 확인하세요.</p>
          </div>
        )}

        <div className="mt-7 flex items-center justify-between">
          <h2 className="text-[15px] font-[700] text-navy-800">종목별 처리 현황</h2>
          <span className="text-[12.5px] text-text-tertiary">{holdings.length}종 중 {config.confirmedCount}</span>
        </div>
        <div className="mt-2.5 flex flex-col gap-2.5">
          {holdings.map((h) => {
            const t = trackLabel(h, config, isLastPending)
            const pillClass =
              t.state === 'done' ? 'bg-mint-100 text-mint-700' : t.state === 'active' ? 'bg-[#E8F1FE] text-status-progress' : ''
            return (
              <div key={h.code} className="flex items-center justify-between rounded-xl border border-line px-3.5 py-3">
                <span className="text-[14px] font-[600] text-navy-800">{h.name}</span>
                <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[12px] font-[700] ${pillClass}`}>
                  <span
                    className={`h-[6px] w-[6px] rounded-full ${t.state === 'done' ? 'bg-mint-500' : 'bg-status-progress'}`}
                    aria-hidden="true"
                  />
                  {t.label}
                </span>
              </div>
            )
          })}
        </div>

        <h2 className="mb-2.5 mt-7 text-[15px] font-[700] text-navy-800">이전 중에 제한되는 것</h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-line p-4">
          {restrictionRows(config.restrictions).map((row) => (
            <div key={row.label} className="flex justify-between text-[13.5px]">
              <span className="text-text-secondary">{row.label}</span>
              <span className={`font-[800] ${row.allowed ? 'text-mint-700' : 'text-status-danger'}`}>
                {row.allowed ? '가능' : '불가'}
              </span>
            </div>
          ))}
        </div>

        {step < 5 && (
          <button
            type="button"
            aria-disabled={!config.cancelEnabled}
            className={`mt-4 h-12 w-full rounded-xl border text-[14px] font-[700] transition ${
              config.cancelEnabled
                ? 'border-[#CBD5DD] text-navy-800 active:scale-[0.98]'
                : 'cursor-default border-line text-text-tertiary'
            }`}
          >
            {config.cancelEnabled ? '이전 신청 취소하기' : '취소 기간이 지났습니다'}
          </button>
        )}
      </div>

      <div className="px-5 pb-8">
        {step < 5 ? (
          <button
            type="button"
            onClick={() => setStep((step + 1) as Step)}
            className="flex h-11 w-full items-center justify-center rounded-xl border border-dashed border-line text-[12.5px] font-[700] text-text-tertiary transition active:scale-[0.98]"
          >
            시연: 다음 단계로 진행 ⏩
          </button>
        ) : (
          <Link
            to="/transfer/complete"
            className="flex h-14 w-full items-center justify-center rounded-[14px] bg-mint-500 text-[15.5px] font-[700] text-[#062B22] transition active:scale-[0.98]"
          >
            이전 완료 화면 보기
          </Link>
        )}
      </div>
    </main>
  )
}
