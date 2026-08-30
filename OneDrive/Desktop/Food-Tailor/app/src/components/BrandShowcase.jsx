import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import { brands as seedBrands, getDishesByBrand } from '../data/seedData';
import { fetchBrands } from '../api/client';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BrandShowcase({ limit, showHeader = true, isFullPage = false }) {
  const [brands, setBrands] = useState(seedBrands);

  useEffect(() => {
    fetchBrands().then(setBrands).catch(() => {});
  }, []);

  const displayBrands = limit ? brands.slice(0, limit) : brands;

  return (
    <section className="gb-brands-section" id="signature-kitchens">
      {/* 1. EDITORIAL HERO BANNER / HEADER */}
      {showHeader && (
        <div className="gb-brands-hero">
          <div className="container gb-brands-hero__container">
            <motion.p
              className="gb-brands-hero__script"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Handpicked Culinary Masters
            </motion.p>

            <motion.h1
              className="gb-brands-hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              OUR CURATED BRANDS
            </motion.h1>

            {/* Decorative Gold Divider Accent Line */}
            <div className="gb-brands-hero__divider">
              <span className="gb-brands-hero__divider-line" />
              <span className="gb-brands-hero__divider-diamond">♦</span>
              <span className="gb-brands-hero__divider-line" />
            </div>

            <motion.p
              className="gb-brands-hero__desc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We partner with Hyderabad's most celebrated culinary institutions — each iconic brand brings
              generations of authentic heritage, master recipes, and bespoke flavours to your special gatherings.
            </motion.p>
          </div>
        </div>
      )}

      {/* 2. LUXURY BRAND CARDS GRID */}
      <div className="container gb-brands__container">
        <motion.div
          className="gb-brands-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {displayBrands.map((brand) => {
            const dishes = getDishesByBrand(brand.id);
            return (
              <motion.article
                key={brand.id}
                className="gb-brand-card"
                variants={cardVariants}
              >
                {/* Top Accent Line & Header */}
                <div className="gb-brand-card__header">
                  <div className="gb-brand-card__title-group">
                    <h2 className="gb-brand-card__name">{brand.name}</h2>
                    {brand.established && (
                      <span className="gb-brand-card__est">EST. {brand.established}</span>
                    )}
                  </div>
                  <span className="gb-brand-card__cuisine-pill">{brand.cuisine}</span>
                </div>

                {/* Script Tagline */}
                {brand.tagline && (
                  <p className="gb-brand-card__tagline">{brand.tagline}</p>
                )}

                {/* Brand Story / Description */}
                <p className="gb-brand-card__description">{brand.description}</p>

                {/* Signature Dishes List */}
                {dishes.length > 0 && (
                  <div className="gb-brand-card__dishes-block">
                    <span className="gb-brand-card__dishes-label">Signature Specialties</span>
                    <div className="gb-brand-card__dishes-tags">
                      {dishes.map((dish) => (
                        <span key={dish.id} className="gb-brand-card__dish-tag">
                          <span className="gb-brand-card__bullet">•</span>
                          {dish.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* "Why We Picked Them" Editorial Blockquote */}
                {brand.whyWePicked && (
                  <div className="gb-brand-card__why-block">
                    <strong className="gb-brand-card__why-label">Why we picked them:</strong>
                    <p className="gb-brand-card__why-text">{brand.whyWePicked}</p>
                  </div>
                )}

                {/* Card Action Link */}
                <div className="gb-brand-card__footer">
                  <Link
                    to={`/menu-builder?brand=${brand.id}`}
                    className="gb-brand-card__cta"
                  >
                    <span>BUILD MENU WITH {brand.name.toUpperCase()}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
