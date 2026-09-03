import { Info } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'
import { ProductTransferabilityModal } from '../components/ProductTransferabilityModal'

const briefRows = [
  '퇴직연금 실물이전은 계좌에서 보유한 상품을 해지하지 않고 그대로 다른 금융기관으로 옮기는 제도입니다.',
  '퇴직연금 유형과 상품이 같을 때만 실물이전이 가능하며, 실물이전이 불가능한 상품은 현금화 후 이전됩니다.',
  '가입자 선택권 확대와 퇴직연금 사업자 간 경쟁 촉진을 위해 2024년 10월 시행됐습니다.',
] as const

export function TransferIntroPage() {
  const [productModalOpen, setProductModalOpen] = useState(false)

  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="타사 퇴직연금 가져오기" backTo="/home" />

      <div className="flex-1 flex flex-col justify-center px-6 pb-10 pt-2 text-center">
        <h1 className="text-[26px] font-[900] leading-[1.32] tracking-[-0.03em] text-navy-800">
          운용 상품 그대로
          <br />
          연금플러스로
        </h1>

        <div className="mt-8 flex flex-col gap-4 text-left">
          {briefRows.map((row, i) => (
            <div key={row} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[12px] font-[800] text-navy-800">{i + 1}</span>
              <p className="text-[14.5px] font-[500] leading-[1.6] text-navy-800">{row}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-surface/30 p-[18px] text-left">
          <p className="text-[13px] font-[800] text-navy-500">실물이전 시행 전후 비교</p>
          <div className="mt-4 flex items-start gap-3 text-[13.5px]">
            <span className="shrink-0 rounded-md bg-navy-100 px-2 py-1 text-[11px] font-[800] text-navy-700">시행 전</span>
            <p className="mt-0.5 font-[500] text-navy-700">운용 중인 예금·펀드 해지 후 이전 → 수관사에서 새로 가입</p>
          </div>
          <div className="mt-4 flex items-start gap-3 text-[13.5px]">
            <span className="shrink-0 rounded-md bg-mint-100 px-2 py-1 text-[11px] font-[800] text-mint-700">시행 후</span>
            <p className="mt-0.5 font-[500] text-navy-800">
              운용 중인 예금·펀드를 <strong className="font-[800]">해지 없이 그대로</strong> 이전
            </p>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-dashed border-line pt-4 text-[12px] text-navy-400">
            <span className="font-[800] text-navy-800">이관회사</span>
            <span>→</span>
            <span className="font-[500]">기존 금융기관</span>
            <span className="ml-auto font-[800] text-mint-700">수관회사</span>
            <span>→</span>
            <span className="font-[500]">연금플러스</span>
          </div>
        </div>

        <div className="mt-6 flex gap-2.5 rounded-2xl bg-surface/50 p-4 text-left">
          <Info className="mt-0.5 h-[16px] w-[16px] shrink-0 text-navy-400" aria-hidden="true" />
          <p className="text-[13px] font-[500] leading-[1.55] text-navy-800">
            본 화면은 사전조회 단계입니다. 사전조회만으로는 이전이 시작되지 않고 <strong className="font-[800]">매매 제한도 발생하지 않습니다.</strong>
          </p>
        </div>
      </div>

      <div className="flex gap-2 px-5 pb-8">
        <button
          type="button"
          onClick={() => setProductModalOpen(true)}
          className="h-14 flex-1 rounded-[14px] border border-line text-[15px] font-[700] text-text-secondary transition active:scale-[0.98]"
        >
          가능 상품 보기
        </button>
        <Link
          to="/transfer/pre-check"
          className="flex h-14 flex-[1.4] items-center justify-center rounded-[14px] bg-navy-800 text-[15px] font-[800] text-white transition active:scale-[0.98]"
        >
          실물이전 사전조회
        </Link>
      </div>

      <ProductTransferabilityModal open={productModalOpen} onClose={() => setProductModalOpen(false)} />
    </main>
  )
}
