import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

// ── Paste your deployed Google Apps Script URL here ──────────────────────────
const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxUaifuGGHIrg5opxXtXpMPX0bww4IzY6ilCO0nULmB9X9i9t62s8pk01sp4GuWTFjy/exec';
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Google Apps Script requires no-cors — response will be opaque (that's expected)
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString(),
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      });

      // With no-cors we can't read the response — assume success if no throw
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactCards = [
    { icon: FiPhone, label: 'Call Us', value: '+1 800 123 4567', sub: 'Mon–Sat, 8am–6pm' },
    { icon: FiMail, label: 'Email Us', value: 'info@aerox.com', sub: 'We reply within 24 hours' },
    { icon: FiMapPin, label: 'Visit Us', value: '123 Industrial Ave', sub: 'New York, NY 10001' },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Contact Us</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Ready to elevate your operations? Our team is here to help you find the perfect equipment solution.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4 group hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <card.icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">{card.label}</div>
                <div className="text-gray-900 font-semibold">{card.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{card.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* ── Success state ── */}
            {status === 'success' ? (
              <div className="bg-white border border-gray-200 rounded-lg p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px] shadow-sm">
                <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-5">
                  <FiCheck size={28} className="text-green-500" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Your enquiry has been recorded in our system.
                </p>
                <p className="text-gray-400 text-xs">Our team will contact you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-6 text-xs"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-lg p-8 space-y-5 shadow-sm"
              >
                {/* ── Error banner ── */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                    <FiAlertCircle size={18} className="flex-shrink-0" />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name',    placeholder: 'Full Name *',      type: 'text',  required: true  },
                    { name: 'email',   placeholder: 'Email Address *',  type: 'email', required: true  },
                    { name: 'phone',   placeholder: 'Phone Number',     type: 'tel',   required: false },
                    { name: 'company', placeholder: 'Company Name',     type: 'text',  required: false },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors w-full rounded"
                    />
                  ))}
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none rounded"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden min-h-[400px] shadow-sm"
          >
            <iframe
              title="AEROX Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.98784368459418!3d40.75797597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
