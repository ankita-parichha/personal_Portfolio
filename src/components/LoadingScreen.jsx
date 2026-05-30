import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 500); // Small pause at 100%
          return 100;
        }
        // Rapid increment to feel snappy but smooth
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isDone) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600); // Let the Framer Motion animation finish
      return () => clearTimeout(timeout);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070512]"
        >
          {/* Neon Background Glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            {/* Spinning/pulsing Code brackets */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative flex items-center justify-center w-24 h-24 rounded-2xl glass-panel"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-t border-purple-500/40 border-r border-blue-500/20"
              />
              <span className="text-3xl font-extrabold text-gradient font-mono">
                {"{ AP }"}
              </span>
            </motion.div>

            {/* Title / Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-bold tracking-wider text-white font-sans"
            >
              Ankita Parichha
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-xs tracking-widest text-purple-200 mt-1 uppercase font-mono"
            >
              MCA Student | Dev Portfolio
            </motion.p>

            {/* Percentage Bar Container */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-8 border border-white/5 p-[1px]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Text loading status */}
            <motion.div className="flex items-center justify-between w-full mt-2 text-[10px] text-purple-200/50 font-mono">
              <span>INITIALIZING SYSTEM...</span>
              <span className="text-purple-300 font-bold">{progress}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
