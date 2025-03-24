import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

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
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
