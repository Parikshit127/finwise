import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import PricingSection from '../components/landing/PricingSection';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
