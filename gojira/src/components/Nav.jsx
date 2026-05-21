import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../icons.jsx'
import brandLogo from '../assets/a5.jpeg'

/** Reads the current theme from the html element (set in main.jsx) and
 *  keeps it in sync with localStorage on every change. */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.getAttribute('data-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('gojira-theme', theme)
    } catch {
      /* ignore storage errors (private mode etc.) */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <Link to="/" className="nav-brand" onClick={close}>
        <img src={brandLogo} alt="Gojira" className="nav-logo" />
        <span>GOJIRA</span>
      </Link>

      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        <a href="/#problem" onClick={close}>Sansthan</a>
        <a href="/#features" onClick={close}>Features</a>
        <a href="/#idea" onClick={close}>Mission</a>
        <a href="/#privacy" onClick={close}>Privacy</a>
        <a href="/#testimonials" onClick={close}>Devotees</a>
        <a href="/#pricing" onClick={close}>Sevā</a>

        {/* Mobile-only CTAs — surfaced inside the burger dropdown */}
        <a
          href="/#download"
          className="btn btn-ghost nav-mobile-link"
          onClick={close}
        >
          Get the App
        </a>
        <Link
          to="/login"
          className="btn btn-primary nav-mobile-cta"
          onClick={close}
        >
          Sign Up / Login
          <Icon.Arrow width="14" height="14" />
        </Link>
      </nav>

      <div className="nav-cta">
        <a href="/#download" className="btn btn-ghost nav-login" onClick={close}>
          Get the App
        </a>
        <Link to="/login" className="btn btn-primary" onClick={close}>
          Sign Up / Login
          <Icon.Arrow width="16" height="16" />
        </Link>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-icon theme-icon--sun" aria-hidden="true">
            <Icon.Sun width="18" height="18" />
          </span>
          <span className="theme-icon theme-icon--moon" aria-hidden="true">
            <Icon.Moon width="18" height="18" />
          </span>
        </button>
      </div>

      <button
        className="nav-burger"
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
