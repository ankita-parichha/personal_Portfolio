import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for progress and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Back To Top Visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Preloader */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* 2. Main Site Structure */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen text-gray-300 overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200"
        >
          {/* Scroll Progress Bar */}
          <div
            className="scroll-progress"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Floating Canvas Particles */}
          <ParticleBackground />

          {/* Navigation */}
          <Navbar />

          {/* Sections Stack */}
          <main className="relative z-10 w-full">
            {/* Hero Section */}
            <Hero />

            {/* Divider lines */}
            <div className="max-w-6xl mx-auto px-6"><div className="h-[1px] w-full bg-white/5" /></div>

            {/* About Section */}
            <About />

            {/* Divider lines */}
            <div className="max-w-6xl mx-auto px-6"><div className="h-[1px] w-full bg-white/5" /></div>

            {/* Skills Section */}
            <Skills />

            {/* Divider lines */}
            <div className="max-w-6xl mx-auto px-6"><div className="h-[1px] w-full bg-white/5" /></div>

            {/* Projects Section */}
            <Projects />

            {/* Divider lines */}
            <div className="max-w-6xl mx-auto px-6"><div className="h-[1px] w-full bg-white/5" /></div>

            {/* Education Section */}
            <Education />
          </main>

          {/* Footer */}
          <Footer />

          {/* 3. Back to Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full glass-panel border-white/10 hover:border-purple-500/40 text-purple-300 hover:text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
