import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 px-6 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-lg font-medium text-primary mb-2">Hello, I'm</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 gradient-heading bg-clip-text text-transparent">
                Sabarivasan C
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-4">
                Software Developer & Machine Learning Enthusiast
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 skill-badge">
                  Full Stack Development
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 skill-badge">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 skill-badge">
                  Python
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 skill-badge">
                  JavaScript
                </Badge>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Motivated Computer Science graduate with expertise in web development, machine learning, and problem-solving.
              Passionate about applying technical knowledge to drive organizational success and create impactful solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button size="lg" className="shadow-lg hover:shadow-primary/20 transition-all">
                <a href="#contact" className="flex items-center">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary/20 hover:border-primary/40 transition-all">
                <a href="#projects" className="flex items-center">View Projects</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-5 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background social-icon transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background social-icon transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://leetcode.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background social-icon transition-all"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode size={24} />
              </a>
              <a 
                href="https://geeksforgeeks.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background social-icon transition-all"
                aria-label="GeeksForGeeks Profile"
              >
                <SiGeeksforgeeks size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Profile achievement banners */}
              <motion.div 
                className="absolute -top-5 -right-5 md:right-0 z-10 backdrop-blur-md p-2 rounded-lg border border-primary/20 achievement-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <p className="text-xs font-medium flex items-center gap-1">
                  <span className="text-primary">LeetCode:</span> 250+ problems solved
                </p>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 md:left-0 z-10 backdrop-blur-md p-2 rounded-lg border border-primary/20 achievement-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <p className="text-xs font-medium flex items-center gap-1">
                  <span className="text-primary">GeeksForGeeks:</span> 50+ problems, Uni Rank 14
                </p>
              </motion.div>
              
              {/* Profile image */}
              <motion.div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background profile-image card-shadow profile-container"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/sabari-profile.jpg" 
                  alt="Sabarivasan" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
