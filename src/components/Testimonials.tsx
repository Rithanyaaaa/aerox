import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      <div className="absolute -top-20 -right-20 w-80 h-80 border border-primary/10 rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Trusted by industry leaders across the globe for reliable equipment and exceptional service.</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white border border-gray-200 rounded-lg p-7 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <FaQuoteLeft className="text-primary/30 mb-4" size={28} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.review}"</p>
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-primary" size={14} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
