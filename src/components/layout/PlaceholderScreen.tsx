import { DEMO_DATA_LABEL } from '../../lib/mock-types'

interface PlaceholderScreenProps {
  title: string
  description: string
}

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  return (
    <section className="px-5 py-8">
      <span className="inline-block rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-mint-700">
        {DEMO_DATA_LABEL}
      </span>
      <h1 className="mt-3 text-xl font-bold text-navy-800">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
      <p className="mt-6 rounded-xl border border-dashed border-line bg-white p-4 text-xs text-text-tertiary">
        담당 기능 개발자가 구현할 화면입니다. 공통 라우팅·레이아웃만 연결되어 있습니다.
      </p>
    </section>
  )
}
