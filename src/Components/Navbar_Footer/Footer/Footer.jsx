
import "./SerenityFooter.css";
import { Link } from "react-router-dom";
import logo from '../../../assets/Img/logo.svg'


export default function SerenityFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">


        <div className="footer-col">
          <div className="brand-logo">
            <img src={logo} alt="" />

          </div>
          <p className="brand-text">
            Your space to heal, grow, and feel understood. Offering compassionate,
            personalized mental health support to guide life's challenges.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.7L4.8 22H1.7l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" /></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="boxed">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="boxed">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6v6.3H18v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.7H10V9Z" /></svg>
            </a>
          </div>
        </div>


        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p className="label">Email</p>
          <p className="value">hello@serenityminds.com</p>
          <p className="label">Phone</p>
          <p className="value">+1 (123) 456-7890</p>
          <p className="label">Office Hours:</p>
          <p className="value">Mon–Sat, 9 AM – 7 PM</p>
        </div>


        <div className="footer-col">
          <h4 className="visit-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E8483A"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.2 7 11.5 7.3 11.7a1 1 0 0 0 1.4 0C13 21.5 20 15.2 20 10c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
            Visit Us
          </h4>
          <p className="label">Address</p>
          <p className="value">
            Serenity Minds Counseling Center<br />
            123 Tranquil Avenue&nbsp;&nbsp;Wellness<br />
            City, CA 90210
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <span>SINCE. 2026</span>
        <span>©Serenity Minds. All rights reserved.</span>
      </div>
    </footer>
  );
}