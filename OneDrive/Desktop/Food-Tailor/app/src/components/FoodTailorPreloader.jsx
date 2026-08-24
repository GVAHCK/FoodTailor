import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FOOD TAILOR — CINEMATIC SVG PRELOADER
 * Recreates the hand-drawn culinary art, crimson tailor measuring tape,
 * and editorial brand reveal on warm parchment paper.
 */
export default function FoodTailorPreloader({ onComplete }) {
  // Animation timeline phases:
  // 1: Paper & Ink Dot (0.0s - 0.8s)
  // 2: Culinary Sketch Linework (0.8s - 2.2s)
  // 3: Food Colors & Watercolor Fills (2.0s - 3.2s)
  // 4: Crimson Tailor's Measuring Tape Sweep (2.8s - 4.2s)
  // 5: Composition Settle & Brand Reveal (4.0s - 5.2s)
  // 6: Smooth Exit Transition (5.0s - 5.6s)
  const [phase, setPhase] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const t1 = setTimeout(() => setPhase(2), 700);
    const t2 = setTimeout(() => setPhase(3), 1800);
    const t3 = setTimeout(() => setPhase(4), 2700);
    const t4 = setTimeout(() => setPhase(5), 3800);
    const t5 = setTimeout(() => setPhase(6), 4900);
    const t6 = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 5400);

    // Safety failsafe: never block page longer than 6s
    const failsafe = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(failsafe);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.aside
          className="ft-cinematic-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={handleSkip}
          aria-label="Food Tailor Preloader — Tailoring Your Feast"
        >
          {/* 1. AGED PARCHMENT PAPER BACKGROUND WITH ORGANIC GRAIN */}
          <div className="ft-cinematic-preloader__paper">
            {/* Corner Decorative Ink & Star Detail */}
            <svg
              className="ft-cinematic-preloader__ink-mark"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14 2 L14 26 M2 14 L26 14 M5.5 5.5 L22.5 22.5 M5.5 22.5 L22.5 5.5"
                stroke="#B91C1C"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle cx="14" cy="14" r="2.5" fill="#1A1A1A" />
            </svg>

            {/* Central Animated Canvas */}
            <div className="ft-cinematic-preloader__composition">
              {/* MASTER CULINARY ARTWORK & TAILOR TAPE SVG */}
              <svg
                className="ft-cinematic-preloader__svg"
                viewBox="0 0 460 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Watercolor Food Glows */}
                  <radialGradient id="saffronGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
                    <stop offset="70%" stopColor="#D97706" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="tikkaGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
                    <stop offset="80%" stopColor="#991B1B" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="herbGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#047857" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* ========================================================
                    CULINARY FEAST ARTWORK (Fine Charcoal Linework & Fills)
                    ======================================================== */}

                {/* 1. CENTRAL BIRYANI HANDI POT WITH DUM SEAL & STEAM */}
                <g className="ft-preloader-item">
                  {/* Saffron Rice & Garnish Color Fill */}
                  <motion.ellipse
                    cx="230"
                    cy="215"
                    rx="62"
                    ry="32"
                    fill="url(#saffronGlow)"
                    initial={{ opacity: 0 }}
                    animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Handi Rim Lip */}
                  <motion.path
                    d="M165 210 C165 190, 295 190, 295 210 C295 230, 165 230, 165 210 Z"
                    stroke="#1A1A1A"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Handi Body & Copper Base */}
                  <motion.path
                    d="M175 220 C170 270, 290 270, 285 220"
                    stroke="#1A1A1A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Brass Handles */}
                  <motion.path
                    d="M160 205 C146 205, 146 222, 162 224 M300 205 C314 205, 314 222, 298 224"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                  />

                  {/* Fragrant Long Grain Rice Grains & Crispy Birista Lines */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <path d="M195 208 Q210 202 230 207 T265 205" stroke="#B45309" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M205 216 Q225 210 248 214" stroke="#D97706" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M185 212 L192 215 M235 220 L242 222 M255 212 L262 210" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />
                  </motion.g>

                  {/* Aromatic Steam Swirls Rising */}
                  <motion.path
                    d="M210 185 Q200 162 215 145 T208 122 M245 182 Q258 160 244 140 T252 120"
                    stroke="#78716C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={phase >= 2 ? { pathLength: 1, opacity: 0.65 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.3, delay: 0.4 }}
                  />
                </g>

                {/* 2. CHARRED SEEKH KEBAB SKEWER (Left Wing) */}
                <motion.g
                  className="ft-preloader-item"
                  initial={{ opacity: 0, x: -18, y: -8 }}
                  animate={
                    phase >= 3
                      ? { opacity: 1, x: 0, y: 0 }
                      : phase >= 2
                      ? { opacity: 0.9, x: -10, y: -4 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Iron Skewer Rod */}
                  <line x1="95" y1="270" x2="195" y2="170" stroke="#44403C" strokeWidth="2.2" strokeLinecap="round" />
                  {/* Charcoal Tikka Kebab Portions */}
                  <ellipse cx="125" cy="240" rx="12" ry="17" transform="rotate(-45 125 240)" fill="url(#tikkaGlow)" stroke="#1A1A1A" strokeWidth="2" />
                  <ellipse cx="150" cy="215" rx="12" ry="17" transform="rotate(-45 150 215)" fill="url(#tikkaGlow)" stroke="#1A1A1A" strokeWidth="2" />
                  <ellipse cx="175" cy="190" rx="11" ry="16" transform="rotate(-45 175 190)" fill="url(#tikkaGlow)" stroke="#1A1A1A" strokeWidth="2" />
                  {/* Grill Charr Marks */}
                  <path d="M120 240 L130 240 M145 215 L155 215 M170 190 L180 190" stroke="#7F1D1D" strokeWidth="1.8" strokeLinecap="round" />
                </motion.g>

                {/* 3. GOLDEN CRISPY SAMOSA & NAAN TRIANGLE (Right Wing) */}
                <motion.g
                  className="ft-preloader-item"
                  initial={{ opacity: 0, x: 18, y: 8 }}
                  animate={
                    phase >= 3
                      ? { opacity: 1, x: 0, y: 0 }
                      : phase >= 2
                      ? { opacity: 0.9, x: 10, y: 4 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Samosa Silhouette */}
                  <path
                    d="M295 255 L345 210 L330 270 Z"
                    stroke="#1A1A1A"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                    fill="#FDE68A"
                    fillOpacity={phase >= 3 ? 0.35 : 0}
                  />
                  <path d="M305 250 Q325 235 330 252" stroke="#B45309" strokeWidth="1.6" fill="none" />
                  {/* Fresh Mint Coriander Sprig */}
                  <path
                    d="M340 245 Q360 238 365 255 Q352 262 340 245"
                    fill="url(#herbGlow)"
                    stroke="#047857"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* 4. HERBS, LEMON WEDGE & SPICE BOTANICALS */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={phase >= 2 ? { opacity: 0.85 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Lemon Wedge at Bottom Left */}
                  <path
                    d="M160 290 A 24 24 0 0 0 195 310 L160 290"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    fill="#FACC15"
                    fillOpacity={phase >= 3 ? 0.4 : 0}
                  />
                  <line x1="160" y1="290" x2="182" y2="304" stroke="#CA8A04" strokeWidth="1.2" />

                  {/* Cardamom Pod at Top Right */}
                  <ellipse cx="295" cy="155" rx="8" ry="4.5" transform="rotate(35 295 155)" stroke="#1A1A1A" strokeWidth="1.6" fill="#A3E635" fillOpacity="0.25" />
                  <path d="M290 152 L300 158" stroke="#1A1A1A" strokeWidth="1.2" />

                  {/* Star Anise Petal at Bottom Right */}
                  <path d="M285 300 L295 288 L305 300 L295 312 Z" stroke="#78350F" strokeWidth="1.5" fill="#92400E" fillOpacity="0.3" />
                </motion.g>

                {/* 5. CULINARY TASTING SPOON */}
                <motion.path
                  d="M125 155 Q135 145 150 152 Q158 165 145 172 Q132 170 125 155 Z M150 162 L200 200"
                  stroke="#78716C"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={phase >= 2 ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.0, delay: 0.4 }}
                />

                {/* ========================================================
                    PHASE 4: THE CRIMSON TAILOR'S MEASURING TAPE
                    ======================================================== */}
                <g className="ft-preloader-tailor-tape">
                  {/* Primary Tailor Measuring Tape Ribbon (Drawn with thickness) */}
                  <motion.path
                    d="M230 45 C335 45 405 115 405 230 C405 340 330 410 225 410 C120 410 55 335 55 225 C55 118 125 45 228 45"
                    stroke="#B91C1C"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Inner Stitched Measuring Tick Marks (Progressive revelation) */}
                  <motion.path
                    d="M230 45 C335 45 405 115 405 230 C405 340 330 410 225 410 C120 410 55 335 55 225 C55 118 125 45 228 45"
                    stroke="#FAF6F0"
                    strokeWidth="4"
                    strokeDasharray="2 7"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Outer Concentric Tailor Stitching Line */}
                  <motion.path
                    d="M230 33 C345 33 418 108 418 230 C418 350 340 422 225 422 C110 422 42 345 42 225 C42 108 118 33 228 33"
                    stroke="#B91C1C"
                    strokeWidth="1.4"
                    strokeDasharray="4 5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={phase >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.3, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Brass Tailor Measuring Metal End Clip */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <rect x="222" y="39" width="12" height="12" rx="2" fill="#D97706" stroke="#92400E" strokeWidth="1.2" />
                    <circle cx="228" cy="45" r="2.5" fill="#1A1A1A" />
                  </motion.g>
                </g>
              </svg>

              {/* ========================================================
                  PHASE 6: FOOD TAILOR EDITORIAL BRAND REVEAL
                  ======================================================== */}
              <div className="ft-cinematic-preloader__brand">
                <motion.h1
                  className="ft-cinematic-preloader__title"
                  initial={{ opacity: 0, y: 14 }}
                  animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  FOOD TAILOR
                </motion.h1>

                <motion.p
                  className="ft-cinematic-preloader__subtitle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                >
                  TAILORING YOUR FEAST
                </motion.p>
              </div>
            </div>
          </div>

          {/* Quick Skip Control (Right corner) */}
          {phase < 5 && (
            <button
              className="ft-cinematic-preloader__skip-btn"
              onClick={handleSkip}
              aria-label="Skip preloader animation"
            >
              SKIP
            </button>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
