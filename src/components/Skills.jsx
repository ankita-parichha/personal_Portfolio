import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 75 }
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden bg-white/2">
      {/* Decorative Glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            Here are the languages, frameworks, and developer tools that I use to construct digital applications and responsive experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between border-white/5 relative overflow-hidden group hover:border-purple-500/20 transition-colors"
            >
              {/* Corner Glow Overlay */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-gray-300 font-sans tracking-wide">
                          {skill.name}
                        </span>
                        <span className="text-xs text-purple-300 font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
