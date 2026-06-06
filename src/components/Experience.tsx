import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ITEMS = [
  {
    role: 'Junior Full Stack Developer',
    org: 'Freelance & Self-Directed Projects',
    period: '2023 — Present',
    loc: 'Remote',
    desc: 'Worked on multiple real-world projects including business platforms, service marketplaces, analytics dashboards, e-commerce websites, and portfolio systems. Developed both frontend and backend solutions while building scalable, user-friendly applications.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Frontend Developer — Deep Training',
    org: 'Self-Directed Learning',
    period: '2022 — 2023',
    loc: 'Online',
    desc: 'Deepened expertise in modern frontend technologies — React, TypeScript, and Tailwind CSS. Built dozens of practice projects mastering component architecture, state management, API integration, and responsive design patterns.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'REST APIs'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="experience" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="orb w-64 h-64 right-1/4 bottom-0 bg-[#00E5FF]/[0.035]" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">My Journey</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#00E5FF]/50 via-[#00E5FF]/20 to-transparent" />

          <div className="space-y-8">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.role}
                className="relative pl-16"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Dot */}
                <div className="absolute left-[19px] top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,0.7)]" />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-white text-xl mb-1.5">{item.role}</h3>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} className="text-[#00E5FF]" /> {item.org}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-[#00E5FF]" /> {item.loc}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar size={11} /> {item.period}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs glass border border-white/8 text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
