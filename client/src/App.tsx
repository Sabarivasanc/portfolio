import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { ThemeProvider, useTheme } from "./lib/theme-provider"; // Added theme provider

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Preload the profile image
    const img = new Image();
    img.src = "/sabari-profile.jpg";
  }, []);

  return (
    <ThemeProvider defaultTheme="dark"> {/* Added ThemeProvider */}
      <div>
        <ThemeToggleButton /> {/* Added toggle button */}
        <Router />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

import { useTheme } from './lib/theme-provider';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

export default App;