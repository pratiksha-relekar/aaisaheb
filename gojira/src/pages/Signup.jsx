import { useState } from 'react'
import AuthLayout from '../components/AuthLayout.jsx'
import { Icon } from '../icons.jsx'

export default function Signup() {
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm: '',
    accept: false,
  })

  const update = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  const mismatch =
    form.confirm.length > 0 && form.confirm !== form.password

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mismatch) return
    console.log('signup:', form)
  }

  return (
    <AuthLayout
      eyebrow="Create account"
      title={
        <>
          Start your <span className="accent">journey</span>
        </>
      }
      subtitle="Create a free Gojira account and step into next-gen music."
      switchPrompt="Already have an account?"
      switchLabel="Sign in"
      switchTo="/login"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="field">
          <span className="field-label">Full name</span>
          <div className="field-input">
            <Icon.User width="18" height="18" />
            <input
              type="text"
              autoComplete="name"
              required
              placeholder="Anu Sharma"
              value={form.fullName}
              onChange={update('fullName')}
            />
          </div>
        </label>

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

        <div className="field-grid">
          <label className="field">
            <span className="field-label">Password</span>
            <div className="field-input">
              <Icon.Lock width="18" height="18" />
              <input
                type={showPw ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="Create a password"
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

          <label className="field">
            <span className="field-label">Confirm password</span>
            <div
              className={`field-input ${mismatch ? 'field-input--error' : ''}`}
            >
              <Icon.Lock width="18" height="18" />
              <input
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="Repeat password"
                value={form.confirm}
                onChange={update('confirm')}
              />
              <button
                type="button"
                className="field-eye"
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
                onClick={() => setShowConfirm((v) => !v)}
              >
                {showConfirm ? (
                  <Icon.EyeOff width="18" height="18" />
                ) : (
                  <Icon.Eye width="18" height="18" />
                )}
              </button>
            </div>
            {mismatch && (
              <span className="field-error">Passwords don’t match</span>
            )}
          </label>
        </div>

        <label className="checkbox checkbox--row">
          <input
            type="checkbox"
            required
            checked={form.accept}
            onChange={update('accept')}
          />
          <span className="checkbox-box" />
          <span>
            I agree to Gojira’s <a href="#">Terms</a> and{' '}
            <a href="#">Privacy Policy</a>.
          </span>
        </label>

        <button type="submit" className="btn btn-primary btn-block">
          Create account
          <Icon.Arrow width="16" height="16" />
        </button>

        <div className="auth-divider">
          <span>or sign up with</span>
        </div>

        <div className="auth-oauth">
          <button type="button" className="oauth-btn">
            <Icon.Google width="20" height="20" />
            <span>Google</span>
          </button>
          <button type="button" className="oauth-btn">
            <Icon.Apple width="20" height="20" />
            <span>Apple</span>
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}
