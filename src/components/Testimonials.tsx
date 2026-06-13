import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTI = [
  {
    name: 'Dawit Bekele',
    role: 'Product Manager',
    initials: 'DB',
    color: '#00E5FF',
    stars: 5,
    text: 'Exceptional work on our marketplace platform. Clean code, great UX, and delivered on time.',
  },
  {
    name: 'Sara Haile',
    role: 'Startup Founder',
    initials: 'SH',
    color: '#60a5fa',
    stars: 5,
    text: 'Professional, detail-oriented, and highly skilled with React and TypeScript.',
  },
  {
    name: 'Michael Tadesse',
    role: 'Senior Developer',
    initials: 'MT',
    color: '#34d399',
    stars: 5,
    text: 'Fast learner with excellent problem-solving skills and strong coding practices.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTI.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTI.length) % TESTI.length);
  };

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
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What People Say
          </p>

          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>

          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="glass-card p-8"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.35 }}
            >
              <Quote
                size={30}
                style={{
                  color: TESTI[current].color,
                  opacity: 0.35,
                }}
                className="mb-5"
              />

              <p className="text-gray-400 leading-relaxed mb-8 text-center">
                "{TESTI[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                    style={{
                      background: TESTI[current].color,
                    }}
                  >
                    {TESTI[current].initials}
                  </div>

                  <div>
                    <h4 className="text-white font-medium">
                      {TESTI[current].name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {TESTI[current].role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({
                    length: TESTI[current].stars,
                  }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      style={{
                        color: TESTI[current].color,
                      }}
                      className="fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {TESTI.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'w-8 bg-[#00E5FF]'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
                }
