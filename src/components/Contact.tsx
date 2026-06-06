import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:tsionshimelis3@gmail.com?subject=${sub}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
  };

  const input = 'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#00E5FF]/50 focus:bg-white/[0.05] transition-all duration-300';

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tsionshimelis3@gmail.com',
      href: 'mailto:tsionshimelis3@gmail.com',
      iconBg: 'bg-[#00E5FF]/10',
      iconColor: 'text-[#00E5FF]',
      hoverBg: 'group-hover:bg-[#00E5FF]/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 989 629 054',
      href: 'tel:+251989629054',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      hoverBg: 'group-hover:bg-emerald-500/20',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Tsi2216',
      href: 'https://github.com/Tsi2216',
      iconBg: 'bg-white/5',
      iconColor: 'text-gray-400',
      hoverBg: 'group-hover:bg-white/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tsionshimelis',
      href: 'https://www.linkedin.com/in/tsionshimelis/',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      hoverBg: 'group-hover:bg-blue-500/20',
    },
  ];

  return (
    <section id="contact" className="section-pad bg-[#050505] relative overflow-hidden">
      <div className="orb w-80 h-80 left-1/4 top-1/4 bg-[#00E5FF]/[0.04]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00E5FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent mx-auto mb-5" />
          <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
            Have a project in mind or an opportunity to discuss? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info panel */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold text-white mb-5 text-sm">Contact Information</h3>
              <div className="space-y-4">
                {contacts.map(({ icon: Icon, label, value, href, iconBg, iconColor, hoverBg }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3.5 group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${iconBg} ${hoverBg} flex items-center justify-center flex-shrink-0 transition-colors`}>
                      <Icon size={17} className={iconColor} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-[10px] mb-0.5">{label}</p>
                      <p className="text-white text-xs group-hover:text-[#00E5FF] transition-colors break-all">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-[#00E5FF] text-xs font-medium">Available Now</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Open to full-time roles, freelance projects, and collaborations.
                Let's build something great together.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={submit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-600 text-xs block mb-2">Your Name</label>
                  <input type="text" required placeholder="Jane Doe" value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={input} />
                </div>
                <div>
                  <label className="text-gray-600 text-xs block mb-2">Email Address</label>
                  <input type="email" required placeholder="jane@example.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={input} />
                </div>
              </div>
              <div>
                <label className="text-gray-600 text-xs block mb-2">Message</label>
                <textarea rows={6} required placeholder="Tell me about your project…" value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className={`${input} resize-none`} />
              </div>
              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                    : 'bg-[#00E5FF] text-black hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-[1.01]'
                }`}
              >
                {sent ? <><CheckCircle size={17} /> Message Sent!</> : <><Send size={17} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
