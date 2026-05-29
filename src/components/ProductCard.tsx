import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white border border-gray-200 hover:border-primary/40 transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
        >
          Learn More <FiArrowRight size={16} />
        </button>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
