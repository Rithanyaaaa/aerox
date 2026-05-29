import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="bg-primary text-white text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:+91 7904395270" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <FaPhone size={11} />
            <span>+91 7904395270</span>
          </a>
          <a href="tel:+91 7358821254" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <FaPhone size={11} />
            <span>+91 7358821254</span>
          </a>
          <a href="rithanya.k2024cce@sece.ac.in" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <FaEnvelope size={11} />
            <span>rithanya.k2024cce@sece.ac.in</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white/70 transition-colors">
                <Icon size={13} />
              </a>
            ))}
          </div>
          <div className="w-px h-4 bg-white/30" />
          <a
            href="#"
            className="flex items-center gap-1.5 bg-white text-primary font-semibold px-3 py-1 hover:bg-white/90 transition-colors text-xs uppercase tracking-wide"
          >
            <FiDownload size={12} />
            Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
}
