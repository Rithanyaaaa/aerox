import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FeaturesSection from './sections/FeaturesSection';
import AboutSection from './sections/AboutSection';
import IndustriesSection from './sections/IndustriesSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ProductDetail from './pages/ProductDetail';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AerialWorkPlatformsPage from './pages/AerialWorkPlatformsPage';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <main>
        <HeroSlider />
        <FeaturesSection />
        <AboutSection />
        <IndustriesSection />
        <Testimonials />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aerial-work-platforms" element={<AerialWorkPlatformsPage />} />
        <Route path="/aerial-work-platforms/:category" element={<AerialWorkPlatformsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
