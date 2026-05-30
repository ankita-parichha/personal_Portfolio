import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
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
    <footer className="relative border-t border-white/5 py-12 px-4 overflow-hidden bg-[#05030f]/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        {/* Name Logo */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-lg font-bold text-white font-sans tracking-tight hover:text-purple-300 transition-colors cursor-pointer"
          >
            Ankita Parichha
          </a>
          <p className="text-xs text-gray-500 font-mono">
            MCA Student & Aspiring Software Developer
          </p>
        </div>

        {/* Center Copyright */}
        <div className="text-center text-xs text-gray-500 font-sans">
          Copyright &copy; {currentYear} Ankita Parichha. All rights reserved.
        </div>

        {/* Right Socials */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:ankita.parichha@example.com"
            className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-500/20 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-500/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-pink-400 hover:border-pink-500/20 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
