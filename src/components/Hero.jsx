import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

const roles = ['MCA Student', 'Software Developer', 'Web Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect logic
  useEffect(() => {
    let timer;
    const currentWord = roles[roleIdx];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Adding characters
      timer = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Switch states based on text length
    if (!isDeleting && displayText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
      // Brief pause before typing next word
      setTypingSpeed(300);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx, typingSpeed]);

  const triggerConfettiResume = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#f472b6'],
    });

    // Generate and download a professional mock resume file
    const resumeContent = `ANKITA PARICHHA
MCA Student | Aspiring Software Developer
Email: ankita.parichha@example.com
GitHub: github.com/ankitaparichha
LinkedIn: linkedin.com/in/ankitaparichha

SUMMARY:
MCA 2nd-year student with a passion for software engineering, web development, and problem-solving. Skilled in frontend (React, JavaScript, HTML/CSS) and backend (Node.js, Express.js) tech.

EDUCATION:
- Master of Computer Applications (MCA) | 2nd Year
- Bachelor of Computer Science

SKILLS:
- Languages: JavaScript, HTML, CSS, SQL
- Libraries/Frameworks: React, Node.js, Express.js
- Tools: Git, GitHub, VS Code

CERTIFICATIONS:
- React Development
- Full-Stack Web Engineering
- Modern Software Principles

Thank you for downloading my resume! Let's connect.`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ankita_Parichha_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92svh] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden px-4"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Side: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-sm font-medium tracking-wide">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-tight">
            Hello, I'm <br className="sm:hidden" />
            <span className="text-gradient">Ankita Parichha</span>
          </h1>

          {/* Typing Container */}
          <div className="h-10 sm:h-12 flex items-center">
            <p className="text-xl sm:text-2xl font-mono text-gray-300 font-medium">
              I am a <span className="text-blue-400 border-r-2 border-blue-400 pr-1 animate-cursor-blink">{displayText}</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
            I build elegant, responsive, and high-performance applications. Aspiring software developer combining academic foundations with modern frontend & backend technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => window.location.href = 'mailto:ankita.parichha@example.com'}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium glass-button text-gray-200 hover:text-white flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={triggerConfettiResume}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium glass-button border-dashed border-purple-500/30 hover:border-purple-500/60 text-purple-300 hover:text-purple-200 flex items-center justify-center space-x-2 cursor-pointer"
              title="Click for a surprise!"
            >
              <Download className="public/Ankita Parichha resume 1.1.pdf" />
              <span>Resume</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group">
            {/* Spinning Neon Rings */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-spin" style={{ animationDuration: '10s' }} />

            {/* Main Image Mask Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#070512] bg-[#0c0a20] flex items-center justify-center">
              <img
                src="/profile 2.png"
                alt="Ankita Parichha Avatar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce Down Indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 p-2 rounded-full glass-button text-gray-400 hover:text-white z-10 cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
