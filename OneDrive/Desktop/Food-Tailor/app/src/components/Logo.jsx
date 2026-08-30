import React from 'react';

/**
 * FOOD TAILOR Logo — wordmark with double-O rendered as a terracotta infinity loop.
 * The word reads "FOOD TAILOR" with the two O's replaced by an ∞ symbol.
 *
 * @param {'default'|'light'} variant - 'light' for use on dark backgrounds (footer)
 */
export default function Logo({ size = 'default', variant = 'default', className = '' }) {
  return (
    <a href="/" className={`logo-link ${className}`} aria-label="Food Tailor — Home" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
      <span
        style={{
          fontFamily: "'Montserrat', 'Open Sans', sans-serif",
          fontSize: size === 'large' ? '1.8rem' : size === 'small' ? '1.15rem' : '1.45rem',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: '#FFFFFF',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        FOOD TAILÖR
      </span>
    </a>
  );
}

/**
 * Favicon SVG — standalone infinity-O mark
 */
export function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#1a1a1a" />
      <g transform="translate(3.5, 8)">
        <path
          d="M8 8c-2.2 0-4-1.8-4-4s1.8-4 4-4c1.4 0 2.6.7 3.3 1.8C12.1.7 13.3 0 14.7 0c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.4 0-2.6-.7-3.3-1.8C10.6 7.3 9.4 8 8 8z"
          stroke="#c41e3a"
          strokeWidth="2"
          fill="none"
          transform="translate(2, 4) scale(1.2)"
        />
      </g>
    </svg>
  );
}
