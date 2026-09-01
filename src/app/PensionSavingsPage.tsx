import { ArrowLeft, ChevronDown, ChevronRight, CircleAlert } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const manageTabs = ['입출금 관리', '서비스 관리'] as const
type ManageTab = (typeof manageTabs)[number]

export function PensionSavingsPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<ManageTab>('입출금 관리')

  return (
    <main className="flex flex-1 flex-col bg-white">
      <header className="flex h-16 items-center gap-3 border-b border-line px-5">
        <button
          type="button"
          onClick={() => navigate('/home')}
          aria-label="이전 화면으로"
          className="flex h-9 w-9 items-center justify-center rounded-full text-navy-800 transition active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <h1 className="text-[17px] font-[800] text-navy-800">연금저축 관리</h1>
      </header>

      <div className="flex border-b border-line px-5">
        {manageTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 border-b-2 py-4 text-[15px] transition ${
              activeTab === tab ? 'border-navy-800 font-[700] text-navy-800' : 'border-transparent text-text-secondary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === '입출금 관리' ? (
        <div className="flex-1 pb-8">
          <div className="flex justify-center bg-surface py-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-[600] text-text-secondary shadow-[0_1px_2px_rgba(14,32,51,0.08)]">
              신연금저축 123-456-789 01
              <ChevronDown className="h-3.5 w-3.5 text-text-tertiary" aria-hidden="true" />
            </span>
          </div>

          <section className="px-5 pt-6">
            <h2 className="mb-4 text-[18px] font-[700] text-navy-800">입금 관리</h2>
            <ManageRow emoji="📅" label="입금한도 설정" />
            <ManageRow emoji="🧾" label="입금지급내역" />
          </section>

          <div className="mt-6 h-3 bg-surface" />

          <section className="px-5 pt-6">
            <h2 className="mb-4 text-[18px] font-[700] text-navy-800">출금 관리</h2>
            <ManageRow emoji="💰" emojiBg="var(--color-navy-100)" label="연금수령" />
            <Link
              to="/withdrawal/input"
              className="-mx-5 flex items-center justify-between gap-3 bg-mint-100 px-5 py-4 transition active:scale-[0.99]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[14px]">💸</span>
                <span>
                  <span className="block text-[16px] font-[700] text-mint-700">연금 외 수령</span>
                  <span className="mt-1 block text-[13px] text-mint-700">해지 없이 꼭 필요한 금액만 빼기</span>
                </span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-mint-700" aria-hidden="true" />
            </Link>
            <ManageRow emoji="🚫" label="연금저축 해지" />
          </section>

          <div className="mx-5 mt-6 flex gap-3 rounded-2xl bg-surface p-4">
            <CircleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-text-tertiary" aria-hidden="true" />
            <p className="text-[13px] leading-[1.55] text-text-secondary">연금 외 수령 외 나머지 항목(입금·연금수령·해지)은 이번 시연 범위에 포함되지 않습니다.</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 px-5 pb-8 pt-10 text-center">
          <p className="text-[14px] leading-[1.6] text-text-tertiary">서비스 관리는 이번 시연 범위에 포함되지 않습니다.</p>
        </div>
      )}
    </main>
  )
}

function ManageRow({ emoji, emojiBg = 'var(--color-surface-2)', label }: { emoji: string; emojiBg?: string; label: string }) {
  return (
    <div aria-disabled="true" className="flex cursor-default items-center justify-between gap-3 border-b border-line py-4">
      <span className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-[14px]" style={{ background: emojiBg }}>
          {emoji}
        </span>
        <span className="text-[16px] text-navy-800">{label}</span>
      </span>
      <ChevronRight className="h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
    </div>
  )
}
