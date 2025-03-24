import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, DownloadIcon, Menu, X, Code, Briefcase, User, Award, Mail } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#about", label: "About", icon: <User className="w-4 h-4 mr-2" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { href: "#projects", label: "Projects", icon: <Code className="w-4 h-4 mr-2" /> },
    { href: "#certifications", label: "Certifications", icon: <Award className="w-4 h-4 mr-2" /> },
    { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 shadow-md supports-[backdrop-filter]:bg-background/60' 
          : 'bg-background/95 supports-[backdrop-filter]:bg-background/60'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="py-2 text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sabarivasan C
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button variant="ghost" asChild className="flex items-center text-foreground hover:text-primary">
                  <a href={link.href} className="flex items-center">
                    {link.icon}
                    {link.label}
                  </a>
                </Button>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <Button asChild className="ml-2 shadow-lg hover:shadow-primary/20">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 hover:border-primary hover:text-primary"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:border-primary hover:text-primary"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden py-4 bg-background border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-3 rounded-md hover:bg-primary/10 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}