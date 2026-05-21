import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Icon } from './icons.jsx'
import { PhonePlayer, PhoneHome } from './components/PhoneMockup.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import PrivacySection from './components/PrivacySection.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
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
            <span className="line line-1">The divine grace of</span>
            <span className="line line-2">Aaisaheb Maharaj</span>
            <span className="line line-3">Late (Bajaranvadi)</span>
          </h1>
        </div>

        <div className="hero-copy">
          <p>
            Sacred bhajans, divine literature and live darshan from our
            village temple — bringing Aaisaheb Maharaj's eternal blessings
            to every devotee, wherever they may be.
          </p>
        </div>

        <div className="hero-meta meta-left">
          <span>Aaisaheb</span>
          <span>Sansthan</span>
        </div>

        <div className="hero-meta meta-right">
          <span>Daily</span>
          <span>Darshan</span>
        </div>

        <div className="hero-meta meta-type">
          <span>Type:</span>
          <span>Devotional</span>
        </div>

        <div className="hero-phone">
          <PhonePlayer artistTone="red" />
        </div>

        <div className="hero-meta meta-tasks">
          <span>Bhajans</span>
          <span>Live Darshan</span>
          <span>Literature</span>
          <span>Daily Jaap</span>
        </div>

        <div className="hero-meta meta-location">
          <span>Village:</span>
          <span>Late (Bajaranvadi)</span>
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
    q: 'Who is Aaisaheb Maharaj?',
    a: 'Aaisaheb Maharaj is the revered divine mother of our village Late (Bajaranvadi). For generations, devotees have turned to her for blessings, guidance and spiritual peace.',
  },
  {
    q: 'What does this app include?',
    a: 'A full library of sacred bhajans, her divine literature and teachings, live darshan from the village temple, a daily jaap streak and the complete festival calendar.',
  },
  {
    q: 'Is the live darshan really from the temple?',
    a: 'Yes — every darshan is streamed directly from the Aaisaheb Maharaj temple in Late (Bajaranvadi), so devotees anywhere in the world can feel like they are home in the village.',
  },
  {
    q: 'How can I support the sansthan?',
    a: 'Premium plans directly help us maintain the temple, organise yatras and preserve her literature for future generations. Sharing the app with fellow devotees is equally a beautiful sevā.',
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
              <Icon.Sparkles width="14" height="14" /> Why Sansthan /
            </span>
            <h2>
              Devotees of Aaisaheb Maharaj are scattered across cities and
              countries — far from Late (Bajaranvadi). Her daily darshan,
              bhajans and sacred literature deserve to reach every home,
              not just the village temple.
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
            <span className="step-title">Our Mission</span>
          </div>
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Aaisaheb /
          </span>
        </div>

        <h2 className="idea-headline">
          Bringing the eternal <br />
          grace of Late (Bajaranvadi) <br />
          into every devotee's home, <br />
          wherever they may be.
        </h2>

        <div className="idea-grid">
          <div className="idea-about">
            <span className="muted-label">About /</span>
            <p>
              A devotional companion built with love for Aaisaheb Maharaj,
              so her bhajans, darshan and divine literature are with you
              every single day — at home, at work, on a journey.
            </p>
          </div>

          <div className="idea-phone">
            <PhoneHome />

            <div className="float-card invite">
              <div className="invite-icon">
                <Icon.Users width="16" height="16" />
              </div>
              <div>
                <strong>Share Sansthan</strong>
                <p>Spread Aaisaheb's blessings</p>
              </div>
              <button className="invite-btn">Share</button>
            </div>

            <div className="float-create">
              <span className="create-dot">
                <Icon.Plus width="14" height="14" />
              </span>
              <span>
                Offer
                <br />
                Prayer
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
      icon: <Icon.Heart width="22" height="22" />,
      title: 'Live Darshan',
      desc:
        'Watch live darshan streamed from the Aaisaheb Maharaj temple in Late (Bajaranvadi), morning and evening.',
    },
    {
      icon: <Icon.Headphones width="22" height="22" />,
      title: 'Sacred Bhajans',
      desc:
        'A curated library of bhajans dedicated to Aaisaheb Maharaj, sung by village musicians and beyond.',
    },
    {
      icon: <Icon.Sparkles width="22" height="22" />,
      title: 'Divine Literature',
      desc:
        'Read and listen to her teachings, stories and sacred writings preserved across generations.',
    },
    {
      icon: <Icon.Mic width="22" height="22" />,
      title: 'Daily Jaap',
      desc:
        'Keep your daily mantra practice consistent with a peaceful jaap streak counter.',
    },
    {
      icon: <Icon.Wave width="22" height="22" />,
      title: 'Festival Calendar',
      desc:
        'Never miss Jayanti, yatra or pooja days — the calendar keeps you tied to every sacred date.',
    },
    {
      icon: <Icon.Users width="22" height="22" />,
      title: 'Devotee Community',
      desc:
        'Connect with fellow devotees worldwide, share blessings and stay close to the sansthan.',
    },
  ]
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Features /
          </span>
          <h2>Everything a devotee needs, in one place.</h2>
          <p>
            From the daily darshan to her divine literature — Aaisaheb's
            sansthan reaches you wherever life has taken you.
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
      'Listen to one sample bhajan',
      'Jaap — without streak tracking',
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
      'Full bhajan library',
      'Live darshan from the temple',
      'Namaskar enabled',
      '1 comment per day',
      'Daily Jaap streak',
    ],
    cta: 'Become a Sevak',
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
      'Priority darshan on festivals',
      'Exclusive sacred content',
      'Support the sansthan directly',
    ],
    cta: 'Become a Bhakta',
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
            <Icon.Sparkles width="14" height="14" /> Sevā /
          </span>
          <h2>Choose your sevā</h2>
          <p>
            Pick the plan that fits your daily devotion — every Premium and
            Pro sevā directly supports the sansthan and Late (Bajaranvadi).
          </p>
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
    { value: '108+', label: 'Sacred bhajans' },
    { value: '365', label: 'Days of live darshan' },
    { value: '5K+', label: 'Devotees connected' },
    { value: 'Free', label: 'Forever for all' },
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
      'Living away from Late, this app brings Aaisaheb Maharaj into my home every morning. The live darshan feels like I am back in our village.',
    name: 'Priya Sharma',
    role: 'Devotee, Pune',
    initials: 'PS',
    avatar: 'linear-gradient(135deg, #ff8a4a, #ff5b1f)',
  },
  {
    quote:
      'I have finally found a place to listen to all the bhajans my grandmother used to sing. Aaisaheb Maharaj\u2019s grace flows through every track.',
    name: 'Rohan Mehta',
    role: 'Daily Listener',
    initials: 'RM',
    avatar: 'linear-gradient(135deg, #6a78ff, #4b5cd6)',
  },
  {
    quote:
      'The jaap streak keeps my daily practice consistent. Sharing this with my children has brought our family closer to Aaisaheb.',
    name: 'Anjali Patel',
    role: 'Family Devotee',
    initials: 'AP',
    avatar: 'linear-gradient(135deg, #ffb74a, #ff8a4a)',
  },
  {
    quote:
      'Reading her sacred literature on the go has changed my perspective on life. May her blessings reach every devotee, in every corner of the world.',
    name: 'Aarav Kapoor',
    role: 'Devotee, Mumbai',
    initials: 'AK',
    avatar: 'linear-gradient(135deg, #34c19b, #1f9c7a)',
  },
  {
    quote:
      'The festival calendar reminded me of Jayanti — I could not visit Late in person but the live darshan kept me connected to our village.',
    name: 'Meera Joshi',
    role: 'Devotee, Bengaluru',
    initials: 'MJ',
    avatar: 'linear-gradient(135deg, #e85a8a, #c63b6f)',
  },
  {
    quote:
      'My Premium plan supports the sansthan directly. Priority darshan during big festivals is beautiful — worth every rupee, and a humble sevā.',
    name: 'Vikram Iyer',
    role: 'Premium Devotee',
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
            <span className="kicker">Devotees</span>
            <h2>Aaisaheb's grace, in their words.</h2>
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
            <Icon.Sparkles width="14" height="14" /> Darshan /
          </span>
          <h2>
            Begin your daily <br /> darshan today
          </h2>
          <p>
            Download the app and carry the divine grace of Aaisaheb Maharaj
            and our village Late (Bajaranvadi) with you, every single day.
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Any other URL falls back to the landing page so refreshes
            and unknown deep links still work. */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
