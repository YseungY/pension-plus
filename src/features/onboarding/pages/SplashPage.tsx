import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // 2초 후 온보딩 화면으로 자동 이동
    const timer = setTimeout(() => {
      navigate('/onboarding', { replace: true })
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy-900 font-sans">
      <div className="flex animate-pulse flex-col items-center gap-6">
        {/* S1 진행 링 (디자인 시스템 명세 반영) */}
        <div className="flex h-[104px] w-[104px] items-center justify-center rounded-[26px] bg-navy-800 shadow-2xl">
          <div
            className="flex h-[92px] w-[92px] items-center justify-center rounded-full"
            style={{
              background: 'conic-gradient(#45D3B0 0 43%, #234465 43% 100%)',
            }}
          >
            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-navy-800">
              <span className="flex items-start gap-[1px]">
                <span className="text-[24px] font-[800] leading-none tracking-[-0.05em] text-white">연금</span>
                <span className="text-[14px] font-[800] leading-none text-mint-400">+</span>
              </span>
            </div>
          </div>
        </div>

        {/* 투톤 커팅 워드마크 */}
        <div className="mt-4">
          <span className="text-[26px] font-[800] tracking-[-0.045em] text-white">
            연금<span className="text-mint-400">플러스</span>
          </span>
        </div>
      </div>
    </div>
  )
}
