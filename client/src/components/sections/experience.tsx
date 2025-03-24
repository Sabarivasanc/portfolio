import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "@/components/ui/timeline-item";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Experience" />
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            title="Software Trainee"
            subtitle="Velozion Technologies Pvt Ltd"
            date="August 2024 – Present"
          >
            Developed and maintained websites using HTML, CSS, and JavaScript.
          </TimelineItem>
          
          <TimelineItem
            title="Cybersecurity Intern"
            subtitle="Acmegrade Pvt Ltd"
            date="August 2022 – October 2022"
          >
            Conducted vulnerability assessments and penetration testing on networks.
          </TimelineItem>
          
          <TimelineItem
            title="Machine Learning Intern"
            subtitle="Shiash Info Solutions Pvt Ltd"
            date="June 2023 – July 2023"
            isLast={true}
          >
            Developed and deployed machine learning models in Python using regression and classification algorithms.
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
