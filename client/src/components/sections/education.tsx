import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

export default function Education() {
  const [bachelorRef, bachelorInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hscRef, hscInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sslcRef, sslcInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-16 px-6 bg-muted/5">
      <div className="container mx-auto">
        <SectionHeading title="Education" />
        
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            ref={bachelorRef}
            initial={{ opacity: 0, y: 20 }}
            animate={bachelorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="relative pl-7"
          >
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary"></div>
            <div className="absolute left-1.5 top-3 w-0.5 h-full -mt-3 bg-muted/20"></div>
            
            <Card className="bg-muted/5 border-muted/10">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">B.E. Computer Science & Engineering</h3>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mt-2 sm:mt-0">2020 – 2024</span>
                </div>
                <h4 className="text-lg text-primary mb-2">Annamalai University</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <Badge variant="outline" className="flex items-center gap-1 bg-muted/10">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> CGPA: 8.6
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 bg-muted/10">
                    <Trophy className="h-3 w-3 fill-yellow-400 text-yellow-400" /> University Rank: 14th
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Completed a comprehensive computer science curriculum with a focus on programming, 
                  data structures, algorithms, and web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            ref={hscRef}
            initial={{ opacity: 0, y: 20 }}
            animate={hscInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative pl-7"
          >
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary"></div>
            <div className="absolute left-1.5 top-3 w-0.5 h-full -mt-3 bg-muted/20"></div>
            
            <Card className="bg-muted/5 border-muted/10">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Senior Secondary (HSC)</h3>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mt-2 sm:mt-0">2020</span>
                </div>
                <h4 className="text-lg text-primary mb-2">Kamaraj Matric HR Sec School</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <Badge variant="outline" className="flex items-center gap-1 bg-muted/10">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> Percentage: 72%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            ref={sslcRef}
            initial={{ opacity: 0, y: 20 }}
            animate={sslcInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-7"
          >
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary"></div>
            
            <Card className="bg-muted/5 border-muted/10">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Secondary (SSLC)</h3>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mt-2 sm:mt-0">2018</span>
                </div>
                <h4 className="text-lg text-primary mb-2">Kamaraj Matric HR Sec School</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <Badge variant="outline" className="flex items-center gap-1 bg-muted/10">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> Percentage: 81.8%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
