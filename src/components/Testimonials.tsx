import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTI = [
  {
    name: 'Dawit Bekele',
    role: 'Product Manager, TechBridge Solutions',
    initials: 'DB',
    color: '#00E5FF',
    stars: 5,
    text: 'Tsion delivered an exceptional marketplace platform that exceeded our expectations. The code quality, attention to detail, and user experience she created was truly impressive for a junior developer. I would highly recommend her for any web development project.',
  },
  {
    name: 'Sara Haile',
    role: 'Startup Founder, EthioShop',
    initials: 'SH',
    color: '#60a5fa',
    stars: 5,
    text: 'Working with Tsion on our e-commerce platform was fantastic. She understood our vision immediately, asked the right questions, and delivered a polished, scalable product on time. Her TypeScript and React expertise are genuinely top-notch.',
  },
  {
    name: 'Michael Tadesse',
    role: 'Senior Developer, CodeCraft Africa',
    initials: 'MT',
    color: '#34d399',
    stars: 5,
    text: 'I mentored Tsion through several projects and was consistently amazed by her rapid growth and dedication. She writes clean, well-structured code and has a natural ability to understand complex systems quickly. She has a very bright future ahead.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="section-pad bg-[#080808] relative overflow-hidden">
      <div className="orb w-72 h-72 right-0 top-1/2 -translate-y-1/2 bg-blue-600/[0.03]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">What People Say</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTI.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass-card p-6 flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <Quote size={26} style={{ color: t.color, opacity: 0.35 }} className="mb-4 flex-shrink-0" />
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gray-700 text-xs leading-snug">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 flex-shrink-0">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={11} style={{ color: t.color }} className="fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
