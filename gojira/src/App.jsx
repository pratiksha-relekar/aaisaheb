import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Icon } from './icons.jsx'
import { PhonePlayer, PhoneHome } from './components/PhoneMockup.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import PrivacySection from './components/PrivacySection.jsx'
// Auth pages are temporarily disabled — files kept for re-enabling later.
// import Login from './pages/Login.jsx'
// import Signup from './pages/Signup.jsx'
import './App.css'

/* --------------------------- Sections --------------------------- */

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-watermark">GOJIRA</div>

      <div className="hero-grid">
        <div className="hero-headline">
          <h1>
            <span className="line line-1">The future of</span>
            <span className="line line-2">music listening</span>
            <span className="line line-3">experience</span>
          </h1>
        </div>

        <div className="hero-copy">
          <p>
            Redefines what a music app can be—transforming passive listening
            into an immersive, interactive experience.
          </p>
        </div>

        <div className="hero-meta meta-left">
          <span>Gojira</span>
          <span>Music App</span>
        </div>

        <div className="hero-meta meta-right">
          <span>Jun 17</span>
          <span>2025</span>
        </div>

        <div className="hero-meta meta-type">
          <span>Project Type:</span>
          <span>Experimental</span>
        </div>

        <div className="hero-phone">
          <PhonePlayer artistTone="red" />
        </div>

        <div className="hero-meta meta-tasks">
          <span>Research</span>
          <span>Wireframing</span>
          <span>Designing</span>
          <span>Prototyping</span>
        </div>

        <div className="hero-meta meta-location">
          <span>Location:</span>
          <span>Kerala, India</span>
        </div>

        <div className="hero-fab-stack">
          <button className="fab">
            <Icon.Prev width="18" height="18" />
          </button>
          <button className="fab">
            <Icon.Pause width="18" height="18" />
          </button>
          <button className="fab">
            <Icon.Next width="18" height="18" />
          </button>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'Is Gojira free to use?',
    a: 'Yes — the core experience is completely free. A Premium plan unlocks Hi-Fi audio, the AI DJ and offline downloads.',
  },
  {
    q: 'Can I listen offline?',
    a: 'Absolutely. Download any track, playlist or podcast and listen anywhere, no signal needed.',
  },
  {
    q: 'How is Gojira different from Spotify?',
    a: 'Spatial 3D audio, an AI DJ that reads your mood, and live rooms where you can listen together with friends and artists.',
  },
  {
    q: 'Will my existing playlists transfer?',
    a: 'Yes — Gojira imports your playlists from Spotify, Apple Music or YouTube Music in a single tap.',
  },
]

function Problem() {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <div className="problem-grid">
          <div className="problem-phone">
            <PhonePlayer artistTone="green" />
          </div>

          <div className="problem-faq">
            <h6 className="muted-label">
              <Icon.Sparkles width="14" height="14" /> FAQ
            </h6>
            <div className="faq-list">
              {FAQS.map((item, i) => (
                <details
                  key={item.q}
                  className="faq-item"
                  open={i === 0}
                >
                  <summary>
                    <span className="faq-q">{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <Icon.Plus width="14" height="14" />
                    </span>
                  </summary>
                  <p className="faq-a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="problem-copy">
            <span className="kicker">
              <Icon.Sparkles width="14" height="14" /> The Problem /
            </span>
            <h2>
              Today's players treat music like a flat MP3 file — play, pause,
              skip. No interaction. No discovery. Just passive consumption.
              Users deserve to feel their music, not just hear it.
            </h2>
          </div>

          <div className="problem-phone problem-phone--right">
            <PhonePlayer artistTone="red" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreIdea() {
  return (
    <section id="idea" className="idea">
      <div className="container">
        <div className="idea-head">
          <div>
            <span className="step">01 /</span>
            <span className="step-title">The Core Idea</span>
          </div>
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Insights /
          </span>
        </div>

        <h2 className="idea-headline">
          Boring music apps? <br />
          Outta here! Gojira <br />
          spins your sound into <br />
          next-gen magic!
        </h2>

        <div className="idea-grid">
          <div className="idea-about">
            <span className="muted-label">About /</span>
            <p>
              Gojira redefines what a music app can be—transforming passive
              listening into an immersive, interactive experience.
            </p>
          </div>

          <div className="idea-phone">
            <PhoneHome />

            <div className="float-card invite">
              <div className="invite-icon">
                <Icon.Users width="16" height="16" />
              </div>
              <div>
                <strong>Invite Friends</strong>
                <p>Invite & earn upto 1000 Credits</p>
              </div>
              <button className="invite-btn">Invite</button>
            </div>

            <div className="float-create">
              <span className="create-dot">
                <Icon.Plus width="14" height="14" />
              </span>
              <span>
                Create
                <br />
                New
              </span>
            </div>
          </div>

          <div className="idea-side">
            <div className="bubble">
              <Icon.Wave width="20" height="20" />
            </div>
            <div className="bubble bubble--art" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Icon.Sparkles width="22" height="22" />,
      title: 'AI DJ',
      desc:
        'A smart DJ that mixes, transitions and reads your mood in real-time.',
    },
    {
      icon: <Icon.Wave width="22" height="22" />,
      title: 'Spatial 3D Audio',
      desc:
        'Hear every layer of your favorite tracks like you’re in the studio.',
    },
    {
      icon: <Icon.Users width="22" height="22" />,
      title: 'Live Sessions',
      desc:
        'Join live rooms with friends, artists and creators around the world.',
    },
    {
      icon: <Icon.Mic width="22" height="22" />,
      title: 'Podcasts & Talk',
      desc:
        'Discover voices, shows and stories curated to what you love listening to.',
    },
    {
      icon: <Icon.Heart width="22" height="22" />,
      title: 'Mood Playlists',
      desc:
        'Personalised playlists generated for the moment you’re in right now.',
    },
    {
      icon: <Icon.Download width="22" height="22" />,
      title: 'Offline & Hi-Fi',
      desc:
        'Take Hi-Fi quality with you, anywhere — no signal, no problem.',
    },
  ]
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Features /
          </span>
          <h2>Everything Spotify wishes it had.</h2>
          <p>
            Gojira packs the essentials of a modern player and stacks the
            future-facing experiences on top.
          </p>
        </div>

        <div className="features-grid">
          {items.map((f) => (
            <article key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'Free forever',
    features: [
      'Play only one music track',
      'Play Jaap — no streak',
      'Darshan previews only',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Premium',
    price: 99,
    sub: 'per month • cancel anytime',
    features: [
      'Full music library',
      'Live darshan',
      'Namaskar enabled',
      '1 comment per day',
      'Jaap streak',
    ],
    cta: 'Get Premium',
    featured: true,
    badge: 'Popular',
  },
  {
    name: 'Pro',
    price: 149,
    sub: 'per month • Premium + extras',
    features: [
      'Everything in Premium',
      'Unlimited comments',
      'Unlimited Jaap streak',
      'Priority darshan access',
      'Exclusive guru content',
      'Early access to new features',
    ],
    cta: 'Get Pro',
    featured: false,
  },
]

function Pricing() {
  const renderPrice = (plan) => {
    if (typeof plan.price === 'string') {
      return <span className="price-text">{plan.price}</span>
    }
    return (
      <>
        <span className="price-currency">₹</span>
        <span className="price-amount">{plan.price}</span>
      </>
    )
  }

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Pricing /
          </span>
          <h2>Choose your plan</h2>
          <p>Pick the plan that fits your daily devotional practice.</p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`plan ${plan.featured ? 'plan--featured' : ''}`}
            >
              <div className="plan-header">
                <div className="plan-title">
                  <h3 className="plan-name">{plan.name}</h3>
                  {plan.badge && (
                    <span className="plan-active">{plan.badge}</span>
                  )}
                </div>
                <div className="plan-price">{renderPrice(plan)}</div>
              </div>
              <p className="plan-sub">{plan.sub}</p>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="plan-check" aria-hidden="true">
                      <Icon.Check width="12" height="12" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`btn btn-block ${
                  plan.featured ? 'btn-gradient' : 'btn-outline'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  const data = [
    { value: '90M+', label: 'Tracks ready to stream' },
    { value: '4.9★', label: 'Average user rating' },
    { value: '120+', label: 'Countries supported' },
    { value: '0', label: 'Ads on premium' },
  ]
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {data.map((d) => (
            <div key={d.label} className="stat">
              <div className="stat-value">{d.value}</div>
              <div className="stat-label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    quote:
      'Gojira has changed my morning routine completely. Live darshan and curated bhajans set the tone for my entire day.',
    name: 'Priya Sharma',
    role: 'Daily Listener',
    initials: 'PS',
    avatar: 'linear-gradient(135deg, #ff8a4a, #ff5b1f)',
  },
  {
    quote:
      'The Jaap streak keeps me consistent with my practice. Beautifully designed and so peaceful to use every single day.',
    name: 'Rohan Mehta',
    role: 'Music Enthusiast',
    initials: 'RM',
    avatar: 'linear-gradient(135deg, #6a78ff, #4b5cd6)',
  },
  {
    quote:
      'Finally an app that respects our devotional traditions. Audio quality is unmatched and Namaskar is a beautiful touch.',
    name: 'Anjali Patel',
    role: 'Spiritual Seeker',
    initials: 'AP',
    avatar: 'linear-gradient(135deg, #ffb74a, #ff8a4a)',
  },
  {
    quote:
      'I have tried many devotional apps but nothing comes close to Gojira. Darshan previews helped me discover new artists.',
    name: 'Aarav Kapoor',
    role: 'Verified Listener',
    initials: 'AK',
    avatar: 'linear-gradient(135deg, #34c19b, #1f9c7a)',
  },
  {
    quote:
      'Love that I can share moments through comments. It feels like a community of like-minded devotees, not just an app.',
    name: 'Meera Joshi',
    role: 'Family Subscriber',
    initials: 'MJ',
    avatar: 'linear-gradient(135deg, #e85a8a, #c63b6f)',
  },
  {
    quote:
      'Pro plan unlocked everything I needed — unlimited Jaap streak, priority darshan, exclusive guru content. Worth it.',
    name: 'Vikram Iyer',
    role: 'Pro Member',
    initials: 'VI',
    avatar: 'linear-gradient(135deg, #8a6cff, #5b3fd6)',
  },
]

function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage)

  const next = () => setPage((p) => (p + 1) % totalPages)
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages)

  const start = page * perPage
  const visible = TESTIMONIALS.slice(start, start + perPage)

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <div className="testimonials-title">
            <span className="kicker">Testimonials</span>
            <h2>People love us, you know.</h2>
          </div>
          <div
            className="testimonials-nav"
            role="group"
            aria-label="Testimonial pagination"
          >
            <button
              type="button"
              className="t-arrow"
              onClick={prev}
              aria-label="Previous testimonials"
            >
              <Icon.Chevron width="18" height="18" />
            </button>
            <button
              type="button"
              className="t-arrow t-arrow--next"
              onClick={next}
              aria-label="Next testimonials"
            >
              <Icon.Chevron width="18" height="18" />
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {visible.map((t) => (
            <article key={t.name} className="t-card">
              <p className="t-quote">{t.quote}</p>
              <div className="t-author">
                <span
                  className="t-avatar"
                  style={{ background: t.avatar }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div className="t-author-info">
                  <strong className="t-name">{t.name}</strong>
                  <span className="t-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="download" className="cta">
      <div className="cta-bg" />
      <div className="container cta-inner">
        <div>
          <span className="kicker dark">
            <Icon.Sparkles width="14" height="14" /> Download /
          </span>
          <h2>
            Ready to feel <br /> your music?
          </h2>
          <p>
            Join the next-gen music revolution. Get Gojira on your phone and
            turn every listen into an experience.
          </p>
          <div className="cta-buttons">
            <a href="#" className="store-btn">
              <Icon.Apple width="22" height="22" />
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#" className="store-btn">
              <Icon.Android width="22" height="22" />
              <span>
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>
        <div className="cta-phone">
          <PhonePlayer artistTone="red" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------- Landing ------------------------------- */
function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <CoreIdea />
        <Features />
        <PrivacySection />
        <Testimonials />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

/* ------------------------------- App ------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* /login, /signup and /privacy are now part of the landing page —
            any other URL falls through to the catch-all below. */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
