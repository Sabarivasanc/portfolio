import SectionHeading from "@/components/ui/section-heading";
import CertificationCard from "@/components/ui/certification-card";
import { certificationsData } from "@/lib/constants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-muted/5">
      <div className="container mx-auto">
        <SectionHeading title="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              skills={cert.skills}
              issueDate={cert.issueDate}
              url={cert.url}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
