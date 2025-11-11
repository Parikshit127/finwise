import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Users, Target, Eye } from 'lucide-react';

const teamMembers = [
  { name: "Alex Johnson", role: "Founder & CEO", imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { name: "Jane Doe", role: "Chief Technology Officer", imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
  { name: "Sam Wilson", role: "Head of Product", imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
  { name: "Emily White", role: "Lead AI Engineer", imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d" },
];

const AboutUsPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
              About FinWise
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Democratizing finance for everyone through technology, transparency, and education.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">Our Story</h2>
              <div className="text-text-secondary space-y-6 leading-relaxed">
                <p>
                  FinWise was founded in 2025 with a simple mission: to break down the barriers to financial markets. We saw a world where investing was complex, expensive, and intimidating for the average person. We decided to change that.
                </p>
                <p>
                  By leveraging cutting-edge technology and a user-first design philosophy, we've created a platform that is not only powerful but also intuitive and affordable. Today, we're proud to serve millions of investors on their journey to financial freedom.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Target className="h-6 w-6 text-primary"/></div>
                  <div>
                      <h3 className="font-bold text-text-primary text-lg">Our Mission</h3>
                      <p className="text-text-secondary mt-1">To empower retail investors with the tools and knowledge to make informed financial decisions.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Eye className="h-6 w-6 text-primary"/></div>
                  <div>
                      <h3 className="font-bold text-text-primary text-lg">Our Vision</h3>
                      <p className="text-text-secondary mt-1">To be the most trusted and innovative financial services company in the world.</p>
                  </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-28">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-primary"/>
                  <h4 className="font-bold text-text-primary">{member.name}</h4>
                  <p className="text-text-tertiary">{member.role}</p>
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

export default AboutUsPage;
