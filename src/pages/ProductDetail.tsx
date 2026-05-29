import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiPhone, FiMail, FiChevronRight } from 'react-icons/fi';
import { products } from '../data';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id)
    .sort((a) => (a.category === product.category ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
          <FiChevronRight size={14} />
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }), 150);
            }}
            className="hover:text-primary transition-colors"
          >
            Aerial Work Platforms
          </button>
          <FiChevronRight size={14} />
          <span className="text-gray-900 font-medium">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
        >
          <FiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image gallery */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100" style={{ aspectRatio: '4/3' }}>
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wide">
                {product.category}
              </div>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-1 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i ? 'border-primary shadow-md' : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ aspectRatio: '4/3' }}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-subtitle">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{product.title}</h1>
            <p className="text-gray-600 leading-relaxed mb-8">{product.fullDescription}</p>

            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-lg mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FiCheck className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-lg mb-3">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <FiPhone size={16} /> Get A Quote
              </button>
              <a href="mailto:info@aerox.com" className="btn-outline flex items-center gap-2">
                <FiMail size={16} /> Email Enquiry
              </a>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary inline-block" />
            Technical Specifications
          </h2>
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700 w-1/2 border-r border-gray-200">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Related products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary inline-block" />
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 uppercase tracking-wide">
                    {p.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 font-bold mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{p.description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-3">
                    View Details <FiChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
