// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import SectionHeading from "@/components/ui/section-heading";
// import { User, Mail, Phone, MapPin, Globe, Trophy, Code, Medal } from "lucide-react";

// export default function About() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="about" className="py-16 px-6 bg-muted/5">
//       <div className="container mx-auto">
//         <SectionHeading title="About Me" />
        
//         <motion.div 
//           ref={ref}
//           className="max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="text-lg mb-6">
//             I am a Computer Science graduate with a passion for building innovative solutions. With expertise in web development, 
//             machine learning, and problem-solving, I'm dedicated to creating efficient and user-friendly applications.
//           </p>
//           <p className="text-lg mb-8">
//             My technical journey began at Annamalai University, where I developed a strong foundation in computer science principles 
//             and software development. Since then, I've been continuously enhancing my skills through practical experience, internships, 
//             and personal projects.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-3"><User size={20} /></span>
//                   <div>
//                     <span className="font-medium">Name:</span>
//                     <span className="text-muted-foreground ml-2">Sabarivasan C</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-3"><Mail size={20} /></span>
//                   <div>
//                     <span className="font-medium">Email:</span>
//                     <span className="text-muted-foreground ml-2">vsabari146@gmail.com</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-3"><Phone size={20} /></span>
//                   <div>
//                     <span className="font-medium">Phone:</span>
//                     <span className="text-muted-foreground ml-2">+91 7806819922</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-3"><MapPin size={20} /></span>
//                   <div>
//                     <span className="font-medium">Location:</span>
//                     <span className="text-muted-foreground ml-2">Chidambaram, Tamil Nadu, India</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Languages</h3>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="font-medium">Tamil</span>
//                     <span className="text-muted-foreground">Native</span>
//                   </div>
//                   <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-primary rounded-full"
//                       initial={{ width: 0 }}
//                       animate={inView ? { width: "100%" } : { width: 0 }}
//                       transition={{ duration: 1, ease: "easeOut" }}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex justify-between mb-1">
//                     <span className="font-medium">English</span>
//                     <span className="text-muted-foreground">Fluent</span>
//                   </div>
//                   <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-primary rounded-full"
//                       initial={{ width: 0 }}
//                       animate={inView ? { width: "90%" } : { width: 0 }}
//                       transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-semibold mb-4 mt-8">Achievements</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center">
//                   <span className="text-secondary mr-3"><Trophy size={18} /></span>
//                   <span>Cleared TCS NQT with a score of 71.59%</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-secondary mr-3"><Code size={18} /></span>
//                   <span>Solved 250+ problems on LeetCode</span>
//                 </li>
//                 <li className="flex items-center">
//                   <span className="text-secondary mr-3"><Medal size={18} /></span>
//                   <span>Member of the state-level throwball team (2018 – 2020)</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/ui/section-heading";
import { User, Mail, Phone, MapPin, Globe, Trophy, Code, Medal } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 px-6 bg-muted/5">
      <div className="container mx-auto">
        <SectionHeading title="About Me" />
        
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto" // Increased to max-w-4xl for better alignment with content below
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left mb-8"> {/* Aligned text to the left for consistency */}
            <p className="text-lg mb-6">
              I am a Computer Science graduate with a passion for building innovative solutions. With expertise in web development, 
              machine learning, and problem-solving, I'm dedicated to creating efficient and user-friendly applications.
            </p>
            <p className="text-lg mb-8">
              My technical journey began at Annamalai University, where I developed a strong foundation in computer science principles 
              and software development. Since then, I've been continuously enhancing my skills through practical experience, internships, 
              and personal projects.
            </p>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center"> {/* Changed items-start to items-center for better alignment */}
                  <span className="text-primary mr-4"><User size={20} /></span>
                  <div>
                    <span className="font-medium">Name:</span>
                    <span className="text-muted-foreground ml-2">Sabarivasan C</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-4"><Mail size={20} /></span>
                  <div>
                    <span className="font-medium">Email:</span>
                    <span className="text-muted-foreground ml-2">vsabari146@gmail.com</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-4"><Phone size={20} /></span>
                  <div>
                    <span className="font-medium">Phone:</span>
                    <span className="text-muted-foreground ml-2">+91 7806819922</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-4"><MapPin size={20} /></span>
                  <div>
                    <span className="font-medium">Location:</span>
                    <span className="text-muted-foreground ml-2">Chidambaram, Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Tamil</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                  <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span className="text-muted-foreground">Fluent</span>
                  </div>
                  <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "90%" } : { width: 0 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
    </section>
  );
}