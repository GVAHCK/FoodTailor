import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { brands as seedBrands } from '../../data/seedData';
import { fetchBrands } from '../../api/client';

// Map brand IDs to food images for circular thumbnails
import biryaniImg from '../../assets/biryani-closeup.jpg';
import kebabsImg from '../../assets/kebabs.jpg';
import haleemImg from '../../assets/haleem.jpg';
import heroImg from '../../assets/hero-dark.jpg';
import feastImg from '../../assets/feast-table.jpg';
import chefImg from '../../assets/chef-kitchen.jpg';

const brandImages = {
  1: biryaniImg,   // Paradise
  2: kebabsImg,    // Bawarchi
  3: heroImg,      // Cafe Bahar
  4: haleemImg,    // Hotel Shadab
  5: haleemImg,    // Shah Ghouse
  6: biryaniImg,   // Pista House
  7: feastImg,     // Jewel of Nizam
  8: kebabsImg,    // Meridian
  9: chefImg,      // Kritunga
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SignatureKitchens() {
  const [brands, setBrands] = useState(seedBrands);

  useEffect(() => {
    fetchBrands().then(setBrands).catch(() => {});
  }, []);

  const displayBrands = brands.slice(0, 6);

  return (
    <section className="l-kitchens" id="signature-kitchens">
      <div className="container">
        <motion.div
          className="l-kitchens__header"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="l-kitchens__label">Signature Kitchens</p>
          <h2 className="l-kitchens__title">
            Hyderabad's Most <em>Loved</em> Brands
          </h2>
          <p className="l-kitchens__subtitle">
            We partner with the city's finest — each brand brings decades of
            culinary mastery to your event.
          </p>
        </motion.div>

        <div className="l-kitchens__grid">
          {displayBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              className="l-kitchen-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="l-kitchen-card__image">
                <img
                  src={brandImages[brand.id] || biryaniImg}
                  alt={`${brand.name} signature dish`}
                />
              </div>
              <h3 className="l-kitchen-card__name">{brand.name}</h3>
              <p className="l-kitchen-card__cuisine">{brand.cuisine}</p>
              <p className="l-kitchen-card__tagline">{brand.tagline}</p>
              {brand.established && (
                <p className="l-kitchen-card__year">Est. {brand.established}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
