import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, MapPin, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function LandingNav({ isSubpage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const threshold = 100;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSideDrawerOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  // Escape key handler to close modals & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSideDrawerOpen(false);
        setMobileOpen(false);
      }
    };
    if (searchOpen || sideDrawerOpen || mobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchOpen, sideDrawerOpen, mobileOpen]);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/how-it-works', label: 'HOW IT WORKS' },
    { to: '/brands', label: 'BRANDS' },
    { to: '/menu-builder', label: 'MENU BUILDER' },
    { to: '/about', label: 'ABOUT' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      window.location.href = `/menu-builder?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* GASTROBAR HEADER */}
      <header className={`gb-header-wrapper ${(!isHome || isSubpage) ? 'gb-header-wrapper--subpage' : ''}`}>
        {/* 1. GASTROBAR TOP BAR: SOCIALS | CENTER LOGO | ORDER & COLLECT */}
        <div className="gb-top-bar">
          <div className="gb-top-bar__container">
            {/* Left: Social Media Icons */}
            <div className="gb-top-bar__socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="gb-social-link">
                <InstagramIcon size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="gb-social-link">
                <FacebookIcon size={15} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="gb-social-link">
                <TwitterIcon size={15} />
              </a>
            </div>

            <div className="gb-top-bar__v-divider" />

            {/* Center: Luxury GastroBar / Food Tailor Brand Logo */}
            <div className="gb-top-bar__brand">
              <Link to="/" className="gb-top-bar__logo">
                <span className="gb-logo-main">FOOD TAILÖR</span>
                <span className="gb-logo-sub">FINE CULINARY EXPERIENCES</span>
              </Link>
            </div>

            <div className="gb-top-bar__v-divider" />

            {/* Right: Phone & Order and Collect Line */}
            <div className="gb-top-bar__order">
              <Phone size={16} className="gb-order-icon" />
              <div className="gb-order-text">
                <span className="gb-order-phone">+91 98490 12345</span>
                <span className="gb-order-label">ORDER &amp; COLLECT</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. GASTROBAR MAIN NAVIGATION BAR */}
        <div className={`gb-main-header ${scrolled ? 'gb-main-header--sticky' : ''}`}>
          <div className="gb-main-header__container">
            {/* Sticky Mini Logo (appears when scrolled) */}
            <div className="gb-main-header__sticky-logo">
              <Link to="/" className="gb-sticky-wordmark">
                FOOD TAILÖR
              </Link>
            </div>

          {/* Center Navigation Links */}
          <nav className="gb-nav" aria-label="Main Navigation">
            <ul className="gb-nav__list">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <li key={link.to} className="gb-nav__item">
                    <Link
                      to={link.to}
                      className={`gb-nav__link ${active ? 'gb-nav__link--active' : ''}`}
                    >
                      <span className="gb-nav__bullet">•</span>
                      <span className="gb-nav__text">{link.label}</span>
                      <span className="gb-nav__bullet">•</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons: Search + Hamburger Side Drawer + CTA */}
          <div className="gb-nav__actions">
            <button
              className="gb-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              title="Search Menus & Brands"
            >
              <Search size={18} />
            </button>

            <button
              className="gb-hamburger-btn"
              onClick={() => setSideDrawerOpen(true)}
              aria-label="Open side menu"
              title="Info & Hours"
            >
              <span className="gb-hamburger-line"></span>
              <span className="gb-hamburger-line"></span>
              <span className="gb-hamburger-line"></span>
            </button>

            <Link to="/menu-builder" className="gb-header-cta">
              START YOUR MENU
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="gb-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* 3. GASTROBAR SLIDE-OUT SIDE DRAWER (OFF-CANVAS PANEL) */}
      <div
        className={`gb-side-drawer-overlay ${sideDrawerOpen ? 'gb-side-drawer-overlay--active' : ''}`}
        onClick={() => setSideDrawerOpen(false)}
      />
      <aside className={`gb-side-drawer ${sideDrawerOpen ? 'gb-side-drawer--open' : ''}`}>
        <div className="gb-side-drawer__header">
          <button
            className="gb-side-drawer__close"
            onClick={() => setSideDrawerOpen(false)}
            aria-label="Close side panel"
          >
            <X size={24} />
          </button>
        </div>

        <div className="gb-side-drawer__body">
          {/* Insignia / Brand Crest */}
          <div className="gb-side-drawer__brand">
            <div className="gb-brand-crest">
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#c41e3a" strokeWidth="1.5" />
                <path
                  d="M10.4 19.2c-2.64 0-4.8-2.16-4.8-4.8s2.16-4.8 4.8-4.8c1.68 0 3.12.84 3.96 2.16C15.2 10.44 16.64 9.6 18.32 9.6c2.64 0 4.8 2.16 4.8 4.8s-2.16 4.8-4.8 4.8c-1.68 0-3.12-.84-3.96-2.16C13.52 18.36 12.08 19.2 10.4 19.2z"
                  stroke="#c41e3a"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="gb-side-drawer__title">FOOD TAILOR</h3>
            <p className="gb-side-drawer__subtitle">CRAFT CULINARY EXPERIENCES</p>
          </div>

          {/* Bio Text */}
          <p className="gb-side-drawer__bio">
            Food Tailor curates Hyderabad's most legendary dining brands into bespoke, multi-brand celebratory feasts. Experience seamless catering from Cafe Niloufer, Hotel Shadab, Almond House, and more for every milestone.
          </p>

          <div className="gb-side-divider" />

          {/* Contact Details */}
          <div className="gb-side-drawer__section">
            <h4 className="gb-side-section-title">CONTACT INFO</h4>
            <ul className="gb-side-contact-list">
              <li className="gb-side-contact-item">
                <MapPin size={16} className="gb-side-icon" />
                <span>Road No. 36, Jubilee Hills, Hyderabad 500033</span>
              </li>
              <li className="gb-side-contact-item">
                <Phone size={16} className="gb-side-icon" />
                <span>+91 98490 12345</span>
              </li>
              <li className="gb-side-contact-item">
                <Mail size={16} className="gb-side-icon" />
                <span>concierge@foodtailor.in</span>
              </li>
            </ul>
          </div>

          <div className="gb-side-divider" />

          {/* Opening / Operating Hours */}
          <div className="gb-side-drawer__section">
            <h4 className="gb-side-section-title">WORKING HOURS</h4>
            <div className="gb-working-hours">
              <div className="gb-hours-row">
                <span className="gb-hours-day">Monday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 24:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Tuesday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 24:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Wednesday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 24:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Thursday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 24:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Friday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 02:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Saturday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 02:00</span>
              </div>
              <div className="gb-hours-row">
                <span className="gb-hours-day">Sunday</span>
                <span className="gb-hours-dots"></span>
                <span className="gb-hours-time">09:00 – 02:00</span>
              </div>
            </div>
          </div>

          <div className="gb-side-divider" />

          {/* Follow Us */}
          <div className="gb-side-drawer__section">
            <h4 className="gb-side-section-title">FOLLOW US</h4>
            <div className="gb-side-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gb-side-social-btn" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="gb-side-social-btn" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="gb-side-social-btn" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* 4. GASTROBAR FULLSCREEN SEARCH OVERLAY */}
      {searchOpen && (
        <div className="gb-fullscreen-search">
          <button
            className="gb-fullscreen-search__close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search overlay"
          >
            <X size={32} />
          </button>
          <div className="gb-fullscreen-search__container">
            <p className="gb-fullscreen-search__label">SEARCH FOOD TAILOR</p>
            <form className="gb-fullscreen-search__form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search dishes, iconic brands, or occasions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="gb-fullscreen-search__input"
              />
              <button type="submit" className="gb-fullscreen-search__submit" aria-label="Search">
                <Search size={26} />
              </button>
            </form>
            <p className="gb-fullscreen-search__hint">
              Popular searches: Cafe Niloufer Chai, Dum Biryani, Almond House, Wedding Feasts, Cocktail Platters
            </p>
          </div>
        </div>
      )}

      {/* 5. MOBILE FULL-SCREEN MENU DRAWER */}
      {mobileOpen && (
        <div className="gb-mobile-drawer">
          <nav className="gb-mobile-nav">
            <ul className="gb-mobile-list">
              {navLinks.map((link) => {
                const active = isActive(link.to);
                return (
                  <li key={link.to} className="gb-mobile-item">
                    <Link
                      to={link.to}
                      className={`gb-mobile-link ${active ? 'gb-mobile-link--active' : ''}`}
                    >
                      <span className="gb-mobile-bullet">•</span>
                      <span>{link.label}</span>
                      <span className="gb-mobile-bullet">•</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="gb-mobile-cta-wrap">
              <Link to="/menu-builder" className="ed-btn ed-btn--crimson ed-btn--wide">
                START YOUR MENU
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
