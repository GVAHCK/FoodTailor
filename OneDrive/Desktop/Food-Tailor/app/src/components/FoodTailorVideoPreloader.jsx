import React, { useState, useEffect, useRef } from 'react';

/**
 * FOOD TAILOR — CINEMATIC VIDEO PRELOADER
 * Full-screen opening brand film using the official Cloudinary video asset.
 */
export default function FoodTailorVideoPreloader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  const VIDEO_URL =
    'https://res.cloudinary.com/domogztsv/video/upload/v1787568351/Create_a_second_premium_cine_ytlzea.mp4';

  const finishPreloader = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 450);
  };

  useEffect(() => {
    // 1. Accessibility: Skip for users with reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // 2. Lock page scroll during playback
    document.body.style.overflow = 'hidden';

    // 3. Failsafe timeout (12s max) to guarantee website is always reached
    const failsafeTimer = setTimeout(() => {
      finishPreloader();
    }, 12000);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(failsafeTimer);
    };
  }, []);

  const handleVideoEnded = () => {
    finishPreloader();
  };

  const handleVideoError = () => {
    // If video fails to load or format is unsupported, gracefully skip to website
    console.warn('Food Tailor video preloader encountered an issue, skipping to website.');
    finishPreloader();
  };

  if (!isVisible) return null;

  return (
    <aside
      className={`ft-video-preloader ${isFadingOut ? 'ft-video-preloader--fade-out' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="ft-video-preloader__wrapper">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          className="ft-video-preloader__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onError={handleVideoError}
        />
      </div>

      {/* Subtle Skip Control */}
      <button
        className="ft-video-preloader__skip-btn"
        onClick={finishPreloader}
        aria-label="Skip opening video"
      >
        SKIP
      </button>
    </aside>
  );
}
