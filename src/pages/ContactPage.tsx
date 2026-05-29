import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiPhone, FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxUaifuGGHIrg5opxXtXpMPX0bww4IzY6ilCO0nULmB9X9i9t62s8pk01sp4GuWTFjy/exec';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contactCards = [
  { icon: FiPhone, label: 'Call Us', value: '+91 7358821254', sub: 'Mon–Sat, 8am–6pm' },
  { icon: FiMail, label: 'Email Us', value: 'rithanya.k2024cce@sece.ac.in', sub: 'We reply within 24 hours' },
  { icon: FiMapPin, label: 'Visit Us', value: 'Nehru Nagar, Chennai, Tamil Nadu', sub: 'Mon–Sat, 9am–5pm' },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: new Date().toLocaleString(), fullName: form.name, email: form.email, phone: form.phone, company: form.company, message: form.message }),
      });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gray-900 overflow-hidden">
        <img src="truck2.jpg" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
            <FiChevronRight size={14} />
            <span className="text-white font-medium">Contact Us</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Let's Talk<br /><span className="text-primary">Business</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">Ready to elevate your operations? Our team is here to help you find the perfect equipment solution.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 group hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <card.icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">{card.label}</div>
                  <div className="text-gray-900 font-semibold text-sm">{card.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{card.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {status === 'success' ? (
                <div className="bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[480px] shadow-sm">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-5">
                    <FiCheck size={28} className="text-green-500" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-1">Your enquiry has been recorded in our system.</p>
                  <p className="text-gray-400 text-xs">Our team will contact you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary mt-6 text-xs">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 space-y-5 shadow-sm">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-1">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm">Fill in the form and we'll get back to you within 24 hours.</p>
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                      <FiAlertCircle size={18} className="flex-shrink-0" />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', placeholder: 'Full Name *', type: 'text', required: true },
                      { name: 'email', placeholder: 'Email Address *', type: 'email', required: true },
                      { name: 'phone', placeholder: 'Phone Number', type: 'tel', required: false },
                      { name: 'company', placeholder: 'Company Name', type: 'text', required: false },
                    ].map((field) => (
                      <input key={field.name} name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} value={form[field.name as keyof typeof form]} onChange={handleChange} className="bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors w-full rounded-lg" />
                    ))}
                  </div>
                  <textarea name="message" placeholder="Your Message *" required rows={5} value={form.message} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none rounded-lg" />
                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70">
                    {status === 'loading' ? <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><FiSend size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm min-h-[480px]">
              <iframe title="AEROX Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784368459418!3d40.75797597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, minHeight: '480px' }} allowFullScreen loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
