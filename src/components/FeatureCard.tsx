import { motion } from 'framer-motion';
import { FiTool, FiHeadphones, FiTrendingUp, FiZap, FiDollarSign, FiShield } from 'react-icons/fi';
import type { Feature } from '../types';

const iconMap: Record<string, React.ElementType> = {
  FiTool, FiHeadphones, FiTrendingUp, FiZap, FiDollarSign, FiShield,
};

interface Props {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: Props) {
  const Icon = iconMap[feature.icon] || FiTool;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white border border-gray-200 rounded-lg p-6 group cursor-default shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
        <Icon size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-3">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
      <div className="mt-5 w-8 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
