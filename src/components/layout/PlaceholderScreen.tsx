import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

interface PlaceholderScreenProps {
  title: string
  description: string
}

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  const navigate = useNavigate()

  return (
    <section className="flex flex-1 flex-col px-5 py-8">
      <button
        type="button"
        onClick={() => navigate('/home')}
        aria-label="홈으로 돌아가기"
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-navy-800 transition active:scale-95"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <h1 className="text-xl font-bold text-navy-800">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
      <p className="mt-6 rounded-xl border border-dashed border-line bg-white p-4 text-xs text-text-tertiary">
        담당 기능 개발자가 구현할 화면입니다. 공통 라우팅·레이아웃만 연결되어 있습니다.
      </p>
    </section>
  )
}
