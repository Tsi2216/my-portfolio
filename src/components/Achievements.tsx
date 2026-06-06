import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderOpen, Monitor, Zap, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: FolderOpen,  label: 'Projects Completed',    val: 10,  sfx: '+',     color: '#00E5FF' },
  { icon: Monitor,     label: 'Responsive Designs',     val: 100, sfx: '%',     color: '#60a5fa' },
  { icon: Zap,         label: 'Technologies Mastered',  val: 5,   sfx: '+',     color: '#34d399' },
  { icon: TrendingUp,  label: 'Days of Coding / Year',  val: 300, sfx: '+',     color: '#f472b6' },
];

function Counter({ val, sfx, color }: { val: number; sfx: string; color: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * val));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, val]);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl md:text-6xl" style={{ color }}>
      {n}<span className="text-2xl md:text-3xl ml-0.5">{sfx}</span>
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />
      <div className="orb w-[600px] h-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00E5FF]/[0.025]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">By The Numbers</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card p-8 text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `${s.color}18` }}
              >
                <s.icon size={23} style={{ color: s.color }} />
              </div>
              <Counter val={s.val} sfx={s.sfx} color={s.color} />
              <p className="text-gray-600 text-xs mt-3 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
