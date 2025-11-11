import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Unbeatable Pricing
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            We pioneered the discount broking model in India. Now, enjoy zero brokerage charges on equity delivery trades and just a flat fee for intraday trades.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-card border border-card-border rounded-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-text-primary">₹0</h3>
            <p className="mt-2 text-text-secondary">Free equity delivery and direct mutual funds</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-text-secondary">All equity delivery investments</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-text-secondary">All direct mutual fund investments</span>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-card border border-card-border rounded-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary">₹20</h3>
            <p className="mt-2 text-text-secondary">Intraday and F&O trades</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-text-secondary">Flat ₹20 or 0.03% (whichever is lower) per executed order</span>
              </li>
               <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-text-secondary">Same pricing for Equity, Currency, and Commodity trades</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="text-center mt-12">
            <a href="#" className="text-primary hover:underline">
                See all pricing details →
            </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
