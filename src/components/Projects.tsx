import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Infinity Marketplace Platform',
    desc: 'A complete service marketplace connecting customers with service providers through secure authentication, booking, reviews, and admin management.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Modern online shopping platform with product management, payments, shopping cart, user accounts, and a full admin dashboard.',
    image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather forecasting application with dynamic visualizations, city search, 7-day forecast, and fully responsive design.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'API Integration'],
    featured: false,
  },
  {
    title: 'Business Management Dashboard',
    desc: 'Advanced analytics dashboard with interactive charts, reporting tools, team management, and real-time KPI tracking.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript'],
    featured: false,
  },
  {
    title: 'Professional Portfolio Website',
    desc: 'Personal branding website with modern UI, smooth animations, and fully responsive design for developer showcase.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind CSS'],
    featured: false,
  },
  {
    title: 'Property Marketplace',
    desc: 'Real estate marketplace with browsing, search filters, listing management, and interactive map integration.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Supabase'],
    featured: false,
  },
];

const FILTERS = ['All', 'React', 'TypeScript', 'Supabase', 'Node.js'];

function Card({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  return (
    <motion.article
      className="group glass-card overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        {p.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF]">
            Featured
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#050505]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href="https://github.com/Tsi2216"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all"
          >
            <Github size={17} />
          </a>
          <button className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all">
            <ExternalLink size={17} />
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-[#00E5FF] transition-colors duration-300 leading-snug">
          {p.title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed mb-4">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#00E5FF]/8 border border-[#00E5FF]/15 text-[#00E5FF]/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.some(t => t.includes(filter)));

  return (
    <section id="projects" className="section-pad bg-[#080808] relative overflow-hidden">
      <div className="orb w-80 h-80 left-1/3 top-0 bg-[#00E5FF]/[0.035]" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">What I've Built</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto mb-8" />

          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                  filter === f
                    ? 'bg-[#00E5FF] text-black font-semibold shadow-[0_0_20px_rgba(0,229,255,0.35)]'
                    : 'glass border border-white/10 text-gray-400 hover:border-[#00E5FF]/30 hover:text-[#00E5FF]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((p, i) => <Card key={p.title} p={p} i={i} />)}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Tsi2216"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/12 text-gray-400 hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 text-sm"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
