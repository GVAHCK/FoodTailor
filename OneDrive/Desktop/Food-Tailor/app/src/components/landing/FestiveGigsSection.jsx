import React from 'react';
import { motion } from 'framer-motion';
import restaurantNight from '../../assets/restaurant-night.jpg';

export default function FestiveGigsSection() {
  return (
    <section className="ed-gigs" id="festive-gigs">
      <div className="ed-gigs__bg">
        <img
          src={restaurantNight}
          alt="Festive celebration gathering with ambient lighting and music"
        />
        <div className="ed-gigs__overlay" />
      </div>

      <div className="container ed-gigs__container">
        {/* Stylized Rock & Roll / Festive Banner */}
        <motion.div
          className="ed-gigs__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="ed-gigs__stamp">
            <span className="ed-gigs__stamp-title">FEAST &amp; CELEBRATE</span>
            <span className="ed-gigs__stamp-sub">LIVE KITCHENS</span>
          </div>

          <p className="ed-gigs__script">
            Gigs every friday
          </p>
        </motion.div>
      </div>
    </section>
  );
}
