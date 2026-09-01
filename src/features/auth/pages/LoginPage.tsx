import { Link, useNavigate } from 'react-router'

export function LoginPage() {
  const navigate = useNavigate()

  return (
    <section className="flex min-h-screen flex-col justify-center px-5 py-8">
      <h1 className="text-2xl font-bold text-navy-800">로그인</h1>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        실제 계정을 생성하거나 인증하지 않습니다. 버튼을 누르면 홈 화면으로 이동합니다.
      </p>

      <form
        className="mt-6 flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault()
          navigate('/')
        }}
      >
        <input
          type="text"
          placeholder="아이디 (시연용)"
          disabled
          className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-text-tertiary"
        />
        <input
          type="password"
          placeholder="비밀번호 (시연용)"
          disabled
          className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-text-tertiary"
        />
        <button
          type="submit"
          className="mt-2 rounded-xl bg-mint-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-mint-700"
        >
          로그인 (시연용 데이터로 홈 이동)
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-text-tertiary">
        계정이 없으신가요?{' '}
        <Link to="/signup" className="font-semibold text-mint-700 underline">
          회원가입
        </Link>
      </p>
    </section>
  )
}
