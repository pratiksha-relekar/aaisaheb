import { Link } from 'react-router-dom'
import { Icon } from '../icons.jsx'
import { PhonePlayer } from './PhoneMockup.jsx'

/**
 * Shared shell for /login and /signup.
 * Left column = form (children).
 * Right column = orange Gojira showcase with phone mockup + watermark.
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
          <Icon.Logo width="22" height="22" />
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
              <span>Gojira</span>
              <span>Music App</span>
            </div>
            <div className="auth-showcase-meta top-right">
              <span>The future of</span>
              <span>music listening</span>
            </div>

            <div className="auth-showcase-phone">
              <PhonePlayer artistTone="red" />
            </div>

            <div className="auth-showcase-quote">
              <h3>
                Feel your music. <br /> Don’t just hear it.
              </h3>
              <p>
                Join thousands of listeners turning every track into an
                immersive, interactive experience with Gojira.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
