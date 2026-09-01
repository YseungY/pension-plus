import { Activity, Calculator, Landmark } from 'lucide-react'
import { BrandMark } from '../features/onboarding/components/BrandMark'

const features = [
  {
    icon: Landmark,
    title: '타사 퇴직연금 가져오기',
    description: '보유 종목이 그대로 옮겨지는지, 언제부터 매매가 제한되는지 미리 확인하고 이관 현황판에서 진행 단계를 추적해요.',
  },
  {
    icon: Calculator,
    title: '연금저축 관리',
    description: '해지 없이 연금 외 수령으로 필요한 금액만 인출할 때, 법정 차감 순서와 예상 세금·실수령액을 미리 계산해요.',
  },
  {
    icon: Activity,
    title: '이관 현황판',
    description: '확정된 단계와 추정 단계를 구분해서 보여주고, 완료일은 단정하지 않고 기간으로 안내해요.',
  },
] as const

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-6">
        <BrandMark />
        <a
          href="/app"
          className="rounded-full bg-navy-800 px-5 py-2.5 text-[14px] font-[700] text-white transition hover:bg-navy-700"
        >
          데모 체험하기
        </a>
      </header>

      <section className="mx-auto flex max-w-[720px] flex-col items-center px-6 pb-16 pt-10 text-center sm:pt-20">
        <span className="rounded-full bg-mint-100 px-3 py-1.5 text-[13px] font-[800] text-mint-700">연금 이전 진행 조회 · 인출순서 모의계산 MVP</span>
        <h1 className="mt-6 text-[32px] font-[800] leading-[1.3] tracking-[-0.03em] text-navy-800 sm:text-[44px]">
          기다리는 연금 이전,<br />이제는 진행 상황이 보입니다
        </h1>
        <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-text-secondary">
          처리 속도를 약속하는 대신, 지금 어디까지 왔는지 보여줍니다.
          <br />
          연금계좌 이관 현황과 연금 외 수령 시 예상 세금을 한눈에 확인하세요.
        </p>
        <a
          href="/app"
          className="mt-8 flex h-14 w-full max-w-[280px] items-center justify-center rounded-[14px] bg-navy-800 text-[16px] font-[800] text-white transition hover:bg-navy-700 active:scale-[0.98]"
        >
          지금 체험하기
        </a>
      </section>

      <section className="border-t border-line bg-surface px-6 py-16">
        <div className="mx-auto grid max-w-[960px] gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-100">
                <Icon className="h-5 w-5 text-navy-800" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-[17px] font-[800] text-navy-800">{title}</h2>
              <p className="mt-2 text-[14px] leading-[1.6] text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-[960px] px-6 py-10 text-center text-[13px] leading-[1.6] text-text-tertiary">
        <p>연금플러스는 실제 금융 서비스가 아니라 사용자 가설을 검증하는 모바일 웹 MVP입니다.</p>
        <p className="mt-1">모든 계좌·데이터는 시연용이며, 실제 계정·인증·이체·출금은 진행되지 않습니다.</p>
      </footer>
    </main>
  )
}
