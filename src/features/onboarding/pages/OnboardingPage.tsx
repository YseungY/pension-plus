import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { BrandMark } from '../components/BrandMark'
import { ProgressRing } from '../components/ProgressRing'

export function OnboardingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-navy-800 px-7 pb-10 pt-8 text-white">
      <header className="flex items-center justify-between">
        <BrandMark inverted size="sm" />
        <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-[700] text-navy-300">시연용 화면</span>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center pb-6 text-center">
        <ProgressRing label="지금 단계" value="3 / 5" />
        <p className="mt-11 text-[14px] font-[700] text-mint-400">연금 이전, 어디까지 왔을까요?</p>
        <h1 className="mt-3 text-[30px] font-[800] leading-[1.35] tracking-[-0.04em]">기다리는 동안에도<br />진행 상황은 선명하게</h1>
        <p className="mt-4 max-w-[300px] text-[15px] leading-[1.65] text-navy-300">현재 단계와 예상 기간, 제한되는 업무까지 한 화면에서 확인하세요.</p>
      </section>

      <Link to="/connect" className="flex h-14 items-center justify-center gap-2 rounded-[14px] bg-mint-400 text-[16px] font-[800] text-navy-900 transition active:scale-[0.98]">
        시작하기
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </main>
  )
}
