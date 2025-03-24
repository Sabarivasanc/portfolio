import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProfileCardProps {
  title: string;
  icon: JSX.Element;
  iconColor: string;
  totalSolved: string;
  levels: { count: string; label: string; color: string }[];
  profileUrl: string;
  progressPercentage: number;
}

export default function ProfileCard({
  title,
  icon,
  iconColor,
  totalSolved,
  levels,
  profileUrl,
  progressPercentage
}: ProfileCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-muted/5 border-muted/10">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <span className={`text-3xl ${iconColor} mr-4`}>{icon}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Problems Solved</span>
              <span className="font-semibold">{totalSolved}</span>
            </div>
            <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full`}
                style={{ backgroundColor: `var(--${iconColor})` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${progressPercentage}%` } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {levels.map((level, index) => (
              <div key={index} className="bg-muted/10 p-3 rounded-lg text-center">
                <span className={`block font-semibold ${level.color}`}>{level.count}</span>
                <span className="text-muted-foreground text-sm">{level.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <Button asChild>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Profile
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
