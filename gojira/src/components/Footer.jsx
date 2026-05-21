import { Link } from 'react-router-dom'
import { Icon } from '../icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="nav-brand">
            <Icon.Logo width="22" height="22" />
            <span>GOJIRA</span>
          </Link>
          <p className="footer-tag">The future of music listening.</p>
        </div>

        <div className="footer-cols">
          <div>
            <h6>Product</h6>
            <a href="/#features">Features</a>
            <a href="/#idea">Experience</a>
            <a href="/#download">Download</a>
          </div>
          <div>
            <h6>Company</h6>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <h6>Legal</h6>
            <a href="/#privacy">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gojira. All rights reserved.</span>
        <span>Made in Kerala, India</span>
      </div>
    </footer>
  )
}
