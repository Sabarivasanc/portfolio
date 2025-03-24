import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  skills: string[];
  issueDate: string;
  url?: string;
  delay?: number;
}

export default function CertificationCard({ 
  title, 
  skills, 
  issueDate, 
  url,
  delay = 0 
}: CertificationCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card className="bg-muted/5 border-muted/10 h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-primary"><Award className="h-5 w-5" /></span>
          </div>
          
          <div className="space-y-2 mb-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-start">
                <span className="text-secondary mr-3 mt-1"><CheckCircle size={16} /></span>
                <span className="text-muted-foreground">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-muted/10">
            <Badge variant="outline" className="bg-transparent">
              Issued: {issueDate}
            </Badge>
            
            {url && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
