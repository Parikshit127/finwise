import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingSection from '../components/landing/PricingSection';

const PricingPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
