import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.toggle('translate-x-full');
  };
  
  const handleResumeDownload = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';  // Path to stored resume
    link.download = 'Sabarivasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-primary">S</span>abarivasan C
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link hover:text-primary transition-colors relative">Home</a>
            <a href="#about" className="nav-link hover:text-primary transition-colors relative">About</a>
            <a href="#experience" className="nav-link hover:text-primary transition-colors relative">Experience</a>
            <a href="#skills" className="nav-link hover:text-primary transition-colors relative">Skills</a>
            <a href="#projects" className="nav-link hover:text-primary transition-colors relative">Projects</a>
            <a href="#contact" className="nav-link hover:text-primary transition-colors relative">Contact</a>
            
            <Button onClick={handleResumeDownload} size="sm" className="flex items-center">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <Button 
            id="open-menu" 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: hsl(var(--primary));
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
