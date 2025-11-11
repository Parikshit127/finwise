import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LifeBuoy, BookOpen, MessageSquare, ChevronDown } from 'lucide-react';

const faqs = [
    { question: "How do I open an account?", answer: "You can open an account online in under 5 minutes. Just click the 'Sign Up' button and follow the on-screen instructions. You'll need your PAN and Aadhaar details." },
    { question: "What are the brokerage charges?", answer: "We offer zero brokerage on equity delivery trades. For intraday and F&O trades, we charge a flat fee of ₹20 or 0.03% per executed order, whichever is lower." },
    { question: "Is my money safe with FinWise?", answer: "Absolutely. We are a SEBI-regulated platform and adhere to all regulatory guidelines. Your securities are held in your own demat account, ensuring complete safety." },
    { question: "How can I contact customer support?", answer: "You can reach our support team via the contact form on this page, email us at support@finwise.com, or visit our Help Center for instant answers." },
];

const SupportPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Support Center
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              We're here to help. Find answers to your questions or get in touch with our team.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg border border-card-border">
                <LifeBuoy className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-text-primary">Contact Support</h3>
                <p className="text-text-secondary mt-2">Get in touch with our team for personalized assistance.</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-card-border">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-text-primary">Help Center</h3>
                <p className="text-text-secondary mt-2">Explore our guides and tutorials.</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-card-border">
                <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-bold text-text-primary">Community</h3>
                <p className="text-text-secondary mt-2">Join discussions with other investors.</p>
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="bg-card border border-card-border rounded-lg p-5 cursor-pointer group transition-colors duration-200 hover:bg-card/80">
                        <summary className="font-semibold text-text-primary list-none flex justify-between items-center">
                            {faq.question}
                            <ChevronDown className="h-5 w-5 text-primary transform transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <p className="text-text-secondary mt-4 leading-relaxed">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
