import { Link } from 'react-router'

export function HomePage() {
  return (
    <section className="px-5 py-8">
      <p className="text-sm font-semibold text-mint-700">연금플러스</p>
      <h1 className="mt-2 text-2xl font-bold leading-snug text-navy-800">
        연금을 옮기거나 받을 때,
        <br />
        미리 확인하세요
      </h1>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        진행 중인 이관 건이 없어 홈 카드가 표시되지 않습니다. 아래에서 확인하고 싶은 기능을 선택하세요.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          to="/transfer/holdings"
          className="block rounded-2xl border border-line bg-white p-5 transition hover:border-mint-400"
        >
          <p className="text-sm font-semibold text-navy-700">연금계좌 이전</p>
          <p className="mt-1 text-xs text-text-secondary">
            이전 가능한 종목과 매매 제한 사항을 확인하세요
          </p>
        </Link>
        <Link
          to="/withdrawal/input"
          className="block rounded-2xl border border-line bg-white p-5 transition hover:border-mint-400"
        >
          <p className="text-sm font-semibold text-navy-700">인출순서 시뮬레이터</p>
          <p className="mt-1 text-xs text-text-secondary">
            법정 차감 순서와 예상 세금·실수령액을 미리 계산해보세요
          </p>
        </Link>
      </div>
    </section>
  )
}
