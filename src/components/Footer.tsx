import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const quickLinks = ['Home', 'About Us', 'Products', 'Industries', 'Gallery', 'Contact Us'];
const services = ['Scissor Lifts', 'Boom Lifts', 'Telehandlers', 'Personnel Lifts', 'Spider Lifts', 'Equipment Rental'];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center font-black text-white text-xl">A</div>
              <div>
                <div className="text-white font-black text-xl tracking-wider leading-none">AEROX</div>
                <div className="text-primary text-[9px] font-semibold tracking-[0.2em] uppercase">Industrial Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading provider of aerial work platforms and industrial equipment solutions since 2005. Trusted by 500+ companies worldwide.
            </p>
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors group">
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors group">
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-primary" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              {[
                { icon: FiPhone, text: '+1 800 123 4567' },
                { icon: FiMail, text: 'info@aerox.com' },
                { icon: FiMapPin, text: '123 Industrial Ave, New York, NY 10001' },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/20">
              <div className="text-gray-400 text-xs mb-1">Business Hours</div>
              <div className="text-white text-sm font-semibold">Mon – Sat: 8:00 AM – 6:00 PM</div>
              <div className="text-gray-500 text-xs mt-0.5">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} AEROX Industrial Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-primary text-xs transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
