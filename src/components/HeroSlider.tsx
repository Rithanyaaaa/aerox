import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { heroSlides } from '../data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const handleQuote = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background */}
              <img
                src={slide.image}
                alt={slide.heading}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

              {/* Decorative shapes */}
              <div className="absolute right-10 top-1/4 w-64 h-64 border border-primary/20 rounded-full hidden lg:block" />
              <div className="absolute right-20 top-1/3 w-40 h-40 border border-white/10 rounded-full hidden lg:block" />
              <div className="absolute right-32 top-1/4 w-20 h-20 hexagon bg-primary/20 hidden lg:block" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-semibold px-4 py-2 uppercase tracking-widest mb-6"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      {slide.tag}
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.35 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
                    >
                      {slide.heading.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 ? 'text-primary' : ''}>{word} </span>
                      ))}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed"
                    >
                      {slide.subheading}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.65 }}
                      className="flex flex-wrap gap-4"
                    >
                      <button onClick={handleQuote} className="btn-primary flex items-center gap-2 text-base px-8 py-4">
                        Get A Quote <FiArrowRight />
                      </button>
                      <button
                        onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-outline flex items-center gap-2 text-base px-8 py-4"
                      >
                        View Products
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-primary" />
        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
      </div>
    </section>
  );
}
