import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ProgressRing } from '../components/ProgressRing'

export function OnboardingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-navy-900 to-navy-800 px-7 pb-10 pt-7 text-white">
      <section className="flex flex-1 flex-col items-center justify-center pb-4 text-center">
        <div className="animate-in-up delay-100"><ProgressRing label="지금 단계" value="3 / 5" /></div>
        <p className="animate-in-up delay-200 mt-10 text-[14px] font-[700] text-mint-400">연금 이전, 어디까지 왔을까요?</p>
        <h1 className="animate-in-up delay-300 mt-3 text-[30px] font-[800] leading-[1.35] tracking-[-0.04em] drop-shadow-sm">진행 상황을<br />한눈에 확인하세요</h1>
        <p className="animate-in-up delay-400 mt-4 max-w-[280px] text-[15px] leading-[1.65] text-navy-300">현재 단계와 예상 기간을<br />쉽고 빠르게 알려드려요.</p>
      </section>

      <Link to="/connect" className="animate-in-up delay-500 flex h-14 items-center justify-center gap-2 rounded-[14px] bg-mint-400 text-[16px] font-[800] text-navy-900 shadow-[0_0_20px_rgba(69,211,176,0.3)] transition-all hover:bg-mint-500 hover:shadow-[0_0_24px_rgba(69,211,176,0.4)] active:scale-[0.98]">
        시작하기
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </main>
  )
}
