import { forwardRef, ForwardedRef } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

interface MobileNavProps {
  onToggle: (open: boolean) => void;
}

const MobileNav = forwardRef(({ onToggle }: MobileNavProps, ref: ForwardedRef<HTMLDivElement>) => {
  const closeMobileMenu = () => {
    onToggle(false);
  };
  
  const handleNavLinkClick = () => {
    closeMobileMenu();
  };
  
  const handleResumeDownload = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';  // Path to stored resume
    link.download = 'Sabarivasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMobileMenu();
  };

  return (
    <div 
      id="mobile-menu" 
      ref={ref}
      className="fixed inset-0 bg-background z-50 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden"
    >
      <div className="flex justify-end p-6">
        <Button 
          id="close-menu" 
          variant="ghost" 
          size="icon"
          onClick={closeMobileMenu}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      
      <nav className="flex flex-col items-center gap-8 p-6">
        <a href="#home" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Home</a>
        <a href="#about" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>About</a>
        <a href="#experience" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Experience</a>
        <a href="#education" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Education</a>
        <a href="#skills" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Skills</a>
        <a href="#projects" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Projects</a>
        <a href="#coding-profiles" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Coding Profiles</a>
        <a href="#certifications" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Certifications</a>
        <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleNavLinkClick}>Contact</a>
        
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/vsabari146/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiLeetcode size={24} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/vsabara3hq/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiGeeksforgeeks size={24} />
          </a>
        </div>
        
        <Button onClick={handleResumeDownload} className="mt-4 w-full">
          <DownloadIcon className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </nav>
    </div>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;
