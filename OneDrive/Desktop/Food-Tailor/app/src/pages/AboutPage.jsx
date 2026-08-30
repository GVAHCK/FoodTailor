import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Utensils, Clock, Award, ShieldCheck } from 'lucide-react';
import chefKitchen from '../assets/chef-kitchen.jpg';
import restaurantNight from '../assets/restaurant-night.jpg';
import CTABand from '../components/CTABand';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  const philosophyPillars = [
    {
      icon: <Utensils size={28} className="gb-about-pillar__icon" />,
      title: 'Curated Iconic Brands',
      description: 'We partner directly with Hyderabad\'s legendary culinary icons — Cafe Niloufer, Hotel Shadab, Almond House, Maharaja Chat, and more — bringing heritage flavors together under one roof.',
    },
    {
      icon: <Clock size={28} className="gb-about-pillar__icon" />,
      title: 'Unified Timing & Delivery',
      description: 'Zero coordination hassle. We manage multi-kitchen synchronization and dispatch, ensuring every hot starter, dum handi, and artisanal dessert arrives fresh and perfectly on time.',
    },
    {
      icon: <Sparkles size={28} className="gb-about-pillar__icon" />,
      title: 'Bespoke Celebration Menus',
      description: 'From 25-guest rooftop soirees to 500-guest gala weddings, our AI and concierge match dishes precisely to your occasion, dietary needs, and flavor profile.',
    },
  ];

  return (
    <div className="gb-about-page">
      {/* 1. EDITORIAL PAGE HERO HEADER */}
      <section className="gb-about-hero">
        <div className="gb-about-hero__bg">
          <img src={restaurantNight} alt="Food Tailor ambient celebration atmosphere" />
          <div className="gb-about-hero__overlay" />
        </div>

        <div className="container gb-about-hero__container">
          <motion.p
            className="gb-about-hero__script"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Story &amp; Philosophy
          </motion.p>

          <motion.h1
            className="gb-about-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            CRAFTING UNFORGETTABLE FEASTS
          </motion.h1>

          {/* Decorative Divider Accent Line */}
          <div className="gb-about-hero__divider">
            <span className="gb-about-hero__divider-line" />
            <span className="gb-about-hero__divider-diamond">♦</span>
            <span className="gb-about-hero__divider-line" />
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN ASYMMETRICAL STORY SPREAD */}
      <section className="gb-about-story">
        <div className="container gb-about-story__container">
          <div className="gb-about-story__grid">
            {/* Left Column: Story & Vision Typography */}
            <motion.div
              className="gb-about-story__content"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className="gb-about-story__label">OUR STORY</span>
              <h2 className="gb-about-story__heading">
                Your favorite brands. <span className="gb-about-story__heading-accent">Tailored for your special moments.</span>
              </h2>

              <div className="gb-about-story__body">
                <p className="gb-about-story__p gb-about-story__p--lead">
                  Food should be remembered. At Food Tailor, we believe the best celebrations are built around food people already love.
                </p>

                <p className="gb-about-story__p">
                  When planning a birthday, wedding, or corporate gathering, traditional options force you to choose between one single restaurant or generic catering with no brand identity.
                </p>

                <p className="gb-about-story__p">
                  <strong className="gb-about-story__strong">Food Tailor is the third option.</strong> We bring authentic dishes and beloved food brands together — Cafe Niloufer's iconic Irani Chai, Hotel Shadab's legendary dum biryani, Maharaja Chat, Samosa King, and Almond House sweets — delivered fresh and coordinated into one unforgettable spread.
                </p>

                <p className="gb-about-story__p">
                  You choose your favorite brands and dishes. We handle the curation, timing, and delivery so your feast arrives hot and ready for your guests to enjoy.
                </p>

                {/* 3. ELEGANT EDITORIAL BLOCKQUOTE CALLOUT */}
                <div className="gb-about-quote">
                  <span className="gb-about-quote__mark">“</span>
                  <p className="gb-about-quote__text">
                    From your favorite brands to your special moments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Collage & Culinary Accent */}
            <motion.div
              className="gb-about-story__visual"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="gb-about-visual-frame">
                <img
                  src={chefKitchen}
                  alt="Master chef crafting dum biryani feast"
                  className="gb-about-visual-img"
                />
                <div className="gb-about-visual-overlay" />
                
                {/* Circular Gold / Crimson Crest Stamp Badge */}
                <div className="gb-about-crest">
                  <div className="gb-about-crest__inner">
                    <span className="gb-about-crest__year">EST. 2024</span>
                    <span className="gb-about-crest__text">HYDERABAD</span>
                    <span className="gb-about-crest__tag">CULINARY EXCELLENCE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. 3-PILLAR PHILOSOPHY / VALUE CARDS */}
      <section className="gb-about-pillars">
        <div className="container">
          <div className="gb-about-pillars__header">
            <span className="gb-about-pillars__label">THE FOOD TAILOR STANDARD</span>
            <h2 className="gb-about-pillars__title">Our Three Guiding Principles</h2>
          </div>

          <motion.div
            className="gb-about-pillars__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {philosophyPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="gb-about-pillar-card"
                variants={fadeIn}
              >
                <div className="gb-about-pillar-card__icon-box">
                  {pillar.icon}
                </div>
                <h3 className="gb-about-pillar-card__title">{pillar.title}</h3>
                <p className="gb-about-pillar-card__desc">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT & INQUIRIES SECTION */}
      <section className="gb-about-contact">
        <div className="container gb-about-contact__container">
          <motion.div
            className="gb-about-contact__card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="gb-about-contact__label">GET IN TOUCH</span>
            <h2 className="gb-about-contact__title">Connect with Food Tailor</h2>
            <p className="gb-about-contact__subtitle">
              Whether you are planning a milestone celebration or represent a signature kitchen, our team is at your service.
            </p>

            <div className="gb-about-contact__grid">
              <div className="gb-about-contact__item">
                <div className="gb-about-contact__icon-box">
                  <Mail size={22} className="gb-about-contact__icon" />
                </div>
                <div className="gb-about-contact__info">
                  <h4 className="gb-about-contact__role">Event Inquiries &amp; Menu Planning</h4>
                  <a href="mailto:contact@foodtailor.in" className="gb-about-contact__link">
                    contact@foodtailor.in
                  </a>
                </div>
              </div>

              <div className="gb-about-contact__item">
                <div className="gb-about-contact__icon-box">
                  <Mail size={22} className="gb-about-contact__icon" />
                </div>
                <div className="gb-about-contact__info">
                  <h4 className="gb-about-contact__role">Founder &amp; Brand Partnerships</h4>
                  <a href="mailto:founder@foodtailor.in" className="gb-about-contact__link">
                    founder@foodtailor.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <CTABand />
    </div>
  );
}
