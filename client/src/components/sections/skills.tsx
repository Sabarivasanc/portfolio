import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/ui/section-heading";
import SkillProgress from "@/components/ui/skill-progress";

export default function Skills() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Skills" />
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            ref={ref1}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              <div className="space-y-6">
                <SkillProgress name="Python" percentage={90} />
                <SkillProgress name="Java" percentage={85} />
                <SkillProgress name="JavaScript" percentage={80} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Web Development</h3>
              <div className="space-y-6">
                <SkillProgress name="HTML & CSS" percentage={95} />
                <SkillProgress name="Bootstrap" percentage={85} />
                <SkillProgress name="Django" percentage={75} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref2}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6">Machine Learning</h3>
              <div className="space-y-6">
                <SkillProgress name="TensorFlow & Keras" percentage={80} />
                <SkillProgress name="Regression & Classification" percentage={85} />
                <SkillProgress name="CNN" percentage={75} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Tools & Frameworks</h3>
              <div className="space-y-6">
                <SkillProgress name="Git & GitHub" percentage={90} />
                <SkillProgress name="VS Code & PyCharm" percentage={95} />
                <SkillProgress name="Jupyter & IntelliJ" percentage={85} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Problem-Solving</h3>
            <div className="space-y-6">
              <SkillProgress name="Data Structures & Algorithms" percentage={85} />
              <SkillProgress name="LeetCode Problem Solving" percentage={80} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
