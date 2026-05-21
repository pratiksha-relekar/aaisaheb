import { Link } from 'react-router-dom'
import brandLogo from '../assets/a5.jpeg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="nav-brand">
            <img src={brandLogo} alt="Gojira" className="nav-logo" />
            <span>GOJIRA</span>
          </Link>
          <p className="footer-tag">
            Sansthan of Aaisaheb Maharaj — Late (Bajaranvadi).
          </p>
        </div>

        <div className="footer-cols">
          <div>
            <h6>Sansthan</h6>
            <a href="/#problem">About Aaisaheb</a>
            <a href="/#idea">Our Mission</a>
            <a href="/#download">Visit Us</a>
          </div>
          <div>
            <h6>App</h6>
            <a href="/#features">Features</a>
            <a href="/#testimonials">Devotees</a>
            <a href="/#pricing">Sevā Plans</a>
          </div>
          <div>
            <h6>Legal</h6>
            <a href="/#privacy">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Sansthan</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Aaisaheb Sansthan. All rights reserved.
        </span>
        <span>Made with devotion in Late (Bajaranvadi), Maharashtra</span>
      </div>
    </footer>
  )
}
