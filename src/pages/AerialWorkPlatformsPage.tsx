import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiCheck, FiArrowRight, FiPhone } from 'react-icons/fi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  photo: string;
  overview: string;
  features: string[];
  applications: string[];
}

const categoryData: Record<string, CategoryData> = {
  'scissor-lift': {
    title: 'Scissor Lifts',
    subtitle: 'Aerial Work Platforms',
    description: 'Electric and diesel scissor lifts for indoor and outdoor applications — from compact 6m units to heavy-duty 19m platforms.',
    heroImage: 'scissors.jpg',
    photo: '/scissors.jpg',
    overview: 'AEROX scissor lifts are engineered for reliability, safety, and ease of use. Our range covers everything from ultra-compact electric units for narrow aisles to heavy-duty rough-terrain models for outdoor construction sites. All models feature intuitive controls, non-marking tyre options, and full IPAF compliance.',
    features: ['Zero-emission electric drive options', 'Non-marking tyres for sensitive floors', 'Self-levelling platform with tilt sensor', 'Proportional drive and lift controls', 'Fold-down guardrails for transport', 'Onboard diagnostics display', 'Fast-charge battery systems', 'IPAF & CE certified'],
    applications: ['Indoor maintenance', 'Warehouse operations', 'Retail fit-out', 'Construction finishing', 'Airport facilities', 'Hospitals & clean rooms'],
  },
  'spider-lift': {
    title: 'Spider Lifts',
    subtitle: 'Aerial Work Platforms',
    description: 'Tracked spider lifts for the most challenging access situations — uneven ground, slopes, sensitive surfaces, and confined spaces.',
    heroImage: 'Spider.jpg',
    photo: '/spider.jpg',
    overview: 'AEROX Spider Lifts combine the reach of a boom lift with the versatility of a tracked undercarriage. Their articulated outrigger legs adapt to uneven ground and slopes up to 45°, while the narrow transport width allows access through standard gates and doorways. The hybrid power system enables silent, emission-free operation indoors.',
    features: ['Articulated outrigger legs for uneven ground', 'Rubber tracks — no surface damage', 'Hybrid power for indoor/outdoor use', 'Operates on slopes up to 45°', 'Narrow transport width', 'Remote control operation available', 'Automatic levelling system', 'CE & IPAF certified'],
    applications: ['Historic buildings', 'Landscaping & tree surgery', 'Slope stabilisation', 'Indoor arenas', 'Difficult access sites', 'Film & events industry'],
  },
  'boom-lift': {
    title: 'Boom Lifts',
    subtitle: 'Aerial Work Platforms',
    description: 'Articulating and telescopic boom lifts reaching up to 56m — for construction, maintenance, and industrial applications worldwide.',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
    photo: '/boom.jpg',
    overview: 'AEROX boom lifts deliver unmatched reach and versatility for complex access challenges. Our articulating models navigate around obstacles with ease, while telescopic booms provide fast straight-line access to elevated work areas. Available in electric, diesel, and dual-fuel configurations for any environment.',
    features: ['360° continuous turntable rotation', 'Multi-section articulating jib', 'Oscillating front axle for rough terrain', 'Automatic levelling outriggers', 'Integrated load management system', 'Cold-start capability down to -20°C', 'Wind speed sensor with auto lockout', 'Remote telematics diagnostics'],
    applications: ['Bridge maintenance', 'High-rise construction', 'Power line inspection', 'Stadium maintenance', 'Wind turbine servicing', 'Oil & gas facilities'],
  },
  'truck-mounted': {
    title: 'Truck Mounted Solutions',
    subtitle: 'Aerial Work Platforms',
    description: 'Truck-mounted aerial platforms for rapid deployment — combining the mobility of a vehicle with the reach of a boom lift.',
    heroImage: 'truck2.jpg',
    photo: '/truck2.jpg',
    overview: 'AEROX Truck Mounted Solutions offer the ultimate in mobility and reach. Mounted on commercial vehicles, these platforms can be driven directly to any job site and deployed in minutes. Ideal for utilities, telecoms, street lighting, and emergency maintenance where rapid response is critical.',
    features: ['Rapid on-site deployment in minutes', 'Insulated boom options for live electrical work', 'Outrigger stabilisation system', 'PTO or hydraulic power take-off', 'Integrated tool storage compartments', 'Available on 3.5t to 26t vehicles', 'Remote control operation', 'Full EN 280 compliance'],
    applications: ['Street lighting maintenance', 'Utility & telecoms', 'Emergency response', 'Tree surgery', 'Building facade maintenance', 'Bridge inspection'],
  },
};

const allCategories = [
  { slug: 'scissor-lift', label: 'Scissor Lift' },
  { slug: 'spider-lift', label: 'Spider Lift' },
  { slug: 'boom-lift', label: 'Boom Lift' },
  { slug: 'truck-mounted', label: 'Truck Mounted Solutions' },
];

function OverviewPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <section className="relative pt-28 pb-20 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Aerial Work Platforms" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
            <FiChevronRight size={14} />
            <span className="text-white font-medium">Aerial Work Platforms</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Equipment</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">Aerial Work<br /><span className="text-primary">Platforms</span></h1>
            <p className="text-white/60 text-lg leading-relaxed">Premium access equipment for every application — from compact scissor lifts to heavy-duty truck-mounted solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allCategories.map((cat, i) => {
              const data = categoryData[cat.slug];
              return (
                <motion.div key={cat.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer" onClick={() => navigate(`/aerial-work-platforms/${cat.slug}`)}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={data.heroImage} alt={data.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">{data.subtitle}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 font-black text-xl mb-2 group-hover:text-primary transition-colors">{data.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{data.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      Explore Range <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function AerialWorkPlatformsPage() {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  if (!category) return <OverviewPage />;

  const data = categoryData[category];
  if (!data) {
    navigate('/aerial-work-platforms');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gray-900 overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
            <FiChevronRight size={14} />
            <button onClick={() => navigate('/aerial-work-platforms')} className="hover:text-primary transition-colors">Aerial Work Platforms</button>
            <FiChevronRight size={14} />
            <span className="text-white font-medium">{data.title}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">{data.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">{data.title}</h1>
            <p className="text-white/60 text-lg leading-relaxed">{data.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Sub-category tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {allCategories.map((cat) => (
            <button key={cat.slug} onClick={() => navigate(`/aerial-work-platforms/${cat.slug}`)} className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${cat.slug === category ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Photo next to heading */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={data.photo}
                    alt={data.title}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Overview</p>
                  <h2 className="text-3xl font-black text-gray-900 mb-5">{data.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{data.overview}</p>
                </motion.div>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <FiCheck className="text-primary flex-shrink-0 mt-0.5" size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-gray-900 font-bold text-lg mb-4">Applications</h3>
              <ul className="space-y-2.5 mb-6">
                {data.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-5 space-y-3">
                <button onClick={() => navigate('/contact')} className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                  <FiPhone size={15} /> Get A Quote
                </button>
                <button onClick={() => navigate('/contact')} className="btn-outline w-full text-sm">Request Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
      <FloatingButtons />
    </div>
  );
}
