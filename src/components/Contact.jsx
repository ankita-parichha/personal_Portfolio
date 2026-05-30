import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Blast confetti
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, animate a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute left-1/3 bottom-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 leading-relaxed">
            Have a question, project proposal, or just want to say hello? Drop me a message, and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl border-white/5 space-y-4">
              <h3 className="text-xl font-bold text-white tracking-wide">
                Contact Information
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Feel free to reach out via email or connect with me on professional networking channels.
              </p>
            </div>

            {/* Email Contact Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitaparichha123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"

              className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/5 flex items-center space-x-4 group cursor-pointer"
            >
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">Email Me</p>
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  ankitaparichha123@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn Contact Card */}
            <a
              href="https://www.linkedin.com/in/ankita-parichha-1012a9397?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/5 flex items-center space-x-4 group cursor-pointer"
            >
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">LinkedIn</p>
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  https://www.linkedin.com/in/ankita-parichha-1012a9397?utm_source=share_via&utm_content=profile&utm_medium=member_android
                </p>
              </div>
            </a>

            {/* GitHub Contact Card */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="glass-panel glass-panel-hover p-5 rounded-2xl border-white/5 flex items-center space-x-4 group cursor-pointer"
            >
              <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20 text-pink-400 group-hover:bg-pink-500/20 group-hover:text-pink-300 transition-all">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">GitHub</p>
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  github.com/ankitaparichha
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right Side: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border-white/5 min-h-[420px] flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Name input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-widest font-mono">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:bg-white/10 transition-colors font-sans ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
                          }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center space-x-1 font-sans">
                          <AlertTriangle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-widest font-mono">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:bg-white/10 transition-colors font-sans ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
                          }`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center space-x-1 font-sans">
                          <AlertTriangle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-widest font-mono">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:bg-white/10 transition-colors resize-none font-sans ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
                          }`}
                        placeholder="Say hello..."
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center space-x-1 font-sans">
                          <AlertTriangle className="w-3 h-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/15 hover:shadow-purple-500/35 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.3)] animate-bounce" />

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white font-sans">
                        Message Sent!
                      </h4>
                      <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-sans">
                        Thank you for reaching out. Your message has been received successfully, and I will get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold glass-button text-gray-200 hover:text-white cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
