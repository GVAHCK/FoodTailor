import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import MenuBuilderPage from './pages/MenuBuilderPage';
import BrandsPage from './pages/BrandsPage';
import AboutPage from './pages/AboutPage';
import FoodTailorVideoPreloader from './components/FoodTailorVideoPreloader';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Shared layout for non-landing pages: Navbar + content + Footer */
function AppLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <FoodTailorVideoPreloader onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <Routes>
        {/* Landing page — has its own nav & footer */}
        <Route path="/" element={<HomePage />} />

        {/* All other pages share the app Navbar + Footer */}
        <Route element={<AppLayout />}>
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/menu-builder" element={<MenuBuilderPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
