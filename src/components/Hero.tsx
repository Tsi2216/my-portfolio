import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import ParticleField from './ParticleField';
import { useTypingEffect } from '../hooks/useTypingEffect';

const TECH = ['React', 'TypeScript', 'Node.js', 'Supabase', 'Next.js', 'MongoDB', 'Tailwind', 'PostgreSQL'];

export default function Hero() {
  const typed = useTypingEffect([
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
  ]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      <ParticleField />

      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] top-1/4 -left-40 bg-[#00E5FF]/[0.04]" />
      <div className="orb w-96 h-96 bottom-1/4 -right-32 bg-blue-600/[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00E5FF]/20 text-[#00E5FF] text-xs mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              Open to new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-5"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Tsion</span>
              <br />
              <span className="text-white">Shimelis</span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.44 }}
              className="h-9 flex items-center justify-center lg:justify-start mb-5"
            >
              <span className="text-xl md:text-2xl text-gray-400 font-light tracking-tight">
                {typed}
                <span className="inline-block w-[2px] h-6 bg-[#00E5FF] ml-[2px] align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Building modern, scalable, and user-focused web applications with
              clean code and exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-9"
            >
              <button
                onClick={() => go('projects')}
                className="px-6 py-3 rounded-xl bg-[#00E5FF] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.03] transition-all duration-300"
              >
                View Projects
              </button>
              <button
                onClick={() => go('contact')}
                className="px-6 py-3 rounded-xl glass border border-white/15 text-white text-sm hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300"
              >
                Contact Me
              </button>
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className="px-5 py-3 rounded-xl glass border border-white/15 text-sm text-gray-300 hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 flex items-center gap-2"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Tsi2216', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/tsionshimelis/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:tsionshimelis3@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00E5FF] hover:border-[#00E5FF]/35 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Profile Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative flex-shrink-0 w-64 h-64 md:w-72 md:h-72"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#00E5FF]/10 blur-3xl animate-glow-pulse" />

            {/* Outer orbit */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-[#00E5FF]/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            />

            {/* Spinning dashes */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#00E5FF]/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* Avatar */}
            <div className="relative w-full h-full rounded-full border-2 border-[#00E5FF]/30 shadow-[0_0_50px_rgba(0,229,255,0.15)] overflow-hidden">
              <img
                src="/image.png"
                alt="Tsion Shimelis"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay to blend with theme */}
              <div className="absolute inset-0 rounded-full ring-2 ring-[#00E5FF]/20 pointer-events-none" />
            </div>

            {/* Floating tech badges */}
            {TECH.map((badge, i) => {
              const angle = (i / TECH.length) * Math.PI * 2 - Math.PI / 2;
              const r = 168;
              return (
                <motion.span
                  key={badge}
                  className="absolute glass border border-white/10 px-2.5 py-1 rounded-lg text-[11px] text-gray-300 font-medium whitespace-nowrap"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * r}px)`,
                    top: `calc(50% + ${Math.sin(angle) * r}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ y: [0, i % 2 === 0 ? -7 : 7, 0] }}
                  transition={{ duration: 3 + (i % 4) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {badge}
                </motion.span>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="text-gray-700 text-[10px] tracking-widest uppercase">scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={15} className="text-[#00E5FF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
