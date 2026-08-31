import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

export function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Onboarding Graphic: Progress Ring */}
        <div className="mb-10 flex h-[140px] w-[140px] items-center justify-center rounded-[32px] bg-navy-800 shadow-[0_8px_32px_rgba(7,19,32,0.15)]">
          <div
            className="flex h-[120px] w-[120px] items-center justify-center rounded-full"
            style={{
              background: 'conic-gradient(#45D3B0 0 43%, #234465 43% 100%)',
            }}
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-navy-800">
              <span className="flex items-start gap-[2px]">
                <span className="text-[32px] font-[800] leading-none tracking-[-0.05em] text-white">연금</span>
                <span className="text-[18px] font-[800] leading-none text-mint-400">+</span>
              </span>
            </div>
          </div>
        </div>

        {/* Onboarding Text */}
        <h1 className="mb-4 text-[28px] font-[800] leading-[1.35] tracking-[-0.03em] text-navy-800">
          연금을 옮기거나 받을 때,<br />
          미리 확인하세요
        </h1>
        <p className="break-keep text-[16px] leading-[1.6] text-text-secondary">
          내 연금 이관 진행률을 한눈에 확인하고,<br />
          인출 순서와 예상 세금까지 미리 계산해 드립니다.
        </p>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-8 pt-4">
        <Link
          to="/home"
          className="flex h-[56px] w-full items-center justify-center rounded-[14px] bg-navy-800 text-[16px] font-[700] text-white transition-transform active:scale-[0.98] shadow-lg shadow-navy-800/20"
        >
          바로연결
          <ChevronRight className="ml-1 h-5 w-5 opacity-80" />
        </Link>
      </div>
    </div>
  )
}
