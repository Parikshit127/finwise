import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <header className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight">
              Invest in Everything
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0">
              Online platform to invest in stocks, derivatives, mutual funds, and more. Join over 5+ million investors on the platform that's powering the future of finance.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-primary/90 transition-all"
              >
                Start Investing
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/images/stock-market-chart.png"
              alt="Stock Market Chart - Financial Analytics Dashboard"
              className="max-w-sm md:max-w-md w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
