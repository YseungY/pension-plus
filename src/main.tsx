import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './app/router'
import { LandingPage } from './app/LandingPage'
import './styles/globals.css'

const isAppDemo = window.location.pathname.startsWith('/app')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isAppDemo ? <AppRouter /> : <LandingPage />}
  </StrictMode>,
)
