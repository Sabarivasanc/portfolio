import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { ThemeProvider, useTheme } from "./lib/theme-provider"; // Theme provider with useTheme

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}

function App() {
  useEffect(() => {
    // Preload the profile image
    const img = new Image();
    img.src = "/sabari-profile.jpg";
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div>
        <ThemeToggleButton />
        <Router />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;