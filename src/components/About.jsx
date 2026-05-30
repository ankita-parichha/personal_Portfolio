import { motion } from 'framer-motion';
import { BookOpen, Cpu, Heart, Code2 } from 'lucide-react';

const cards = [
  {
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    title: "MCA 2nd Year Student",
    description: "Currently pursuing Master of Computer Applications, acquiring deep foundations in software development methodologies, systems, and algorithms."
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Web Development",
    description: "Strongly focused on modern web architectures. Building responsive, client-side, and server-side components using React, Node.js, and Express."
  },
  {
    icon: <Cpu className="w-6 h-6 text-pink-400" />,
    title: "AI & Innovation",
    description: "Highly interested in integrating artificial intelligence into software apps, exploring AI models, prompt engineering, and smart tools."
  },
  {
    icon: <Heart className="w-6 h-6 text-red-400" />,
    title: "Problem Solving",
    description: "Driven by code challenges, optimization, and logical reasoning. Designing clean, maintainable systems is my ultimate coding standard."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Glow Blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            I am a dedicated student and aspiring engineer. My goal is to craft high-quality software that addresses real-world issues while continuously expanding my technical skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-start space-x-5"
            >
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 shadow-inner">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
