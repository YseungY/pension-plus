import { Bell, Calculator, ChevronRight, CircleAlert, Landmark, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import { BottomTabBar } from '../components/layout/BottomTabBar'
import { BrandMark } from '../features/onboarding/components/BrandMark'

export function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <header className="flex h-16 items-center justify-between px-5">
        <BrandMark size="sm" />
        <div className="flex items-center gap-2">
          <button type="button" aria-label="알림" className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface">
            <Bell className="h-[18px] w-[18px] text-text-secondary" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-status-danger" />
          </button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2" aria-label="시연용 사용자">
            <UserRound className="h-[18px] w-[18px] text-navy-300" />
          </span>
        </div>
      </header>

      <div className="flex-1 px-5 pb-7 pt-4">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-[26px] font-[800] leading-[1.35] tracking-[-0.035em] text-navy-800">김연금님의<br />연금 이전 현황</h1>
          </div>
          <span className="pb-1 text-[12px] font-[600] text-text-tertiary">진행 중 1건</span>
        </div>

        <Link to="/transfer/status" className="mt-6 block rounded-[22px] bg-navy-800 p-5 text-white shadow-[0_14px_32px_rgba(14,32,51,0.14)] transition active:scale-[0.99]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[12px] font-[700] text-navy-300">미래연금증권 → 연금플러스</p>
              <h2 className="mt-2 text-[19px] font-[800]">이관사 확인 진행 중</h2>
            </div>
            <ChevronRight className="h-5 w-5 text-mint-400" />
          </div>
          <div className="mt-6 flex items-center gap-5">
            <div className="pension-progress-ring flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full">
              <div className="flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full bg-navy-800">
                <strong className="text-[21px] font-[800] tabular-nums">3 / 5</strong>
                <span className="mt-0.5 text-[10px] font-[700] text-navy-300">현재 단계</span>
              </div>
            </div>
            <dl className="flex flex-1 flex-col gap-3 text-[13px]">
              <div className="flex justify-between gap-3"><dt className="text-navy-300">예상 완료</dt><dd className="font-[700]">9월 4~8일</dd></div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between gap-3"><dt className="text-navy-300">이전 금액</dt><dd className="font-[700] tabular-nums">32,480,000원</dd></div>
            </dl>
          </div>
        </Link>

        <section className="mt-7">
          <h2 className="text-[15px] font-[800] text-navy-800">무엇을 확인할까요?</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button type="button" aria-disabled="true" className="cursor-default rounded-[18px] border border-line p-[18px] text-left">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-100"><Landmark className="h-[18px] w-[18px] text-navy-800" /></span>
              <strong className="mt-4 block text-[15px] font-[800] leading-[1.45] text-navy-800">타사 퇴직연금<br />가져오기</strong>
              <span className="mt-2 block text-[12px] leading-[1.5] text-text-tertiary">가능 종목과 제한 확인</span>
            </button>
            <Link to="/pension-savings" className="rounded-[18px] border border-mint-200 bg-mint-100/40 p-[18px] text-left transition active:scale-[0.99]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white"><Calculator className="h-[18px] w-[18px] text-mint-700" /></span>
              <strong className="mt-4 block text-[15px] font-[800] leading-[1.45] text-navy-800">연금저축<br />관리</strong>
              <span className="mt-2 block text-[12px] leading-[1.5] text-text-tertiary">연금 외 수령 등 입출금 관리</span>
            </Link>
          </div>
        </section>

        <div className="mt-5 flex gap-3 rounded-2xl bg-warning-surface p-4">
          <CircleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-status-warning" />
          <p className="text-[13px] leading-[1.55] text-warning-text">현금이전 2종이 전체 일정을 정합니다.<br />진행 전에 제한 기간을 확인하세요.</p>
        </div>
      </div>

      <BottomTabBar />
    </main>
  )
}
