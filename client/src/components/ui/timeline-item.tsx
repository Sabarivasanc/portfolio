import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children?: ReactNode;
  isLast?: boolean;
}

export default function TimelineItem({ title, subtitle, date, children, isLast = false }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      className="relative pl-7 mb-8 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary"></div>
      {!isLast && <div className="absolute left-1.5 top-3 w-0.5 h-full -mt-3 bg-muted/20"></div>}
      
      <Card className="bg-muted/5 border-muted/10">
        <CardContent className="p-6">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mt-2 sm:mt-0">{date}</span>
          </div>
          <h4 className="text-lg text-primary mb-4">{subtitle}</h4>
          
          {children && (
            <div className="text-muted-foreground">
              <div className="flex items-start">
                <span className="text-secondary mr-3 mt-1"><CheckCircle size={16} /></span>
                <span>{children}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
