import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-sans">
      <header className="sticky top-0 z-50 flex min-h-[56px] items-center justify-center border-b border-line bg-white/88 px-5 backdrop-blur-[12px]">
        <span className="text-[19px] font-[800] tracking-[-0.035em] text-navy-800">
          연금<span className="text-mint-600">플러스</span>
        </span>
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8 pb-12">
        <div className="mb-8 mt-2 text-[28px] font-[800] leading-[1.35] tracking-[-0.03em] text-navy-800">
          어떤 메뉴를<br />
          찾으시나요?
        </div>

        {/* 퇴직연금 그룹 */}
        <div className="mb-6">
          <div className="mb-3 ml-1 text-[13.5px] font-[700] text-text-secondary">
            퇴직연금
          </div>
          <div className="flex flex-col overflow-hidden rounded-[18px] border border-line/60 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex w-full items-center justify-between border-b border-line/60 px-5 py-[18px] text-left text-navy-800">
              <span className="text-[16px] font-[600]">IRP 상품 매매</span>
              <ChevronRight className="h-5 w-5 text-navy-300" />
            </div>
            <div className="flex w-full items-center justify-between px-5 py-[18px] text-left text-navy-800">
              <span className="text-[16px] font-[600]">실물이전 가능 상품 사전조회</span>
              <ChevronRight className="h-5 w-5 text-navy-300" />
            </div>
          </div>
        </div>

        {/* 연금플러스 그룹 */}
        <div className="mb-6">
          <div className="mb-3 ml-1 text-[13.5px] font-[800] text-mint-600">
            연금플러스 🌟
          </div>
          <div className="flex flex-col overflow-hidden rounded-[18px] border border-mint-500/20 bg-white shadow-[0_4px_16px_rgba(20,184,146,0.06)]">
            <Link
              to="/transfer/holdings"
              className="flex items-center justify-between border-b border-line/60 px-5 py-[18px] transition-colors hover:bg-surface-2 active:bg-surface-2"
            >
              <div className="flex items-center text-[16px] font-[700] text-navy-800">
                타사 퇴직연금 가져오기
                <span className="ml-2 rounded bg-mint-500 px-[6px] py-[3px] text-[10.5px] font-[800] leading-none text-white">NEW</span>
              </div>
              <ChevronRight className="h-5 w-5 text-mint-400" />
            </Link>
            <div className="flex w-full items-center justify-between border-b border-line/60 px-5 py-[18px] text-left text-navy-800">
              <div className="flex items-center text-[16px] font-[700]">
                연금저축 관리
                <span className="ml-2 rounded bg-mint-500 px-[6px] py-[3px] text-[10.5px] font-[800] leading-none text-white">NEW</span>
              </div>
              <ChevronRight className="h-5 w-5 text-mint-400" />
            </div>
            <Link
              to="/withdrawal/input"
              className="flex items-center justify-between px-5 py-[18px] transition-colors hover:bg-surface-2 active:bg-surface-2"
            >
              <div className="flex items-center text-[16px] font-[700] text-navy-800">
                인출순서 시뮬레이터
                <span className="ml-2 rounded bg-mint-100 px-[6px] py-[3px] text-[10.5px] font-[800] leading-none text-mint-700">모의계산</span>
              </div>
              <ChevronRight className="h-5 w-5 text-mint-400" />
            </Link>
          </div>
        </div>

        {/* 연금저축 그룹 */}
        <div className="mb-4">
          <div className="mb-3 ml-1 text-[13.5px] font-[700] text-text-secondary">
            연금저축
          </div>
          <div className="flex flex-col overflow-hidden rounded-[18px] border border-line/60 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex w-full items-center justify-between px-5 py-[18px] text-left text-navy-800">
              <span className="text-[16px] font-[600]">연금저축 ETF/리츠 매매</span>
              <ChevronRight className="h-5 w-5 text-navy-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
