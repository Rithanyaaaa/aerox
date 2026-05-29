import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiPhone } from 'react-icons/fi';
import { stats } from '../data';

const highlights = [
  'ISO 9001:2015 Certified Operations',
  'Nationwide Service Network',
  'Factory-Trained Technicians',
  'Flexible Rental & Purchase Options',
  'Comprehensive Warranty Programs',
  'IPAF & PASMA Certified Training',
];

const values = [
  { title: 'Safety First', desc: 'Every piece of equipment is rigorously tested and certified to the highest international safety standards.' },
  { title: 'Innovation', desc: 'We continuously invest in the latest technology to keep our fleet at the cutting edge of the industry.' },
  { title: 'Reliability', desc: 'Our clients depend on us for zero-downtime operations — we deliver on that promise every time.' },
  { title: 'Partnership', desc: 'We build long-term relationships, not just transactions. Your success is our success.' },
];

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <div id="about">
      {/* ── Stats Bar ── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* ── Story ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-primary/10 rounded-full" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/truck2.jpg"
                alt="AEROX Story"
                loading="lazy"
                className="w-full h-[480px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl" />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 text-center hidden md:block shadow-xl">
                <div className="text-white font-black text-4xl leading-none">18+</div>
                <div className="text-white/80 text-xs uppercase tracking-widest mt-1">Years of<br />Excellence</div>
              </div>
              <div className="absolute -top-5 -left-5 w-16 h-16 hexagon bg-primary/10 border-2 border-primary/30 hidden md:block" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Built on Trust,<br />Driven by Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                AEROX Industrial Solutions was founded in 2005 with a simple mission: provide construction and industrial companies with the most reliable aerial work platforms backed by world-class service. What started as a 12-unit scissor lift fleet has grown into one of North America's most trusted equipment providers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, with over 1,200 equipment units and a nationwide service network, we serve 500+ companies across 20+ industries — from oil refineries to airport hangars, construction sites to manufacturing plants.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <FiCheckCircle className="text-primary flex-shrink-0" size={16} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigate('/contact')} className="btn-primary flex items-center gap-2">
                  <FiPhone size={15} /> Get A Quote
                </button>
                <button onClick={() => navigate('/aerial-work-platforms')} className="btn-outline">
                  Our Equipment
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <span className="text-primary font-black text-lg group-hover:text-white transition-colors">{i + 1}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
