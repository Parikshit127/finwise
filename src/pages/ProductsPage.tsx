import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { BarChart, Briefcase, Bot, ArrowRight, ShieldCheck, Activity, PieChart, Lock } from 'lucide-react';

const products = [
  {
    icon: BarChart,
    title: "Stocks & ETFs",
    description: "Invest in thousands of stocks and exchange-traded funds across major exchanges with zero commission.",
  },
  {
    icon: Briefcase,
    title: "Mutual Funds",
    description: "Choose from over 4,000 direct mutual funds and build a diversified portfolio with ease.",
  },
  {
    icon: Bot,
    title: "AI Financial Advisor",
    description: "Get personalized financial advice, market insights, and portfolio analysis from our advanced AI chatbot.",
  },
];

const features = [
    { icon: Activity, title: "Real-Time Data", description: "Access live market data to make timely and informed investment decisions." },
    { icon: PieChart, title: "Advanced Charting", description: "Utilize a suite of powerful charting tools and indicators for technical analysis." },
    { icon: Lock, title: "Secure Transactions", description: "Your investments and personal data are protected with bank-grade security." },
    { icon: ShieldCheck, title: "Portfolio Analytics", description: "Gain deep insights into your portfolio's performance and asset allocation." },
]

const ProductsPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              Our Product Suite
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              A comprehensive toolkit designed for the modern investor. Powerful, simple, and accessible for everyone.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-card-border rounded-lg p-8 flex flex-col"
              >
                <product.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary">{product.title}</h3>
                <p className="text-text-secondary mt-2 flex-grow">{product.description}</p>
                 <a href="#" className="flex items-center gap-2 text-primary font-semibold mt-6 hover:underline">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>

           <div className="mt-28">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Features At a Glance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-5"
                >
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-text-primary text-lg">{feature.title}</h3>
                        <p className="text-text-secondary mt-1">{feature.description}</p>
                    </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
