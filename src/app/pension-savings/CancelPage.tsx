import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { SubPageHeader } from '../../components/layout/SubPageHeader'

const tabs = ['신청', '신청내역'] as const
type Tab = (typeof tabs)[number]

export function CancelPage() {
  const [activeTab, setActiveTab] = useState<Tab>('신청')
  const [noticeOpen, setNoticeOpen] = useState(true)

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

          <div className="mt-8 flex flex-col gap-3 text-[13px] leading-[1.55] text-text-secondary">
            <label className="flex items-start gap-2">
              <input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-mint-600" />
              본인은 「소득세법 시행령」 제40조의2제6항에 따라 신연금 계좌의 해지를 신청합니다.
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-mint-600" />
              연도별 소득, 세액공제 한도액 범위 내 불입액 중 소득, 세액, 공제받지 않은 원금이 있는 경우 「연금보험료 등 소득, 세액 공제 확인서」를 발급받아 제출하시면 원천징수된 기타 소득세의 일부를 돌려받을 수 있습니다.(지점 내점)
            </label>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <button
              type="button"
              onClick={() => setNoticeOpen((open) => !open)}
              className="flex w-full items-center justify-between text-[16px] font-[800] text-navy-800"
            >
              알려드립니다.
              {noticeOpen ? <ChevronUp className="h-5 w-5 text-text-tertiary" aria-hidden="true" /> : <ChevronDown className="h-5 w-5 text-text-tertiary" aria-hidden="true" />}
            </button>
            {noticeOpen && (
              <ul className="mt-4 flex flex-col gap-3 text-[13px] leading-[1.6] text-text-secondary">
                <li>
                  아래의 경우 해지 불가할 수 있습니다.
                  <ul className="mt-1 flex flex-col gap-1 pl-3 text-text-tertiary">
                    <li>- 펀드, ETF/리츠를 보유하고 있어 현금잔고가 아닌 경우</li>
                    <li>- 매매신청중인 경우</li>
                    <li>- 연금 수령이 시작된 경우</li>
                  </ul>
                </li>
                <li>
                  부득이한 사유가 아닌 경우 연금수령시보다 높은 수준의 세금이 부과됩니다.
                  <ul className="mt-1 pl-3 text-text-tertiary">
                    <li>- 부득이한 사유(사망, 파산, 천재지변 등)로 인한 해지는 별도 서류가 필요하여 영업점으로 내방하여 신청할 수 있습니다.</li>
                  </ul>
                </li>
                <li>과세대상금액까지 포함하여 출금을 원하실 경우 유선으로 출금 할 수 있습니다.</li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 px-5 pb-8 pt-10 text-center">
          <p className="text-[14px] leading-[1.6] text-text-tertiary">신청 내역이 없습니다.</p>
        </div>
      )}

      {activeTab === '신청' && (
        <div className="px-5 pb-8">
          <button type="button" aria-disabled="true" className="h-14 w-full cursor-default rounded-[14px] bg-surface-2 text-[16px] font-[800] text-text-tertiary">
            모두 동의하고 해지
          </button>
        </div>
      )}
    </main>
  )
}
