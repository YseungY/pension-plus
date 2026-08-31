import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ProgressRing } from '../components/ProgressRing'

export function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding', { replace: true })
    }, 1800)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-800" aria-label="연금플러스 시작 화면">
      <div className="splash-mark">
        <ProgressRing compact />
      </div>
    </main>
  )
}
