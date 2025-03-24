import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold mb-4">
            <span className="text-primary">Sabarivasan C</span>
          </a>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex gap-6 mb-8">
            <a href="https://github.com/Sabarivasanc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sabarivasan-c-a78267274/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/vsabari146/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <SiLeetcode size={24} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/vsabara3hq/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <SiGeeksforgeeks size={24} />
            </a>
          </div>
          
          <p className="text-muted-foreground text-center">&copy; {new Date().getFullYear()} Sabarivasan C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
