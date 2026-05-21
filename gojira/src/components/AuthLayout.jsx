import { Link } from 'react-router-dom'
import { Icon } from '../icons.jsx'
import { PhonePlayer } from './PhoneMockup.jsx'
import brandLogo from '../assets/a5.jpeg'

/**
 * Shared shell for /login and /signup.
 * Left column = form (children).
 * Right column = orange Aaisaheb showcase with phone mockup + watermark.
 */
export default function AuthLayout({
  eyebrow,
  title,
  subtitle,
  children,
  switchPrompt,
  switchLabel,
  switchTo,
}) {
  return (
    <div className="auth">
      <header className="auth-nav">
        <Link to="/" className="nav-brand">
          <img src={brandLogo} alt="Gojira" className="nav-logo" />
          <span>GOJIRA</span>
        </Link>
        <Link to="/" className="auth-nav-back">
          <Icon.Chevron width="14" height="14" />
          <span>Back to home</span>
        </Link>
      </header>

      <div className="auth-grid">
        {/* ----------- LEFT: Form ----------- */}
        <section className="auth-form-pane">
          <div className="auth-form-wrap">
            <span className="auth-eyebrow">
              <Icon.Sparkles width="14" height="14" /> {eyebrow}
            </span>
            <h1 className="auth-title">{title}</h1>
            <p className="auth-subtitle">{subtitle}</p>

            {children}

            <p className="auth-switch">
              {switchPrompt}{' '}
              <Link to={switchTo} className="auth-switch-link">
                {switchLabel}
              </Link>
            </p>
          </div>
        </section>

        {/* ----------- RIGHT: Showcase ----------- */}
        <aside className="auth-showcase">
          <div className="auth-showcase-bg" />
          <div className="auth-showcase-watermark">GOJIRA</div>

          <div className="auth-showcase-inner">
            <div className="auth-showcase-meta top-left">
              <span>Aaisaheb</span>
              <span>Sansthan</span>
            </div>
            <div className="auth-showcase-meta top-right">
              <span>Late</span>
              <span>(Bajaranvadi)</span>
            </div>

            <div className="auth-showcase-phone">
              <PhonePlayer artistTone="red" />
            </div>

            <div className="auth-showcase-quote">
              <h3>
                Daily darshan. <br /> Eternal grace.
              </h3>
              <p>
                Join thousands of devotees who carry Aaisaheb Maharaj's
                blessings with them every single day.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
