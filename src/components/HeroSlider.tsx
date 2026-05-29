import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { heroSlides } from '../data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % heroSlides.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[current];

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imgVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 1.05 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.98 }),
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900">

      {/* ── Right image panel ── */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} mode="sync">
          <motion.img
            key={slide.id}
            custom={direction}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            src={slide.image}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        {/* Dark overlay on right side */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── Diagonal left panel ── */}
      <div
        className="absolute inset-y-0 left-0 w-[62%] md:w-[55%] bg-gray-900/95 hidden md:block"
        style={{ clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)' }}
      />
      {/* Mobile full dark overlay */}
      <div className="absolute inset-0 bg-gray-900/80 md:hidden" />

      {/* ── Red top accent line ── */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10" />

      {/* ── Red vertical left bar ── */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-primary z-10 hidden md:block" />

      {/* ── Content ── */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-0.5 bg-primary" />
                  <span className="text-primary font-semibold uppercase tracking-widest text-xs">
                    {slide.tag}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                  {slide.heading.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'text-primary' : ''}>{word} </span>
                  ))}
                </h1>

                {/* Subheading */}
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                  {slide.subheading}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded"
                  >
                    Get A Quote <FiArrowRight />
                  </button>
                  <button
                    onClick={() => navigate('/aerial-work-platforms')}
                    className="flex items-center gap-2 border-2 border-white/30 text-white hover:border-primary hover:text-primary font-semibold px-7 py-3.5 transition-all duration-300 uppercase tracking-wider text-sm rounded"
                  >
                    View Products
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10 flex items-center gap-4">
        <span className="text-primary font-black text-2xl leading-none">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-16 h-0.5 bg-white/20">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            key={current}
          />
        </div>
        <span className="text-white/30 text-sm">
          {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Prev / Next arrows ── */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2">
        <button
          onClick={prev}
          className="w-10 h-10 border border-white/20 hover:border-primary hover:bg-primary text-white flex items-center justify-center transition-all duration-200 rounded"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 border border-white/20 hover:border-primary hover:bg-primary text-white flex items-center justify-center transition-all duration-200 rounded"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
