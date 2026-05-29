import { motion } from 'framer-motion';
import { FiHome, FiPackage, FiGlobe, FiZap, FiSettings } from 'react-icons/fi';
import { industries } from '../data';

const iconMap: Record<string, React.ElementType> = { FiHome, FiPackage, FiGlobe, FiZap, FiSettings };

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Industries We Serve</p>
          <h2 className="section-title">Built for Every Sector</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our versatile equipment portfolio serves a wide range of industries with specialized solutions for unique operational challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || FiSettings;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden cursor-default rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-10 h-10 bg-white/20 border border-white/40 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                    <Icon size={18} className="text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{industry.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {industry.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
