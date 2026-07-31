import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'

import logo from '../../../assets/Img/logo.svg'
import './Navbar.css'
import Btn from '../../btn/Btn'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo", {
        y: -50,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".ul a", {
        y: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
      });

      gsap.from(".btn", {
        x: 50,
        opacity: 0,
        duration: 1,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className='Navbar' ref={navRef}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>

        <ul className={`ul ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}

          <li className="mobile-btn">
            <Btn name='Book an appointment' onClick={() => setMenuOpen(false)} />
          </li>
        </ul>

<div className="btn-icon">
        <div className="desktop-btn">
          <Btn name='Book an appointment' />
        </div>

        <button
          className='hamburger-btn'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

</div>

      </section>
    </>
  )
}

export default Navbar