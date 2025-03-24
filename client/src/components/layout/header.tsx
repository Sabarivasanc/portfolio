import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, DownloadIcon } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-foreground">
            <span className="text-primary">S</span>abarivasan C
          </a>

          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#experience">Experience</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#certifications">Certifications</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}