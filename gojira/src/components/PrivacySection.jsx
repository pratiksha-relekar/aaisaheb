import { Icon } from '../icons.jsx'

/**
 * Inline Privacy Policy section for the Landing page. Renders the same
 * content the standalone page used to have, minus the page-level Nav /
 * Footer / Download CTA (the Landing page already provides those).
 *
 * Sections follow Google Play Store's Data Safety + User Data policy
 * (https://support.google.com/googleplay/android-developer/answer/10787469)
 * and the Limited Use / Permissions disclosures required to list and
 * publish the Aaisaheb Maharaj sansthan app.
 */

const TOC = [
  { id: 'overview', label: '1. Overview' },
  { id: 'permissions', label: '2. App Permissions' },
  { id: 'how-we-use', label: '3. How We Use Data' },
  { id: 'security', label: '4. Data Security' },
  { id: 'payments', label: '5. Payments & Razorpay' },
  { id: 'your-rights', label: '6. Your Rights & Choices' },
  { id: 'account-deletion', label: '7. Account Deletion' },
  { id: 'contact', label: '8. Contact Us' },
]

const PAYMENT_DATA = [
  {
    name: 'Handled by Razorpay (never stored by us)',
    items: [
      'Full credit / debit card number',
      'CVV / CVC',
      'Card PIN and OTP',
      'UPI authentication PIN',
      'Net-banking credentials',
    ],
  },
  {
    name: 'Stored by us (the sansthan)',
    items: [
      'Razorpay order / payment ID',
      'Payment status (success, failed, refunded)',
      'Amount, currency and chosen plan',
      'Last 4 digits of the card and card brand',
      'Billing email, name and country (for GST invoices)',
    ],
  },
]

const PERMISSIONS = [
  {
    name: 'Microphone',
    purpose:
      'Required when you record an audio comment or use voice mantra search. Recording starts only when you actively press the mic button.',
  },
  {
    name: 'Storage / Media',
    purpose:
      'Saves downloaded bhajans and literature for offline listening, and lets you upload a profile picture.',
  },
  {
    name: 'Notifications',
    purpose:
      'Sends festival reminders, daily darshan times and important sansthan updates. You can disable this at any time in settings.',
  },
  {
    name: 'Bluetooth',
    purpose:
      'Connects the app to your wireless headphones and external speakers for listening.',
  },
  {
    name: 'Network access',
    purpose:
      'Required to stream live darshan, bhajans and divine literature over Wi-Fi or mobile data.',
  },
  {
    name: 'Contacts (optional)',
    purpose:
      'Only used if you tap “Share Sansthan” to find which of your contacts already use the app.',
  },
  {
    name: 'Location (optional, coarse only)',
    purpose:
      'Helps us surface regional yatra schedules and nearby satsangs. We do not track your precise GPS location.',
  },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="privacy privacy--section">
      {/* ---------------- HERO ---------------- */}
      <div className="privacy-hero">
        <div className="privacy-hero-bg" />
        <div className="container privacy-hero-inner">
          <span className="kicker">
            <Icon.Sparkles width="14" height="14" /> Legal /
          </span>
          <h2 className="privacy-title">
            Privacy <span className="accent">Policy</span>
          </h2>
          <p className="privacy-sub">
            How the Aaisaheb Maharaj sansthan app collects, uses, shares and
            protects your information — prepared in line with the Google Play
            Store Data Safety requirements, applicable data-protection laws
            (GDPR, CCPA, India DPDP Act 2023) and Apple App Tracking
            Transparency.
          </p>
          <div className="privacy-meta">
            <div>
              <span>Effective date</span>
              <strong>1 May 2025</strong>
            </div>
            <div>
              <span>Last updated</span>
              <strong>21 May 2026</strong>
            </div>
            <div>
              <span>Version</span>
              <strong>v2.3</strong>
            </div>
            <div>
              <span>Applies to</span>
              <strong>Aaisaheb app + web</strong>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- BODY ---------------- */}
      <div className="privacy-body">
        <div className="container privacy-grid">
          {/* TOC */}
          <aside className="privacy-toc">
            <h6 className="muted-label">On this page</h6>
            <ul>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <article className="privacy-content">
            {/* 1 */}
            <section id="overview" className="policy-section">
              <h3>1. Overview</h3>
              <p>
                The Aaisaheb Maharaj Sansthan (“we”, “our”, “us”), based in
                Late (Bajaranvadi), Maharashtra, operates the Aaisaheb
                Maharaj devotional app and website. This Privacy Policy
                describes the personal data we collect when you use the
                mobile application available on the Google Play Store and
                Apple App Store, our website and any related services
                (collectively, the “Service”).
              </p>
              <p>
                By creating an account, downloading the app from Google Play
                or signing in with Google / Apple, you confirm that you have
                read, understood and agree to this policy. If you do not
                agree, please do not use the Service.
              </p>
            </section>

            {/* 2 */}
            <section id="permissions" className="policy-section">
              <h3>2. App Permissions Requested on Google Play</h3>
              <p>
                When you install the app from the Play Store, it may request
                the following Android runtime permissions. We follow the
                principle of least privilege — every permission has a clear,
                user-facing purpose, and you can revoke any of them from your
                device settings at any time.
              </p>
              <div className="perm-table">
                {PERMISSIONS.map((p) => (
                  <div key={p.name} className="perm-row">
                    <div className="perm-name">{p.name}</div>
                    <div className="perm-purpose">{p.purpose}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 */}
            <section id="how-we-use" className="policy-section">
              <h3>3. How We Use Your Data</h3>
              <p>We use the data described above to:</p>
              <ul className="bullets">
                <li>
                  <strong>Provide the Service:</strong> create your account,
                  stream darshan and bhajans, sync your jaap streak across
                  devices and process sevā plans.
                </li>
                <li>
                  <strong>Personalize your experience:</strong> recommend
                  bhajans, suggest relevant literature and remind you about
                  upcoming festivals and yatras.
                </li>
                <li>
                  <strong>Communicate with you:</strong> send transactional
                  emails, festival reminders, push notifications and (only
                  with consent) sansthan updates.
                </li>
                <li>
                  <strong>Improve and secure the app:</strong> detect abuse,
                  debug crashes, measure feature performance.
                </li>
                <li>
                  <strong>Comply with the law:</strong> respond to lawful
                  requests, enforce our terms and protect devotees.
                </li>
              </ul>
              <p>
                We <strong>do not</strong> use your data to train large
                language models on behalf of third parties, and we{' '}
                <strong>do not</strong> sell personal information.
              </p>
            </section>

            {/* 4 */}
            <section id="security" className="policy-section">
              <h3>4. Data Security</h3>
              <p>
                We use TLS 1.3 for all data in transit, AES-256 encryption for
                data at rest, hashed and salted passwords (bcrypt), short-lived
                tokens for sessions and continuous monitoring of our
                infrastructure. Despite our efforts, no system is 100% secure
                — please use a strong, unique password and enable two-factor
                authentication in your account settings.
              </p>
            </section>

            {/* 5 — Razorpay payments */}
            <section id="payments" className="policy-section">
              <h3>5. Payments &amp; Razorpay</h3>
              <p>
                All Premium and Pro sevā plans, as well as any voluntary
                donations to the sansthan, are processed through{' '}
                <strong>Razorpay Software Private Limited</strong>{' '}
                (“Razorpay”), a payment gateway licensed by the Reserve Bank
                of India (RBI) and certified to{' '}
                <strong>PCI-DSS Level 1</strong> — the strictest data
                security standard for payment processors.
              </p>
              <p>
                When you make a payment, you are briefly redirected to
                Razorpay's secure checkout (or its in-app SDK). The actual
                card / UPI / net-banking credentials are entered on
                Razorpay's PCI-compliant servers and{' '}
                <strong>never touch our systems</strong>. We receive only a
                tokenised result (success / failure / refund) and the
                metadata listed below.
              </p>

              <div className="perm-table">
                {PAYMENT_DATA.map((p) => (
                  <div key={p.name} className="perm-row">
                    <div className="perm-name">{p.name}</div>
                    <div className="perm-purpose">
                      <ul className="bullets bullets--tight">
                        {p.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                <strong>Sub-processor disclosure.</strong> By using the
                payment feature, you also agree to{' '}
                <a
                  href="https://razorpay.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Razorpay's Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://razorpay.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Razorpay's Terms of Service
                </a>
                , because Razorpay acts as an independent data controller for
                the payment instrument data it processes on our behalf.
              </p>

              <p>
                <strong>Refunds &amp; cancellations.</strong> You may cancel
                a Premium or Pro plan at any time from{' '}
                <em>Settings → Plan</em>. Refund eligibility follows our
                refund policy (typically pro-rated for the unused portion
                within 7 days of purchase). Approved refunds are issued
                through Razorpay back to the original payment method and
                usually arrive within 5–10 business days, depending on your
                bank.
              </p>

              <p>
                <strong>Retention of billing records.</strong> We retain
                tokenised transaction records (Razorpay order ID, amount,
                date, GST invoice) for at least{' '}
                <strong>8 financial years</strong> as required by the
                Income-Tax Act, 1961, the Goods and Services Tax Act, 2017
                and other applicable Indian tax laws — even after you delete
                your account. These records contain no payment-instrument
                data.
              </p>

              <p>
                If you ever notice a charge you do not recognise, please
                write to{' '}
                <a href="mailto:billing@aaisaheb.in">billing@aaisaheb.in</a>{' '}
                or open a dispute directly through your bank / Razorpay
                support. We will respond within 2 working days.
              </p>
            </section>

            {/* 6 */}
            <section id="your-rights" className="policy-section">
              <h3>6. Your Rights &amp; Choices</h3>
              <p>Depending on where you live, you have the right to:</p>
              <ul className="bullets">
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate or incomplete data.</li>
                <li>Delete your data and account (see section 7).</li>
                <li>
                  Export your data in a portable, machine-readable format.
                </li>
                <li>Withdraw consent for any optional processing.</li>
                <li>Object to or restrict certain processing.</li>
                <li>
                  Lodge a complaint with your local data protection authority.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email{' '}
                <a href="mailto:privacy@aaisaheb.in">privacy@aaisaheb.in</a>{' '}
                or use the in-app{' '}
                <strong>Settings → Privacy → Manage my data</strong> screen.
              </p>
            </section>

            {/* 7 */}
            <section id="account-deletion" className="policy-section">
              <h3>7. Account Deletion</h3>
              <p>
                As required by Google Play, you can permanently delete your
                account and all associated personal data at any time:
              </p>
              <ul className="bullets">
                <li>
                  <strong>In the app:</strong> open{' '}
                  <em>Settings → Account → Delete account</em>.
                </li>
                <li>
                  <strong>On the web:</strong> visit{' '}
                  <a href="#">aaisaheb.in/delete-account</a> and follow the
                  instructions.
                </li>
                <li>
                  <strong>By email:</strong> write to{' '}
                  <a href="mailto:privacy@aaisaheb.in">privacy@aaisaheb.in</a>{' '}
                  from your registered email.
                </li>
              </ul>
              <p>
                Once you confirm, your account, profile, comments, jaap
                streak and personal data are deleted within 30 days.
                Anonymized analytics and any data we are legally required to
                retain (such as donation receipts) may be preserved as
                required by applicable law.
              </p>
            </section>

            {/* 8 */}
            <section id="contact" className="policy-section">
              <h3>8. Contact Us</h3>
              <p>
                Questions or concerns about your privacy? Reach our sansthan
                team at:
              </p>
              <div className="contact-cards">
                <div className="contact-card">
                  <Icon.Mail width="18" height="18" />
                  <span>Privacy / general</span>
                  <a href="mailto:privacy@aaisaheb.in">privacy@aaisaheb.in</a>
                </div>
                <div className="contact-card">
                  <Icon.User width="18" height="18" />
                  <span>Data Protection Officer</span>
                  <a href="mailto:dpo@aaisaheb.in">dpo@aaisaheb.in</a>
                </div>
                <div className="contact-card">
                  <Icon.Sparkles width="18" height="18" />
                  <span>Billing &amp; refunds</span>
                  <a href="mailto:billing@aaisaheb.in">billing@aaisaheb.in</a>
                </div>
                <div className="contact-card">
                  <Icon.Lock width="18" height="18" />
                  <span>Postal</span>
                  <a href="#">
                    Aaisaheb Maharaj Sansthan, Late (Bajaranvadi), Maharashtra,
                    India
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}
