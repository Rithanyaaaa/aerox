import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import type { IndustryItem } from '../data/industriesData';

interface Props {
  industry: IndustryItem;
  index: number;
  onLearnMore: (id: number) => void;
}

export default function IndustryCard({ industry, index, onLearnMore }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300"
    >
      {/* Image — left side */}
      <div className="relative md:w-64 lg:w-72 flex-shrink-0 overflow-hidden" style={{ minHeight: '240px' }}>
        <img
          src={industry.image}
          alt={industry.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Red overlay strip on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        {/* Bottom gradient for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />

        {/* Stats badges — visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {industry.stats.map((s, i) => (
            <div key={i} className="flex-1 bg-white/95 rounded-lg p-2 text-center shadow-sm">
              <div className="text-primary font-black text-sm leading-none">{s.value}</div>
              <div className="text-gray-500 text-[10px] mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content — right side */}
      <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
        <div>
          {/* Red subtitle */}
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-2">
            {industry.subtitle}
          </p>

          {/* Title */}
          <h3 className="text-gray-900 font-black text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {industry.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-6">
            {industry.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <FiCheck className="text-primary flex-shrink-0 mt-0.5" size={14} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Equipment tags + CTA */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {industry.equipment.map((eq, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
              >
                {eq}
              </span>
            ))}
          </div>

          <button
            onClick={() => onLearnMore(industry.id)}
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group/btn"
          >
            Learn More
            <FiArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Left red accent bar */}
      <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-2xl hidden md:block" />
    </motion.div>
  );
}
