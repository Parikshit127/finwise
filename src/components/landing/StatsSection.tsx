import { motion } from 'framer-motion';
import { Users, TrendingUp, ShieldCheck } from 'lucide-react';

const stats = [
  {
    value: "5+ Million",
    label: "Happy Investors",
    icon: Users,
  },
  {
    value: "₹0",
    label: "Brokerage on Equity Delivery",
    icon: TrendingUp,
  },
  {
    value: "100% Secure",
    label: "SEBI Regulated Platform",
    icon: ShieldCheck,
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <stat.icon className="h-10 w-10 text-primary mb-3" />
              <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-md text-text-secondary mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
