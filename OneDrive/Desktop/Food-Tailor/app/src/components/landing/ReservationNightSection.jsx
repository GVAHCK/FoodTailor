import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import restaurantNight from '../../assets/restaurant-night.jpg';

export default function ReservationNightSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '20-50 Guests',
    date: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setIsSuccess(true);
  };

  const handleProceedToBuilder = () => {
    navigate('/menu-builder', {
      state: {
        guestCount: formData.guests,
        date: formData.date,
        name: formData.name,
      },
    });
  };

  return (
    <section className="ed-res" id="reservation">
      {/* Warm Glowing Dining Hall Background */}
      <div className="ed-res__bg">
        <img
          src={restaurantNight}
          alt="Warm atmospheric dining hall with glowing candles and rustic tables"
        />
        <div className="ed-res__overlay" />
      </div>

      <div className="container ed-res__container">
        {/* Hand-lettered Cursive Script Header */}
        <motion.h2
          className="ed-res__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Plan your celebration
        </motion.h2>

        <p className="ed-res__subtitle">
          Tell us about your occasion and receive a custom menu proposal featuring your favorite food brands
        </p>

        {/* Translucent Reservation Box with 4-column inline grid on desktop */}
        <motion.form
          className="ed-res__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="ed-res__form-grid">
            <div className="ed-res__input-wrap">
              <label htmlFor="res-name">YOUR NAME</label>
              <input
                id="res-name"
                type="text"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="ed-res__input"
              />
            </div>

            <div className="ed-res__input-wrap">
              <label htmlFor="res-phone">PHONE NUMBER</label>
              <input
                id="res-phone"
                type="tel"
                placeholder="Enter phone number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="ed-res__input"
              />
            </div>

            <div className="ed-res__input-wrap">
              <label htmlFor="res-guests">GUESTS</label>
              <select
                id="res-guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="ed-res__input ed-res__select"
              >
                <option value="10-25 Guests">10-25 Guests</option>
                <option value="25-50 Guests">25-50 Guests</option>
                <option value="50-100 Guests">50-100 Guests</option>
                <option value="100-250 Guests">100-250 Guests</option>
                <option value="250+ Guests">250+ Guests (Grand Feast)</option>
              </select>
            </div>

            <div className="ed-res__input-wrap">
              <label htmlFor="res-date">EVENT DATE</label>
              <input
                id="res-date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="ed-res__input"
              />
            </div>
          </div>

          <div className="ed-res__action-wrap">
            <button type="submit" className="ed-btn ed-btn--crimson ed-res__btn">
              BOOK NOW &amp; CUSTOMIZE
            </button>
          </div>
        </motion.form>
      </div>

      {/* Interactive Reservation Confirmation Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="ed-res-modal-overlay" onClick={() => setIsSuccess(false)}>
            <motion.div
              className="ed-res-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="ed-res-modal__close"
                onClick={() => setIsSuccess(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="ed-res-modal__icon">
                <CheckCircle2 size={48} color="#c41e3a" />
              </div>

              <h3 className="ed-res-modal__title">Reservation Request Received</h3>
              <p className="ed-res-modal__text">
                Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>! Our culinary concierge will call you at <strong style={{ color: '#FFFFFF' }}>{formData.phone}</strong> within 15 minutes to curate your multi-brand banquet for {formData.guests}.
              </p>

              <div className="ed-res-modal__actions">
                <button
                  type="button"
                  className="ed-btn ed-btn--crimson"
                  onClick={handleProceedToBuilder}
                >
                  CUSTOMIZE DISHES NOW
                </button>
                <button
                  type="button"
                  className="ed-btn ed-btn--outline"
                  onClick={() => setIsSuccess(false)}
                >
                  CONTINUE BROWSING
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
