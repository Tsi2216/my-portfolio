import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl gradient-text"
        >
          Tsion<span className="text-white">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <button
              key={n}
              onClick={() => go(n)}
              className="relative text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              {n}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00E5FF] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => go('Contact')}
            className="px-4 py-2 rounded-lg border border-[#00E5FF]/40 text-[#00E5FF] text-sm hover:bg-[#00E5FF]/10 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        <button className="md:hidden text-gray-300" onClick={() => setOpen(v => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {NAV.map(n => (
                <button key={n} onClick={() => go(n)} className="text-left text-gray-300 hover:text-[#00E5FF] transition-colors text-sm">
                  {n}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
