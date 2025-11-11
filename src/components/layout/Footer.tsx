import { Zap, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About", path: "/about-us" },
      { name: "Products", path: "/products" },
      { name: "Pricing", path: "/pricing" },
      { name: "Careers", path: "#" }
    ],
    Support: [
      { name: "Contact", path: "/support" },
      { name: "Help Center", path: "/support" },
      { name: "FAQs", path: "/support" },
      { name: "Status", path: "#" }
    ],
    Legal: [
      { name: "Terms of Service", path: "#" },
      { name: "Privacy Policy", path: "#" },
      { name: "Disclosures", path: "#" }
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-text-primary">FinWise</span>
            </Link>
            <p className="mt-4 text-sm text-text-tertiary">© 2025 FinWise. All rights reserved.</p>
             <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-text-tertiary hover:text-text-secondary" target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-text-secondary tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-base text-text-tertiary hover:text-text-secondary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
