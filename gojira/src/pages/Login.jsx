import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import { Icon } from '../icons.jsx'

export default function Login() {
  const [showPw, setShowPw] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', remember: true })

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('login:', form)
  }

  return (
    <AuthLayout
      eyebrow="Sign in"
      title={
        <>
          Welcome <span className="accent">back</span>
        </>
      }
      subtitle="Sign in to continue your daily devotion with Aaisaheb Maharaj."
      switchPrompt="Don’t have an account?"
      switchLabel="Sign Up"
      switchTo="/signup"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Email</span>
          <div className="field-input">
            <Icon.Mail width="18" height="18" />
            <input
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={update('email')}
            />
          </div>
        </label>

        <label className="field">
          <span className="field-label">Password</span>
          <div className="field-input">
            <Icon.Lock width="18" height="18" />
            <input
              type={showPw ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={form.password}
              onChange={update('password')}
            />
            <button
              type="button"
              className="field-eye"
              aria-label={showPw ? 'Hide password' : 'Show password'}
              onClick={() => setShowPw((v) => !v)}
            >
              {showPw ? (
                <Icon.EyeOff width="18" height="18" />
              ) : (
                <Icon.Eye width="18" height="18" />
              )}
            </button>
          </div>
        </label>

        <div className="form-row">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={update('remember')}
            />
            <span className="checkbox-box" />
            <span>Remember me</span>
          </label>
          <a href="#" className="form-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign in
          <Icon.Arrow width="16" height="16" />
        </button>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="auth-oauth">
          <button type="button" className="oauth-btn">
            <Icon.Google width="20" height="20" />
            <span>Continue with Google</span>
          </button>
          <button type="button" className="oauth-btn">
            <Icon.Apple width="20" height="20" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}
