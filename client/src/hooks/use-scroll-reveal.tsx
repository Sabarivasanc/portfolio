import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0
}: ScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 100);
      
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return { ref, isVisible };
}
