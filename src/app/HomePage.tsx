import { Bell, Calculator, ChevronRight, CircleAlert, Landmark, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import { BottomTabBar } from '../components/layout/BottomTabBar'
import { BrandMark } from '../features/onboarding/components/BrandMark'

export function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <header className="glass-nav sticky top-0 z-10 flex h-16 items-center justify-between px-5">
        <BrandMark size="sm" />
        <div className="flex items-center gap-2">
          <button type="button" aria-label="알림" className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface transition-colors hover:bg-surface-2">
            <Bell className="h-[18px] w-[18px] text-text-secondary" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-status-danger" />
          </button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 shadow-sm" aria-label="시연용 사용자">
            <UserRound className="h-[18px] w-[18px] text-navy-300" />
          </span>
        </div>
      </header>

      <div className="flex-1 px-5 pb-7 pt-4">
        <div className="animate-in-up flex items-end justify-between">
          <div>
            <h1 className="text-[26px] font-[800] leading-[1.35] tracking-[-0.035em] text-navy-800">김연금님의<br />연금 이전 현황</h1>
          </div>
          <span className="pb-1 text-[12px] font-[600] text-text-tertiary">진행 중 1건</span>
        </div>

        <Link to="/transfer/status" className="animate-in-up delay-100 mt-6 block rounded-[22px] bg-gradient-to-br from-navy-800 to-navy-900 p-5 text-white shadow-[0_16px_36px_rgba(14,32,51,0.18)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(14,32,51,0.25)] hover:scale-[1.01] active:scale-[0.99] border border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[12px] font-[700] text-navy-300 drop-shadow-sm">미래연금증권 → 연금플러스</p>
              <h2 className="mt-2 text-[19px] font-[800] tracking-tight">이관사 확인 진행 중</h2>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 backdrop-blur-md">
              <ChevronRight className="h-5 w-5 text-mint-400" />
            </div>
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

        <section className="animate-in-up delay-200 mt-7">
          <h2 className="text-[15px] font-[800] text-navy-800">무엇을 확인할까요?</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link to="/transfer/intro" className="group rounded-[18px] border border-line bg-surface/50 p-[18px] text-left transition-all hover:bg-surface active:scale-[0.99]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-105"><Landmark className="h-[18px] w-[18px] text-navy-800" /></span>
              <strong className="mt-4 block text-[15px] font-[800] leading-[1.45] text-navy-800">타사 퇴직연금<br />가져오기</strong>
              <span className="mt-2 block text-[12px] leading-[1.5] text-text-tertiary">가능 종목과 제한 확인</span>
            </Link>
            <Link to="/pension-savings" className="group rounded-[18px] border border-mint-200 bg-gradient-to-br from-mint-100/50 to-mint-100/30 p-[18px] text-left transition-all hover:shadow-sm active:scale-[0.99]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-105"><Calculator className="h-[18px] w-[18px] text-mint-700" /></span>
              <strong className="mt-4 block text-[15px] font-[800] leading-[1.45] text-navy-800">연금저축<br />관리</strong>
              <span className="mt-2 block text-[12px] leading-[1.5] text-text-tertiary">연금 외 수령 등 입출금 관리</span>
            </Link>
          </div>
        </section>

        <div className="animate-in-up delay-300 mt-5 flex gap-3 rounded-2xl bg-warning-surface/80 p-4 border border-status-warning/10">
          <CircleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-status-warning" />
          <p className="text-[13px] leading-[1.55] text-warning-text font-[500]">현금이전 2종이 전체 일정을 정합니다.<br />진행 전에 제한 기간을 확인하세요.</p>
        </div>
      </div>

      <BottomTabBar />
    </main>
  )
}
