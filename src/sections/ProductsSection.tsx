import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Our Equipment</p>
          <h2 className="section-title">Aerial Work Platforms</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our comprehensive range of aerial work platforms designed for every application and environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="btn-outline">View All Products</button>
        </motion.div>
      </div>
    </section>
  );
}
