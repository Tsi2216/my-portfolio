import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CATS = [
  {
    label: 'Frontend',
    color: '#00E5FF',
    skills: [
      { name: 'React', pct: 85 },
      { name: 'TypeScript', pct: 78 },
      { name: 'JavaScript', pct: 88 },
      { name: 'Tailwind CSS', pct: 90 },
      { name: 'HTML5 / CSS3', pct: 92 },
      { name: 'Next.js', pct: 70 },
    ],
  },
  {
    label: 'Backend',
    color: '#60a5fa',
    skills: [
      { name: 'Node.js', pct: 80 },
      { name: 'Express.js', pct: 78 },
      { name: 'Python', pct: 82 },
      { name: 'Django', pct: 75 },
      { name: 'REST APIs', pct: 85 },
      { name: 'Authentication', pct: 80 },
    ],
  },
  {
    label: 'Database',
    color: '#34d399',
    skills: [
      { name: 'SQL', pct: 80 },
      { name: 'PostgreSQL', pct: 75 },
      { name: 'MongoDB', pct: 76 },
      { name: 'Supabase', pct: 82 },
      { name: 'Firebase', pct: 68 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#f472b6',
    skills: [
      { name: 'Git / GitHub', pct: 86 },
      { name: 'Postman', pct: 85 },
      { name: 'Vercel / Netlify', pct: 83 },
      { name: 'Figma', pct: 65 },
    ],
  },
];

function Bar({
  name,
  pct,
  color,
  delay,
}: {
  name: string;
  pct: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="mb-[18px]">
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-gray-600 text-xs">{pct}%</span>
      </div>

      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}90, ${color})`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{
            duration: 1.1,
            delay,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="section-pad bg-[#080808] relative overflow-hidden"
    >
      <div className="orb w-72 h-72 -left-20 top-1/3 bg-[#00E5FF]/[0.03]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What I Know
          </p>

          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {CATS.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.55,
                delay: ci * 0.08,
              }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.color }}
                />
                <span className="font-display font-semibold text-white text-sm">
                  {cat.label}
                </span>
              </div>

              {cat.skills.map((s, si) => (
                <Bar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  color={cat.color}
                  delay={ci * 0.08 + si * 0.07}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
              }
