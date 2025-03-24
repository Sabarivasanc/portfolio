import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Sabarivasan C</h1>
            <h3 className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6">Software Developer & Machine Learning Enthusiast</h3>
            <p className="text-muted-foreground text-lg max-w-lg mb-8">
              Motivated Computer Science graduate with expertise in web development, machine learning, and cybersecurity.
              Passionate about applying technical knowledge to drive organizational success.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex gap-5 items-center">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiLeetcode size={24} />
              </a>
              <a href="https://geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiGeeksforgeeks size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-muted/20">
                <img 
                  src="/sabari-profile.jpg" 
                  alt="Sabarivasan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
