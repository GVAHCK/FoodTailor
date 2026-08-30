import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import biryaniCloseup from '../../assets/biryani-closeup.jpg';
import kebabsImg from '../../assets/kebabs.jpg';
import craftBeverage from '../../assets/craft-beverage.jpg';
import tandooriPlatter from '../../assets/tandoori-platter.jpg';
import feastTable from '../../assets/feast-table.jpg';
import burgerImg from '../../assets/strip-burger.jpg';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function EditorialFooter() {
  const instaImages = [
    { src: biryaniCloseup, alt: 'Dum Biryani' },
    { src: kebabsImg, alt: 'Charcoal Kebabs' },
    { src: craftBeverage, alt: 'Craft Chai' },
    { src: tandooriPlatter, alt: 'Tandoori Chops' },
    { src: feastTable, alt: 'Feast Table' },
    { src: burgerImg, alt: 'Artisan Sliders' },
  ];

  return (
    <footer className="ed-footer" id="footer">
      <div className="container ed-footer__container">
        <div className="ed-footer__grid">
          {/* Column 1: Contact Info & Address */}
          <div className="ed-footer__col">
            <h4 className="ed-footer__heading">CONTACT</h4>
            <p className="ed-footer__text">
              Curated multi-brand culinary feasts for life's most unforgettable occasions, sourced directly from iconic kitchens.
            </p>
            <ul className="ed-footer__contact-list">
              <li className="ed-footer__contact-row">
                <MapPin size={15} className="ed-footer__c-icon" />
                <span>Road No. 36, Jubilee Hills, Hyderabad</span>
              </li>
              <li className="ed-footer__contact-row">
                <Phone size={15} className="ed-footer__c-icon" />
                <span>+91 98490 12345</span>
              </li>
              <li className="ed-footer__contact-row">
                <Mail size={15} className="ed-footer__c-icon" />
                <span>concierge@foodtailor.in</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Working Hours Table with Dotted Leaders */}
          <div className="ed-footer__col">
            <h4 className="ed-footer__heading">WORKING</h4>
            <div className="ed-footer__hours-table">
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Monday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 24:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Tuesday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 24:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Wednesday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 24:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Thursday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 24:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Friday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 02:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Saturday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 02:00</span>
              </div>
              <div className="ed-footer__hours-row">
                <span className="ed-footer__day">Sunday</span>
                <span className="ed-footer__dots"></span>
                <span className="ed-footer__time">09:00 – 02:00</span>
              </div>
            </div>
          </div>

          {/* Column 3: Occasions & Signature Brands */}
          <div className="ed-footer__col">
            <h4 className="ed-footer__heading">OCCASIONS</h4>
            <ul className="ed-footer__links">
              <li><Link to="/menu-builder">Weddings &amp; Receptions</Link></li>
              <li><Link to="/menu-builder">Milestone Birthdays</Link></li>
              <li><Link to="/menu-builder">Corporate Banquets &amp; Galas</Link></li>
              <li><Link to="/menu-builder">Private Socials &amp; Sundowners</Link></li>
              <li><Link to="/brands">Curated Brand Roster</Link></li>
              <li><Link to="/how-it-works">How Delivery Works</Link></li>
            </ul>
          </div>

          {/* Column 4: Instagram / Recent Moments Grid */}
          <div className="ed-footer__col">
            <div className="ed-footer__insta-header">
              <h4 className="ed-footer__heading">INSTAGRAM</h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="ed-footer__insta-link"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={14} />
                <span>@foodtailor.hyd</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="ed-footer__insta-grid">
              {instaImages.map((img, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ed-footer__insta-item"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="ed-footer__insta-overlay">
                    <InstagramIcon size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="ed-footer__bottom">
          <p className="ed-footer__copy">
            FOOD TAILOR — Curated Food Brands for Your Special Moments
          </p>
          <p className="ed-footer__rights">
            © {new Date().getFullYear()} Food Tailor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
