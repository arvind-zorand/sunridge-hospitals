
import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ onBookAppointment }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  // Close dropdown on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Add / remove "scrolled" style on header
  useEffect(() => {
    const header = document.querySelector('.site-header')
    if (!header) return
    const onScroll = () => {
      if (window.scrollY > 10) header.classList.add('site-header--scrolled')
      else header.classList.remove('site-header--scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close when clicking outside (mobile)
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!open) return
      const btn = document.getElementById('nav-menu-btn')
      const panel = dropdownRef.current
      if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [])

  const toggleMenu = () => setOpen(v => !v)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="container nav">
        {/* Brand */}
        <Link to="/" className="nav__brand" aria-label="Go to home">
          <img
            src="/images/SunRidge_Final_Logo.svg"
            alt="Sunridge Hospital"
            className="nav__logo"
          />
          <span>Sunridge Hospital</span>
        </Link>

        {/* Desktop links */}
        <div className="nav__links" aria-label="Primary">
          <Link to="/about">About Us</Link>
          <a href="/#location">Our Hospitals</a>
          <a href="/#specialties">Our Specialities</a>
          <a href="/#doctors">Our Doctors</a>
          <a href="/#contact">Contact Us</a>
        </div>

        {/* Desktop phone pill (hidden on mobile via SCSS) */}
        <a className="btn btn--primary nav__phone" href="tel:+919652766690" aria-label="Call +91 9652766690">
          <span className="nav__phone-icon">📞</span>
          +91 9652766690
        </a>

        {/* Mobile menu button */}
        <button
          id="nav-menu-btn"
          className="nav__menu-btn"
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          aria-controls="nav-dropdown"
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile dropdown (collapsible under the header) */}
      <div
        id="nav-dropdown"
        className={'nav__dropdown' + (open ? ' nav__dropdown--open' : '')}
        ref={dropdownRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="container nav__dropdown-inner">
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <a href="/#location" onClick={closeMenu}>Our Hospitals</a>
          <a href="/#specialties" onClick={closeMenu}>Our Specialities</a>
          <a href="/#doctors" onClick={closeMenu}>Our Doctors</a>
          <a href="/#contact" onClick={closeMenu}>Contact Us</a>

          <a className="nav__dropdown-call" href="tel:+919652766690" onClick={closeMenu}>
            📞 Call +91 9652766690
          </a>

          <button
            className="nav__dropdown-close"
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
