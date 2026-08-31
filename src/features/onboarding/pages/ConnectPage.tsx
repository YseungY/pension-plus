import { BadgeCheck, ChevronRight, KeyRound, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { BrandMark } from '../components/BrandMark'

const connectionMethods = [
  { id: 'joint', label: '공동인증서로 불러오기', icon: KeyRound },
  { id: 'finance', label: '금융인증서로 불러오기', icon: ShieldCheck },
] as const

type ConnectionMethod = (typeof connectionMethods)[number]['id']

export function ConnectPage() {
  const navigate = useNavigate()
  const [selectedMethod, setSelectedMethod] = useState<ConnectionMethod>('joint')

  return (
    <main className="flex min-h-screen flex-col bg-white px-7 pb-8 pt-10">
      <header className="flex items-center justify-between">
        <BrandMark size="md" />
        <span className="rounded-full bg-mint-100 px-3 py-1.5 text-[11px] font-[800] text-mint-700">시연용 화면</span>
      </header>
      <section className="flex-1 pt-16">
        <p className="text-[14px] font-[700] text-mint-700">한 번에 확인하려면</p>
        <h1 className="mt-3 text-[32px] font-[800] leading-[1.32] tracking-[-0.04em] text-navy-800">내 연금부터<br />연결할까요?</h1>
        <p className="mt-4 text-[15px] leading-[1.65] text-text-secondary">실제 인증이나 계좌 연결은 진행되지 않습니다.<br />원하는 방식을 선택해 흐름만 체험해보세요.</p>
        <div className="mt-9 flex flex-col gap-3" role="radiogroup" aria-label="연금 불러오기 방식">
          {connectionMethods.map(({ id, label, icon: Icon }) => {
            const selected = selectedMethod === id
            return (
              <button key={id} type="button" role="radio" aria-checked={selected} onClick={() => setSelectedMethod(id)} className={`flex min-h-[70px] items-center justify-between rounded-2xl border px-[18px] text-left transition ${selected ? 'border-mint-500 bg-mint-100/50' : 'border-line bg-white'}`}>
                <span className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${selected ? 'bg-white' : 'bg-surface-2'}`}><Icon className={`h-[18px] w-[18px] ${selected ? 'text-mint-700' : 'text-text-secondary'}`} aria-hidden="true" /></span>
                  <span className="text-[15.5px] font-[700] text-navy-800">{label}</span>
                </span>
                {selected ? <BadgeCheck className="h-5 w-5 text-mint-600" aria-hidden="true" /> : <ChevronRight className="h-5 w-5 text-navy-300" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      </section>
      <div className="flex flex-col gap-2">
        <button type="button" onClick={() => navigate('/home')} className="h-14 rounded-[14px] bg-navy-800 text-[16px] font-[800] text-white transition active:scale-[0.98]">연결 화면 체험하기</button>
        <button type="button" onClick={() => navigate('/home')} className="h-12 rounded-[14px] text-[15px] font-[700] text-text-tertiary transition hover:text-navy-800">먼저 둘러볼게요</button>
      </div>
    </main>
  )
}
