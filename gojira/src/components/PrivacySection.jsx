import { Icon } from '../icons.jsx'

/**
 * Inline Privacy Policy section for the Landing page. Renders the same
 * content the standalone page used to have, minus the page-level Nav /
 * Footer / Download CTA (the Landing page already provides those).
 *
 * Sections follow Google Play Store's Data Safety + User Data policy
 * (https://support.google.com/googleplay/android-developer/answer/10787469)
 * and the Limited Use / Permissions disclosures required to list and
 * publish the Gojira music app.
 */

const TOC = [
  { id: 'overview', label: '1. Overview' },
  { id: 'permissions', label: '2. App Permissions' },
  { id: 'how-we-use', label: '3. How We Use Data' },
  { id: 'security', label: '4. Data Security' },
  { id: 'your-rights', label: '5. Your Rights & Choices' },
  { id: 'account-deletion', label: '6. Account Deletion' },
  { id: 'contact', label: '7. Contact Us' },
]

const PERMISSIONS = [
  {
    name: 'Microphone',
    purpose:
      'Required for voice search and AI DJ commands. Recording starts only when you actively press the mic button.',
  },
  {
    name: 'Storage / Media',
    purpose:
      'Saves downloaded tracks for offline listening and lets you upload a profile picture.',
  },
  {
    name: 'Notifications',
    purpose:
      'Sends new release alerts, friend activity and important account updates. You can disable this at any time in settings.',
  },
  {
    name: 'Bluetooth',
    purpose:
      'Connects Gojira to your wireless headphones and external speakers for playback.',
  },
  {
    name: 'Network access',
    purpose:
      'Required to stream music, sync your library and download content over Wi-Fi or mobile data.',
  },
  {
    name: 'Contacts (optional)',
    purpose:
      'Only used if you tap “Invite Friends” to find which of your contacts already use Gojira.',
  },
  {
    name: 'Location (optional, coarse only)',
    purpose:
      'Helps us serve region-appropriate content and licensed catalogs. We do not track your precise GPS location.',
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
            How Gojira collects, uses, shares and protects your information —
            prepared in line with the Google Play Store Data Safety
            requirements, applicable data-protection laws (GDPR, CCPA, India
            DPDP Act 2023) and Apple App Tracking Transparency.
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
              <strong>Gojira app + web</strong>
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
                Gojira (“we”, “our”, “us”) is a next-generation music
                experience operated by Gojira Audio Pvt. Ltd. This Privacy
                Policy describes the personal data we collect when you use the
                Gojira mobile application available on the Google Play Store
                and Apple App Store, the gojira.app website and any related
                services (collectively, the “Service”).
              </p>
              <p>
                By creating a Gojira account, downloading the app from Google
                Play or signing in with Google / Apple, you confirm that you
                have read, understood and agree to this policy. If you do not
                agree, please do not use the Service.
              </p>
            </section>

            {/* 2 */}
            <section id="permissions" className="policy-section">
              <h3>2. App Permissions Requested on Google Play</h3>
              <p>
                When you install Gojira from the Play Store, the app may
                request the following Android runtime permissions. We follow
                the principle of least privilege — every permission has a
                clear, user-facing purpose, and you can revoke any of them
                from your device settings at any time.
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
                  stream music, sync your library across devices and process
                  subscriptions.
                </li>
                <li>
                  <strong>Personalize your experience:</strong> build
                  recommendations, generate AI DJ mixes, mood playlists and
                  Day-Starter beats from your listening history.
                </li>
                <li>
                  <strong>Communicate with you:</strong> send transactional
                  emails, push notifications and (only with consent) marketing
                  updates.
                </li>
                <li>
                  <strong>Improve and secure Gojira:</strong> detect abuse,
                  debug crashes, run A/B tests, measure feature performance.
                </li>
                <li>
                  <strong>Comply with the law:</strong> respond to lawful
                  requests, enforce our terms and protect users.
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

            {/* 5 */}
            <section id="your-rights" className="policy-section">
              <h3>5. Your Rights & Choices</h3>
              <p>Depending on where you live, you have the right to:</p>
              <ul className="bullets">
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate or incomplete data.</li>
                <li>Delete your data and account (see section 6).</li>
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
                <a href="mailto:privacy@gojira.app">privacy@gojira.app</a> or
                use the in-app{' '}
                <strong>Settings → Privacy → Manage my data</strong> screen.
              </p>
            </section>

            {/* 6 */}
            <section id="account-deletion" className="policy-section">
              <h3>6. Account Deletion</h3>
              <p>
                As required by Google Play, you can permanently delete your
                Gojira account and all associated personal data at any time:
              </p>
              <ul className="bullets">
                <li>
                  <strong>In the app:</strong> open{' '}
                  <em>Settings → Account → Delete account</em>.
                </li>
                <li>
                  <strong>On the web:</strong> visit{' '}
                  <a href="#">gojira.app/delete-account</a> and follow the
                  instructions.
                </li>
                <li>
                  <strong>By email:</strong> write to{' '}
                  <a href="mailto:privacy@gojira.app">privacy@gojira.app</a>{' '}
                  from your registered email.
                </li>
              </ul>
              <p>
                Once you confirm, your account, profile, playlists, listening
                history and personal data are deleted within 30 days.
                Anonymized analytics and any data we are legally required to
                retain (such as billing records) may be preserved as required
                by applicable law.
              </p>
            </section>

            {/* 7 */}
            <section id="contact" className="policy-section">
              <h3>7. Contact Us</h3>
              <p>
                Questions or concerns about your privacy? Reach our team at:
              </p>
              <div className="contact-cards">
                <div className="contact-card">
                  <Icon.Mail width="18" height="18" />
                  <span>Email</span>
                  <a href="mailto:privacy@gojira.app">privacy@gojira.app</a>
                </div>
                <div className="contact-card">
                  <Icon.User width="18" height="18" />
                  <span>Data Protection Officer</span>
                  <a href="mailto:dpo@gojira.app">dpo@gojira.app</a>
                </div>
                <div className="contact-card">
                  <Icon.Lock width="18" height="18" />
                  <span>Postal</span>
                  <a href="#">
                    Gojira Audio Pvt. Ltd., 4th Floor, Infopark, Kakkanad,
                    Kochi 682030, Kerala, India
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
