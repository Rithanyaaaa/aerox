import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      <div className="absolute -top-40 -right-40 w-96 h-96 border border-primary/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">The AEROX Advantage</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We combine cutting-edge technology with decades of industry expertise to deliver equipment solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
