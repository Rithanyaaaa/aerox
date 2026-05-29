import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiX, FiCheck, FiPhone } from 'react-icons/fi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import IndustryCard from '../components/IndustryCard';
import { industriesData, type IndustryItem } from '../data/industriesData';

const pageStats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '20+', label: 'Industries Served' },
  { value: '18+', label: 'Years Experience' },
  { value: '1200+', label: 'Equipment Units' },
];

export default function IndustriesPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<IndustryItem | null>(null);

  const handleLearnMore = (id: number) => {
    const found = industriesData.find((i) => i.id === id) ?? null;
    setSelected(found);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
          alt="Industries hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />

        {/* Decorative red line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
            <FiChevronRight size={14} />
            <span className="text-white font-medium">Industries</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Industries We Serve</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Built for Every<br />
              <span className="text-primary">Industry</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              From oil refineries to airport hangars, AEROX delivers certified aerial work platforms engineered for the unique demands of each sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {pageStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6 px-6 text-center"
              >
                <div className="text-white font-black text-2xl md:text-3xl">{s.value}</div>
                <div className="text-white/70 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Cards Grid ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Expertise</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Sector-Specific Solutions</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Each industry has unique access challenges. We provide tailored equipment packages, certified operators, and dedicated support teams for every sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative">
            {industriesData.map((industry, i) => (
              <div key={industry.id} className="relative">
                <IndustryCard industry={industry} index={i} onLearnMore={handleLearnMore} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detail Modal / Expanded Panel ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <FiX size={18} />
                </button>
                <div className="absolute bottom-5 left-6">
                  <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-1">{selected.subtitle}</p>
                  <h2 className="text-white font-black text-2xl">{selected.title}</h2>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-6 md:p-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {selected.stats.map((s, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                      <div className="text-primary font-black text-xl">{s.value}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-7 text-sm">{selected.longDescription}</p>

                {/* Highlights */}
                <div className="mb-7">
                  <h4 className="text-gray-900 font-bold mb-3">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selected.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <FiCheck className="text-primary flex-shrink-0 mt-0.5" size={15} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment */}
                <div className="mb-8">
                  <h4 className="text-gray-900 font-bold mb-3">Recommended Equipment</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.equipment.map((eq, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setSelected(null);
                      navigate('/');
                      setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150);
                    }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <FiPhone size={15} /> Get A Quote
                  </button>
                  <button
                    onClick={() => {
                      setSelected(null);
                      navigate('/');
                      setTimeout(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }), 150);
                    }}
                    className="btn-outline"
                  >
                    View Equipment
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-primary/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Ready to Get Started?</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
              Don't See Your Industry?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              We work across many more sectors. Contact our team and we'll design a custom access solution tailored to your specific operational requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150);
                }}
                className="btn-primary px-8 py-4"
              >
                Contact Our Team
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }), 150);
                }}
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4"
              >
                Browse Equipment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
