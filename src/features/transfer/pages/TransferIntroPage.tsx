import { Info } from 'lucide-react'
import { Link } from 'react-router'
import { SubPageHeader } from '../../../components/layout/SubPageHeader'

const briefRows = [
  '퇴직연금 실물이전은 계좌에서 보유한 상품을 해지하지 않고 그대로 다른 금융기관으로 옮기는 제도입니다.',
  '퇴직연금 유형과 상품이 같을 때만 실물이전이 가능하며, 실물이전이 불가능한 상품은 현금화 후 이전됩니다.',
  '가입자 선택권 확대와 퇴직연금 사업자 간 경쟁 촉진을 위해 2024년 10월 시행됐습니다.',
] as const

export function TransferIntroPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <SubPageHeader title="타사 퇴직연금 가져오기" backTo="/home" />

      <div className="flex-1 px-6 pb-6 pt-4 text-center">
        <h1 className="text-[26px] font-[900] leading-[1.32] tracking-[-0.03em] text-navy-800">
          운용 상품 그대로
          <br />
          연금플러스로
        </h1>

        <div className="mt-6 rounded-2xl border border-line bg-surface p-[18px] text-left">
          <p className="text-[13px] font-[800] text-mint-700">연금플러스만의 사전조회 · 일정 미리보기</p>
          <p className="mt-2 text-[15px] font-[700] leading-[1.5] tracking-[-0.02em] text-navy-800">
            어떤 상품이 그대로 옮겨지고 어떤 상품이 현금화되는지, 신청 전에 먼저 확인하세요
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-left">
          {briefRows.map((row, i) => (
            <div key={row} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[12px] font-[800] text-navy-800">{i + 1}</span>
              <p className="text-[14px] leading-[1.55] text-text-secondary">{row}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-line p-[18px] text-left">
          <p className="text-[12px] font-[800] text-text-tertiary">실물이전 시행 전후 비교</p>
          <div className="mt-3 flex items-center gap-3 text-[13px]">
            <span className="shrink-0 rounded-md bg-surface-2 px-2 py-1 text-[11px] font-[700] text-text-secondary">시행 전</span>
            <p className="text-text-secondary">운용 중인 예금·펀드 해지 후 이전 → 수관사에서 새로 가입</p>
          </div>
          <div className="mt-3 flex items-center gap-3 text-[13px]">
            <span className="shrink-0 rounded-md bg-mint-100 px-2 py-1 text-[11px] font-[700] text-mint-700">시행 후</span>
            <p className="text-navy-800">
              운용 중인 예금·펀드를 <strong>해지 없이 그대로</strong> 이전
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-dashed border-line pt-3 text-[11.5px] text-text-tertiary">
            <span className="font-[800] text-navy-800">이관회사</span>
            <span>→</span>
            <span>기존 금융기관</span>
            <span className="ml-auto font-[800] text-mint-700">수관회사</span>
            <span>→</span>
            <span>연금플러스</span>
          </div>
        </div>

        <div className="mt-6 flex gap-2 rounded-2xl bg-surface p-4 text-left">
          <Info className="mt-0.5 h-[16px] w-[16px] shrink-0 text-text-tertiary" aria-hidden="true" />
          <p className="text-[12.5px] leading-[1.55] text-text-secondary">
            본 화면은 사전조회 단계입니다. 사전조회만으로는 이전이 시작되지 않고 <strong className="text-navy-800">매매 제한도 발생하지 않습니다.</strong>
          </p>
        </div>
      </div>

      <div className="flex gap-2 px-5 pb-8">
        <button type="button" aria-disabled="true" className="h-14 flex-1 cursor-default rounded-[14px] border border-line text-[15px] font-[700] text-text-secondary">
          가능 상품 보기
        </button>
        <Link
          to="/transfer/pre-check"
          className="flex h-14 flex-[1.4] items-center justify-center rounded-[14px] bg-navy-800 text-[15px] font-[800] text-white transition active:scale-[0.98]"
        >
          실물이전 사전조회
        </Link>
      </div>
    </main>
  )
}
