import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";
import { projectsData } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-muted/5">
      <div className="container mx-auto">
        <SectionHeading title="Projects" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
