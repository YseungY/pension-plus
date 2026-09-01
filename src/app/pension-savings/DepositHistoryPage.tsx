import { Calendar } from 'lucide-react'
import { useState } from 'react'
import { SubPageHeader } from '../../components/layout/SubPageHeader'

const tabs = ['입금내역', '지급내역'] as const
type Tab = (typeof tabs)[number]

export function DepositHistoryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('입금내역')

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="입금지급내역" backTo="/pension-savings" accountLabel="신연금저축 123-456-789 01" />

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

      <div className="flex-1 px-5 pb-8 pt-6">
        <h2 className="text-[16px] font-[700] text-navy-800">납입현황</h2>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-surface-2 px-4 py-4">
          <span className="text-[14px] text-text-secondary">총 {activeTab === '입금내역' ? '입금액' : '지급액'}</span>
          <span className="text-[16px] font-[800] tabular-nums text-navy-800">0원</span>
        </div>

        <h2 className="mt-8 text-[14px] font-[700] text-text-secondary">월별 {activeTab === '입금내역' ? '납입' : '지급'}내역</h2>
        <div className="mt-3 flex items-center gap-2 text-[14px] text-text-secondary">
          <span className="flex flex-1 items-center justify-between rounded-lg border border-line px-3 py-2">
            2025/09/01
            <Calendar className="h-4 w-4 text-text-tertiary" aria-hidden="true" />
          </span>
          <span>~</span>
          <span className="flex flex-1 items-center justify-between rounded-lg border border-line px-3 py-2">
            2026/09/01
            <Calendar className="h-4 w-4 text-text-tertiary" aria-hidden="true" />
          </span>
        </div>

        <div className="mt-6 flex justify-between border-b border-line pb-3 text-[13px] font-[700] text-text-secondary">
          <span>{activeTab === '입금내역' ? '납입 월' : '지급 월'}</span>
          <span>{activeTab === '입금내역' ? '입금액' : '지급액'}</span>
        </div>
        <p className="mt-12 text-center text-[14px] text-text-tertiary">조회내역이 없습니다.</p>
      </div>
    </main>
  )
}
