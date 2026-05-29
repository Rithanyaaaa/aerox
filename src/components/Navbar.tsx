import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import type { NavLink } from '../types';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 150);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) =>
    href.startsWith('/') ? location.pathname === href : false;

  // Glassmorphism on home before scroll, solid white elsewhere / after scroll
  const glassy = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        glassy
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-none'
          : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button onClick={() => handleNavClick('/')} className="flex items-center">
            <img src="/logo.png" alt="AEROX Logo" className="h-12 w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link: NavLink) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !link.dropdown && handleNavClick(link.href)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors relative group ${
                    isActive(link.href)
                      ? 'text-primary'
                      : glassy
                      ? 'text-white hover:text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <FiChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-52 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl py-2 rounded-lg"
                    >
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.href)}
                          className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="btn-primary text-xs py-2.5 rounded"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 ${glassy ? 'text-white' : 'text-gray-800'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (link.dropdown) {
                        setActiveDropdown(activeDropdown === link.label ? null : link.label);
                      } else {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`flex items-center justify-between w-full py-3 text-sm font-medium border-b border-gray-100 ${
                      isActive(link.href) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <FiChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="pl-4 py-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.href)}
                          className="block w-full text-left text-gray-500 hover:text-primary py-2 text-sm"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavClick('/contact')}
                className="btn-primary block w-full text-center mt-4 text-xs"
              >
                Get A Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
