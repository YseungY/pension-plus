import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { SubPageHeader } from '../../components/layout/SubPageHeader'

const tabs = ['신청', '신청내역'] as const
type Tab = (typeof tabs)[number]

export function PensionReceiptPage() {
  const [activeTab, setActiveTab] = useState<Tab>('신청')

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="연금수령" backTo="/pension-savings" accountLabel="신연금저축 123-456-789 01" />

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
          <h2 className="text-[14px] font-[700] text-text-secondary">연락 가능한 전화번호</h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="flex-1 rounded-xl bg-surface-2 px-4 py-3 text-[15px] text-text-tertiary">010-0000-0000</span>
            <button type="button" aria-disabled="true" className="cursor-default rounded-xl border border-line px-4 py-3 text-[13px] font-[700] text-text-secondary">
              연락처 변경
            </button>
          </div>

          <h2 className="mt-8 text-[16px] font-[800] text-navy-800">연금수령개시 신청가능 조건</h2>
          <ul className="mt-3 flex flex-col gap-3 text-[13px] leading-[1.6] text-text-secondary">
            <li>만 55세 이상이면서 연금저축계좌 가입일(2020년 이후 개설은 최초입금일) 5년 경과 계좌</li>
            <li>단, 이연퇴직소득이 있는 계좌는 연금저축계좌 가입일 5년 경과 미적용</li>
          </ul>

          <h2 className="mt-8 text-[16px] font-[800] text-navy-800">연금수령을 개시하겠습니까?</h2>
          <label className="mt-3 flex items-center gap-2 text-[14px] text-navy-800">
            <input type="radio" checked readOnly className="h-4 w-4 accent-mint-600" />
            네 연금을 수령개시 합니다.
          </label>

          <div className="mt-8 flex items-center justify-between border-t border-line pt-4 text-[14px] font-[700] text-navy-800">
            연금계좌 과세안내
            <ChevronRight className="h-4 w-4 text-navy-300" aria-hidden="true" />
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
