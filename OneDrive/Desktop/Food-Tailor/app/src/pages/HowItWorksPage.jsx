import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, UtensilsCrossed, Clock, Truck, PartyPopper } from 'lucide-react';
import feastTable from '../assets/feast-table.jpg';
import CTABand from '../components/CTABand';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  {
    number: '01',
    icon: <UtensilsCrossed size={24} className="gb-step__icon" />,
    title: 'Choose Your Brands & Occasion',
    description: 'Tell us about your celebration — birthday, wedding, family gathering, or corporate event. Explore authentic dishes and signature favorites from renowned food brands.',
    detail: 'From intimate family functions to grand celebrations.',
  },
  {
    number: '02',
    icon: <Sparkles size={24} className="gb-step__icon" />,
    title: 'Tailor Your Menu',
    description: 'Build a curated menu around your guests, tastes, and preferences. Combine appetizers from Samosa King, biryani from Hotel Shadab, chai from Cafe Niloufer, and mithai from Almond House in one menu.',
    detail: 'Complete flexibility. Real authentic brands you already love.',
  },
  {
    number: '03',
    icon: <Truck size={24} className="gb-step__icon" />,
    title: 'We Bring It To You',
    description: 'Food Tailor coordinates directly with each brand\'s kitchen. Every dish is prepared fresh and delivered together to your venue on schedule.',
    detail: 'One seamless order. Multiple iconic brands. Zero coordination hassle.',
  },
  {
    number: '04',
    icon: <PartyPopper size={24} className="gb-step__icon" />,
    title: 'Celebrate Together',
    description: 'Enjoy an unforgettable feast built entirely around the signature flavors and beloved food brands your guests know and trust.',
    detail: 'Your favorite brands, thoughtfully brought together for your event.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="gb-hiw-page">
      {/* 1. EDITORIAL PAGE HERO HEADER */}
      <section className="gb-hiw-hero">
        <div className="gb-hiw-hero__bg">
          <img src={feastTable} alt="Food Tailor celebration feast banquet spread" />
          <div className="gb-hiw-hero__overlay" />
        </div>

        <div className="container gb-hiw-hero__container">
          <motion.p
            className="gb-hiw-hero__script"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Seamless Culinary Coordination
          </motion.p>

          <motion.h1
            className="gb-hiw-hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            HOW FOOD TAILÖR WORKS
          </motion.h1>

          {/* Decorative Gold Divider Accent Line */}
          <div className="gb-hiw-hero__divider">
            <span className="gb-hiw-hero__divider-line" />
            <span className="gb-hiw-hero__divider-diamond">♦</span>
            <span className="gb-hiw-hero__divider-line" />
          </div>

          <motion.p
            className="gb-hiw-hero__desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Four simple steps from "what should we serve?" to a perfectly coordinated multi-brand feast delivered fresh to your venue.
          </motion.p>
        </div>
      </section>

      {/* 2. LUXURY STEP CARDS TIMELINE */}
      <section className="gb-hiw-steps">
        <div className="container gb-hiw-steps__container">
          <div className="gb-hiw-timeline">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="gb-step-card"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Step Marker Badge */}
                <div className="gb-step-card__marker">
                  <span className="gb-step-card__number">{step.number}</span>
                  <div className="gb-step-card__icon-wrap">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="gb-step-card__content">
                  <h3 className="gb-step-card__title">{step.title}</h3>
                  <p className="gb-step-card__description">{step.description}</p>
                  <p className="gb-step-card__detail">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="gb-hiw-action"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link to="/menu-builder" className="gb-hiw-btn">
              <span>START BUILDING YOUR MENU</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. CTA BAND */}
      <CTABand />
    </div>
  );
}
