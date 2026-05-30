import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    duration: '2025 - 2027 (2nd Year)',
    institution: 'Regional College of Management,bhubanaswar'
    description: 'Focusing on advanced computing disciplines, architectural configurations, database architectures, and engineering principles.',
    coursework: ['Data Structures & Algorithms', 'Database Systems (SQL)', 'Web Programming (React/Node)', 'Software Engineering', 'AI & Machine Learning Concepts']
  },
  {
    degree: 'Bachelor of Science in Computer Science (B.Sc. CS)',
    duration: '2022- 2025',
    institution: 'Vikram Dev Autonumous College,jeypore',
    description: 'Established fundamental understandings in mathematical systems, procedural language paradigms, and computing networks.',
    coursework: ['Object-Oriented Programming (Java/C++)', 'Operating Systems', 'Computer Networks', 'Discrete Mathematics', 'Web Tech Foundations']
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 overflow-hidden bg-white/2">
      {/* Glow Blur */}
      <div className="absolute left-1/4 top-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            My academic timeline showcasing technical coursework and structured computing foundations.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12 ml-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#070512] border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              </div>

              {/* Glass Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {edu.degree}
                  </h3>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-purple-300 text-xs font-mono shrink-0 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-blue-400 tracking-wide font-sans">
                  {edu.institution}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-gray-300 uppercase tracking-widest font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Coursework</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs bg-[#0b071c] border border-white/5 rounded-lg text-purple-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
