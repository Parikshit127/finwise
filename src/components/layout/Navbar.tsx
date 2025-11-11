import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
    { name: "About Us", path: "/about-us" },
  ];

  const activeLinkStyle = {
    color: '#F0F6FC' // text-text-primary
  };

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-text-primary">FinWise</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="text-text-secondary hover:text-text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
             <Link to="/login" className="text-text-secondary hover:text-text-primary px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                Log In
             </Link>
             <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                Sign Up
             </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-card inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden" 
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-card-border my-2"></div>
             <Link to="/login" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-semibold transition-colors">
                Log In
             </Link>
             <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-primary text-white block w-full text-left mt-1 px-3 py-2 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors">
                Sign Up
             </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
