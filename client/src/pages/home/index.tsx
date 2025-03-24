import { useEffect, useRef } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileNav from "@/components/layout/mobile-nav";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import CodingProfiles from "@/components/sections/coding-profiles";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

export default function Home() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = (open: boolean) => {
    if (mobileMenuRef.current) {
      if (open) {
        mobileMenuRef.current.classList.remove("translate-x-full");
      } else {
        mobileMenuRef.current.classList.add("translate-x-full");
      }
    }
  };
  
  // Set up scroll reveal and active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveSection() {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    window.addEventListener('scroll', setActiveSection);
    return () => window.removeEventListener('scroll', setActiveSection);
  }, []);
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <MobileNav ref={mobileMenuRef} onToggle={toggleMobileMenu} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
