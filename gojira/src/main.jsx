import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Apply theme as early as possible so the first paint matches the user's
// preference. Falls back to the system color-scheme, then to dark.
;(function applyInitialTheme() {
  try {
    const saved = localStorage.getItem('gojira-theme')
    const systemLight =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    const theme = saved || (systemLight ? 'light' : 'dark')
    document.documentElement.setAttribute('data-theme', theme)
  } catch {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
