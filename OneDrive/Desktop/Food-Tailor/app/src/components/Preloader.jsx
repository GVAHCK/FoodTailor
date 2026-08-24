import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(1); // 1: Paper & Ink Mark, 2: Drawing Dishes, 3: Curation, 4: Tailor Stroke, 5: Brand Reveal, 6: Exit
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Sequence stages
    const t1 = setTimeout(() => setStage(2), 400);   // Start Drawing
    const t2 = setTimeout(() => setStage(3), 1700);  // Converge & Curate
    const t3 = setTimeout(() => setStage(4), 2500);  // Crimson Tailor Stroke
    const t4 = setTimeout(() => setStage(5), 3300);  // Brand Reveal
    const t5 = setTimeout(() => setStage(6), 4100);  // Fade out
    const t6 = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete?.();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {stage < 6 && (
        <motion.div
          className="ft-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          onClick={handleSkip}
          aria-label="Loading Food Tailor"
        >
          {/* Ivory Paper Canvas Background */}
          <div className="ft-preloader__paper">
            <div className="ft-preloader__canvas">
              {/* Central Culinary Artwork SVG */}
              <svg
                className="ft-preloader__svg"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Watercolor Fill Filters */}
                  <radialGradient id="riceGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="kebabGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="herbGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. CENTRAL BIRYANI HANDI POT */}
                <motion.g
                  className="ft-preloader__element"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={stage >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  {/* Handi Pot Outline */}
                  <path
                    d="M140 180 C140 230, 260 230, 260 180 C260 160, 140 160, 140 180 Z"
                    className="ft-preloader__ink"
                    stroke="#1A1A1A"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  {/* Handi Base & Handles */}
                  <path
                    d="M150 200 C150 245, 250 245, 250 200"
                    className="ft-preloader__ink"
                    stroke="#1A1A1A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M136 175 C125 175, 125 188, 138 190 M264 175 C275 175, 275 188, 262 190"
                    className="ft-preloader__ink"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Saffron Rice Rice Grains & Garnish */}
                  <circle cx="200" cy="180" r="38" fill="url(#riceGlow)" opacity={stage >= 3 ? 1 : 0} />
                  <path
                    d="M170 178 Q185 170 200 176 T230 174"
                    className="ft-preloader__ink"
                    stroke="#D97706"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M180 186 Q200 180 220 185"
                    className="ft-preloader__ink"
                    stroke="#B45309"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* Aromatic Steam Swirls */}
                  <motion.path
                    d="M185 155 Q180 140 190 128 T185 112 M215 152 Q225 138 215 125 T220 110"
                    stroke="#78716C"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={stage >= 2 ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                </motion.g>

                {/* 2. SIZZLING SEEKH KEBAB SKEWER (Left Wing) */}
                <motion.g
                  className="ft-preloader__element"
                  initial={{ opacity: 0, x: -25, y: -10 }}
                  animate={
                    stage >= 3
                      ? { opacity: 1, x: 0, y: 0 }
                      : stage >= 2
                      ? { opacity: 0.9, x: -18, y: -8 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Skewer Iron Rod */}
                  <line x1="80" y1="230" x2="160" y2="150" stroke="#44403C" strokeWidth="2.2" strokeLinecap="round" />
                  {/* Charred Kebab Portions */}
                  <circle cx="105" cy="205" r="12" fill="url(#kebabGlow)" opacity={stage >= 3 ? 1 : 0} />
                  <ellipse cx="105" cy="205" rx="10" ry="14" transform="rotate(-45 105 205)" className="ft-preloader__ink" stroke="#1A1A1A" strokeWidth="2" />
                  <ellipse cx="125" cy="185" rx="10" ry="14" transform="rotate(-45 125 185)" className="ft-preloader__ink" stroke="#1A1A1A" strokeWidth="2" />
                  <ellipse cx="145" cy="165" rx="9" ry="13" transform="rotate(-45 145 165)" className="ft-preloader__ink" stroke="#1A1A1A" strokeWidth="2" />
                  {/* Grill Mark Specks */}
                  <path d="M102 205 L108 205 M122 185 L128 185 M142 165 L148 165" stroke="#7F1D1D" strokeWidth="1.5" />
                </motion.g>

                {/* 3. GOLDEN CRISPY SAMOSA & NAAN CORNER (Right Wing) */}
                <motion.g
                  className="ft-preloader__element"
                  initial={{ opacity: 0, x: 25, y: 10 }}
                  animate={
                    stage >= 3
                      ? { opacity: 1, x: 0, y: 0 }
                      : stage >= 2
                      ? { opacity: 0.9, x: 18, y: 8 }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Triangular Samosa Outline */}
                  <path
                    d="M260 215 L295 185 L285 230 Z"
                    className="ft-preloader__ink"
                    stroke="#1A1A1A"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Samosa Fold Texture */}
                  <path d="M268 212 Q282 200 286 215" stroke="#B45309" strokeWidth="1.6" fill="none" />
                  {/* Fresh Mint Coriander Leaves */}
                  <path
                    d="M295 210 Q310 205 315 218 Q305 225 295 210"
                    fill="url(#herbGlow)"
                    className="ft-preloader__ink"
                    stroke="#047857"
                    strokeWidth="1.5"
                  />
                </motion.g>

                {/* 4. BOTANICAL CARDAMOM, CLOVE & LEMON ACCENTS */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={stage >= 2 ? { opacity: 0.75 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Lemon Wedge at Bottom Left */}
                  <path
                    d="M135 250 A 20 20 0 0 0 165 265 L135 250"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    fill="#FDE047"
                    fillOpacity="0.3"
                  />
                  {/* Cardamom Pod at Top Right */}
                  <ellipse cx="255" cy="135" rx="7" ry="4" transform="rotate(30 255 135)" stroke="#1A1A1A" strokeWidth="1.6" />
                  <path d="M251 133 L259 137" stroke="#1A1A1A" strokeWidth="1.2" />
                </motion.g>

                {/* 5. THE SIGNATURE TAILOR STROKE & STITCH MARKS (Crimson Circle Sweep) */}
                <motion.g initial={{ opacity: 0 }} animate={stage >= 4 ? { opacity: 1 } : { opacity: 0 }}>
                  {/* Organic Crimson Tailor Stitch Loop */}
                  <motion.path
                    d="M200 65 C285 65 345 125 345 200 C345 285 275 340 195 340 C110 340 55 275 55 195 C55 115 120 65 198 65"
                    stroke="#B91C1C"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={stage >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Concentric Tailor Dashed Stitch Line */}
                  <motion.path
                    d="M200 75 C275 75 332 130 332 200 C332 272 268 328 198 328 C122 328 68 268 68 198 C68 128 126 75 198 75"
                    stroke="#B91C1C"
                    strokeWidth="1.4"
                    strokeDasharray="5 6"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={stage >= 4 ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Tailor Measuring Notch Mark */}
                  <circle cx="200" cy="65" r="4.5" fill="#B91C1C" />
                </motion.g>
              </svg>

              {/* 6. BRAND REVEAL TYPOGRAPHY (Rendered cleanly via HTML/CSS) */}
              <div className="ft-preloader__brand-reveal">
                <motion.h1
                  className="ft-preloader__brand-title"
                  initial={{ opacity: 0, y: 12 }}
                  animate={stage >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  FOOD TAILOR
                </motion.h1>

                <motion.p
                  className="ft-preloader__brand-subtitle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={stage >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  TAILORING YOUR FEAST
                </motion.p>
              </div>
            </div>
          </div>

          {/* Quick Skip Cue */}
          <button className="ft-preloader__skip" onClick={handleSkip} aria-label="Skip preloader animation">
            SKIP
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
