import { ReactNode } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-card-border rounded-xl shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center text-text-primary mb-6">
              {title}
            </h1>
            {children}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AuthLayout;
