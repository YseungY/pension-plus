import { Activity, ArrowLeft, Calculator, Landmark } from 'lucide-react'
import { useNavigate } from 'react-router'
import { BrandMark } from '../components/BrandMark'

const previewItems = [
  {
    icon: Landmark,
    title: '타사 퇴직연금 가져오기',
    description: '보유 종목이 그대로 옮겨지는지, 언제부터 매매가 제한되는지 미리 확인할 수 있어요.',
  },
  {
    icon: Activity,
    title: '이관 현황판',
    description: '지금 어느 단계인지, 완료까지 대략 며칠 남았는지 한눈에 보여드려요.',
  },
  {
    icon: Calculator,
    title: '연금저축 관리',
    description: '연금 외 수령 시 차감 순서와 예상 세금·실수령액을 계산해드려요.',
  },
] as const

export function PreviewPage() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen flex-col bg-white px-7 pb-8 pt-10">
      <header className="flex items-center gap-3">
        <button type="button" onClick={() => navigate('/connect')} aria-label="이전 화면으로" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-800 transition active:scale-95">
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <BrandMark size="sm" />
      </header>

      <section className="flex-1 pt-10">
        <p className="text-[14px] font-[700] text-mint-700">연결하면</p>
        <h1 className="mt-3 text-[26px] font-[800] leading-[1.35] tracking-[-0.035em] text-navy-800">이런 걸 확인할 수 있어요</h1>

        <div className="mt-8 flex flex-col gap-3">
          {previewItems.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-3 rounded-2xl border border-line p-[18px]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-100">
                <Icon className="h-[18px] w-[18px] text-navy-800" aria-hidden="true" />
              </span>
              <div>
                <strong className="block text-[15px] font-[800] text-navy-800">{title}</strong>
                <p className="mt-1 text-[13px] leading-[1.5] text-text-secondary">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button type="button" onClick={() => navigate('/connect')} className="h-14 rounded-[14px] bg-navy-800 text-[16px] font-[800] text-white transition active:scale-[0.98]">지금 연결하기</button>
    </main>
  )
}
