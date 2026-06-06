import { Github, Mail, Linkedin, Heart } from 'lucide-react';

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Footer() {
  const go = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="bg-[#030303] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-display font-bold text-xl gradient-text block mb-3">Tsion Shimelis</span>
            <p className="text-gray-700 text-xs leading-relaxed max-w-xs">
              Junior Full Stack Developer building modern, scalable, and user-focused web applications.
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {LINKS.map(l => (
                <button key={l} onClick={() => go(l)} className="text-left text-gray-700 hover:text-[#00E5FF] text-sm transition-colors duration-300">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-5">Connect</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Tsi2216"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-gray-600 hover:text-[#00E5FF] hover:border-[#00E5FF]/25 transition-all duration-300"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsionshimelis/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-gray-600 hover:text-blue-400 hover:border-blue-400/25 transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:tsionshimelis3@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-gray-600 hover:text-[#00E5FF] hover:border-[#00E5FF]/25 transition-all duration-300"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">© 2026 <span className="text-gray-600">Tsion Shimelis</span>. All rights reserved.</p>
          <p className="text-gray-700 text-xs flex items-center gap-1.5">
            Designed and Developed with <Heart size={11} className="text-[#00E5FF] fill-[#00E5FF]" /> Passion
          </p>
        </div>
      </div>
    </footer>
  );
}
