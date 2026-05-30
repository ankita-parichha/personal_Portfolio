import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Space Responsive Landing Page',
    description: 'An interactive, responsive space landing page presenting celestial bodies, exploration schedules, and rocket engineering layouts. Built with modular designs and heavy hover animations.',
    image: '/project2.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Aesthetics'],
    github: ' https://ankita-parichha.github.io/space-theme-landing-page/',
    live: ' https://ankita-parichha.github.io/space-theme-landing-page/'
  },
  {
    title: 'Cyber Cafe Management System',
    description: 'A full-stack operations management suite for cyber cafes. Allows terminal session monitoring, billing computations, automated inventory, and customer account allocations.',
    image: '/project3.png',
    tags: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Chart.js'],


  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            A curation of development projects demonstrating end-to-end implementation from frontend layout systems to backend management logic.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col group border-white/5 relative hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative h-48 sm:h-52 overflow-hidden border-b border-white/5 bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400';
                  }}
                />

                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070512] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 text-[10px] font-semibold font-mono tracking-wider bg-white/5 border border-white/5 rounded-md text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-4 py-2 rounded-xl text-xs font-semibold glass-button text-gray-200 hover:text-white flex items-center justify-center space-x-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center space-x-1.5 shadow-md shadow-purple-500/10 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
