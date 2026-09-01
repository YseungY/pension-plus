import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { SubPageHeader } from '../../components/layout/SubPageHeader'

const tabs = ['신청', '신청내역'] as const
type Tab = (typeof tabs)[number]

export function CancelPage() {
  const [activeTab, setActiveTab] = useState<Tab>('신청')

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="연금저축 해지" backTo="/pension-savings" accountLabel="신연금저축 123-456-789 01" />

      <div className="flex border-b border-line px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 border-b-2 py-3 text-[15px] transition ${
              activeTab === tab ? 'border-navy-800 font-[700] text-navy-800' : 'border-transparent text-text-secondary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === '신청' ? (
        <div className="flex-1 px-5 pb-8 pt-6">
          <div className="rounded-2xl bg-navy-800 p-5 text-center text-white">
            <p className="text-[14px] text-navy-300">예상 해지 금액은</p>
            <p className="mt-1 text-[19px] font-[800]">
              세후 <span className="text-mint-400">0원</span> 입니다.
            </p>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-[13px]">
              <div className="flex justify-between"><span className="text-navy-300">총 평가금액(적립금)</span><span className="font-[700] tabular-nums">0원</span></div>
              <div className="flex justify-between"><span className="text-navy-300">세금합계</span><span className="font-[700] tabular-nums">0원</span></div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end gap-1 text-[13px] font-[700] text-text-secondary">
            예상 해지 금액 자세히보기
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>

          <div className="mt-8 rounded-2xl border border-mint-200 bg-mint-100/40 p-5">
            <h2 className="text-[16px] font-[800] text-navy-800">해지하지 않고 필요한 만큼 출금하세요!</h2>
            <p className="mt-2 text-[13px] leading-[1.55] text-text-secondary">연금 외 수령으로 계좌를 유지한 채 필요한 금액만 인출할 수 있어요.</p>
            <Link
              to="/withdrawal/input"
              className="mt-4 flex h-12 items-center justify-center rounded-xl bg-mint-600 text-[14px] font-[800] text-white transition active:scale-[0.98]"
            >
              해지없이 출금하기
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-[13px] leading-[1.55] text-text-secondary">
            <label className="flex items-start gap-2">
              <input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-mint-600" />
              본인은 「소득세법 시행령」 제40조의2제6항에 따라 신연금 계좌의 해지를 신청합니다.
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-mint-600" />
              연도별 소득·세액공제 한도액 범위 내 불입액 중 공제받지 않은 금액이 있는 경우 관련 서류 제출 시 세제 혜택을 받을 수 있습니다.
            </label>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-5 pb-8 pt-10 text-center">
          <p className="text-[14px] leading-[1.6] text-text-tertiary">신청 내역이 없습니다.</p>
        </div>
      )}
    </main>
  )
}
