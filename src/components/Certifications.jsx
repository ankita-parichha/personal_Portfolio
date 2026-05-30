import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'React Development Certificate',
    issuer: 'HackerRank / Coursera',
    date: 'Dec 2025',
    id: 'REC-REACT-904',
    modules: ['State Management', 'React Hooks', 'Routing & APIs', 'Performance Optimization'],
    color: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    title: 'Full-Stack Web Engineering',
    issuer: 'Udemy Academic Program',
    date: 'Oct 2025',
    id: 'FSD-FULL-802',
    modules: ['Node.js & Express.js', 'REST API Architecture', 'Database Systems (NoSQL/SQL)', 'Authentication & Security'],
    color: 'from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Modern Software Principles',
    issuer: 'freeCodeCamp Core Curriculum',
    date: 'Jul 2025',
    id: 'FCC-SWE-221',
    modules: ['Data Structures', 'Git Version Control', 'OOP Paradigms', 'Clean Code Best Practices'],
    color: 'from-indigo-500/10 to-blue-500/10'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4 overflow-hidden">
      {/* Glow Blur */}
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            Technical <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            Verified course accomplishments and specialized credentials acquired through modern learning platforms.
          </p>
        </motion.div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flip-card h-72 w-full cursor-pointer"
            >
              <div className="flip-card-inner">
                {/* CARD FRONT */}
                <div className={`flip-card-front glass-panel p-6 flex flex-col justify-between items-center text-center border-white/5 bg-gradient-to-tr ${cert.color}`}>
                  <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-lg">
                    <Award className="w-10 h-10 text-purple-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white leading-snug px-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-semibold tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="flip-card-back glass-panel p-6 flex flex-col justify-between border-purple-500/20 bg-[#0e0a25]/90">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center space-x-1.5 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                        <span>Verified Credential</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">{cert.id}</span>
                    </div>

                    {/* Skill List */}
                    <div className="space-y-2">
                      <p className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                        Key Modules:
                      </p>
                      <ul className="text-left space-y-1.5">
                        {cert.modules.map((mod, mIdx) => (
                          <li key={mIdx} className="text-xs text-gray-300 flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="font-sans">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Validate link button */}
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/12 border border-white/5 hover:border-purple-500/30 text-purple-200 transition-all flex items-center justify-center space-x-1.5"
                    onClick={(e) => e.stopPropagation()} // Prevents flipping when clicking the link
                  >
                    <span>Inspect Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
