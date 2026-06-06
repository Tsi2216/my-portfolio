import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Lightbulb, Users, BookOpen } from 'lucide-react';

const traits = [
  { icon: Code2,     title: 'Clean Code',          desc: 'Writing readable, maintainable, scalable code following industry best practices.' },
  { icon: Lightbulb, title: 'Problem Solver',       desc: 'Tackling complex challenges with analytical thinking and creative solutions.' },
  { icon: Users,     title: 'Team Collaborator',    desc: 'Working effectively with designers, developers, and stakeholders to deliver results.' },
  { icon: BookOpen,  title: 'Continuous Learner',   desc: 'Staying current with modern technologies and constantly expanding skill sets.' },
];

function Reveal({ children, delay = 0, x = 0 }: { children: React.ReactNode; delay?: number; x?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="orb w-80 h-80 right-0 top-1/2 -translate-y-1/2 bg-blue-600/[0.035]" />

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Who I Am</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate{' '}
                <span className="text-[#00E5FF] font-semibold">Full Stack Developer</span>{' '}
                focused on building modern web applications with clean code, excellent user experiences,
                and scalable architecture.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 leading-relaxed">
                Although I'm a junior developer, I have successfully completed more than{' '}
                <span className="text-white font-medium">10 real-world projects</span>{' '}
                — from business platforms and service marketplaces to analytics dashboards and
                e-commerce systems. I enjoy solving complex problems and continuously learning
                modern technologies.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-gray-500 leading-relaxed">
                Every project is an opportunity to grow and deliver exceptional value. I bring
                creativity, precision, and a genuine passion for building products that make
                a difference.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS', 'Next.js'].map(t => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg glass border border-[#00E5FF]/20 text-[#00E5FF] text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.1} x={i % 2 === 0 ? -16 : 16}>
                <div className="glass-card p-5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-4">
                    <t.icon size={19} className="text-[#00E5FF]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{t.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
