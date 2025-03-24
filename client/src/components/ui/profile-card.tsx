// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";

// interface ProfileCardProps {
//   title: string;
//   icon: JSX.Element;
//   iconColor: string;
//   totalSolved: string;
//   levels: { count: string; label: string; color: string }[];
//   profileUrl: string;
//   progressPercentage: number;
//   imageSrc?: string; // Add imageSrc as an optional prop
// }

// export default function ProfileCard({
//   title,
//   icon,
//   iconColor,
//   totalSolved,
//   levels,
//   profileUrl,
//   progressPercentage,
//   imageSrc,
// }: ProfileCardProps) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="bg-muted/5 border-muted/10">
//         <CardContent className="p-6">
//           <div className="flex items-center mb-4">
//             <span className={`text-3xl ${iconColor} mr-4`}>{icon}</span>
//             <h3 className="text-xl font-semibold">{title}</h3>
//           </div>
          
//           <div className="mb-6">
//             <div className="flex justify-between mb-2">
//               <span className="text-muted-foreground">Problems Solved</span>
//               <span className="font-semibold">{totalSolved}</span>
//             </div>
//             <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
//               <motion.div
//                 className={`h-full rounded-full`}
//                 style={{ backgroundColor: `var(--${iconColor})` }}
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: `${progressPercentage}%` } : { width: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-4 mb-6">
//             {levels.map((level, index) => (
//               <div key={index} className="bg-muted/10 p-3 rounded-lg text-center">
//                 <span className={`block font-semibold ${level.color}`}>{level.count}</span>
//                 <span className="text-muted-foreground text-sm">{level.label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Add the screenshot before the footer */}
//           {imageSrc && (
//             <div className="mb-6">
//               <img
//                 src={imageSrc}
//                 alt={`${title} Profile Screenshot`}
//                 className="w-full h-auto rounded-lg shadow-md object-contain"
//                 loading="lazy"
//               />
//             </div>
//           )}
//         </CardContent>
        
//         <CardFooter className="px-6 pb-6 pt-0">
//           <Button asChild>
//             <a href={profileUrl} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="mr-2 h-4 w-4" />
//               View Profile
//             </a>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";

// interface ProfileCardProps {
//   title: string;
//   icon: JSX.Element;
//   iconColor: string;
//   totalSolved: string;
//   levels: { count: string; label: string; color: string }[];
//   profileUrl: string;
//   progressPercentage: number;
//   imageSrc?: string;
// }

// export default function ProfileCard({
//   title,
//   icon,
//   iconColor,
//   totalSolved,
//   levels,
//   profileUrl,
//   progressPercentage,
//   imageSrc,
// }: ProfileCardProps) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="bg-muted/5 border-muted/10 w-full">
//         <CardContent className="p-8">
//           <div className="flex items-center mb-6">
//             <span className={`text-4xl ${iconColor} mr-4`}>{icon}</span>
//             <h3 className="text-2xl font-semibold">{title}</h3>
//           </div>
          
//           <div className="mb-8">
//             <div className="flex justify-between mb-3">
//               <span className="text-muted-foreground text-lg">Problems Solved</span>
//               <span className="font-semibold text-2xl">{totalSolved}</span>
//             </div>
//             <div className="h-3 bg-muted/20 rounded-full overflow-hidden">
//               <motion.div
//                 className={`h-full rounded-full`}
//                 style={{ backgroundColor: `var(--${iconColor})` }}
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: `${progressPercentage}%` } : { width: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-6 mb-8">
//             {levels.map((level, index) => (
//               <div key={index} className="bg-muted/10 p-4 rounded-lg text-center">
//                 <span className={`block font-semibold text-xl ${level.color}`}>{level.count}</span>
//                 <span className="text-muted-foreground text-base">{level.label}</span>
//               </div>
//             ))}
//           </div>

//           {imageSrc && (
//             <div className="mb-8">
//               <img
//                 src={imageSrc}
//                 alt={`${title} Profile Screenshot`}
//                 className="w-full h-auto rounded-lg shadow-md object-contain max-w-3xl mx-auto"
//                 loading="lazy"
//               />
//             </div>
//           )}
//         </CardContent>
        
//         <CardFooter className="px-8 pb-8 pt-0">
//           <Button asChild size="lg">
//             <a href={profileUrl} target="_blank" rel="noopener noreferrer">
//               <span className="flex items-center">
//                 <ExternalLink className="mr-2 h-5 w-5" />
//                 View Profile
//               </span>
//             </a>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";

// interface ProfileCardProps {
//   title: string;
//   icon: JSX.Element;
//   iconColor: string;
//   totalSolved: string;
//   levels: { count: string; label: string; color: string }[];
//   profileUrl: string;
//   progressPercentage: number;
//   imageSrc?: string;
// }

// export default function ProfileCard({
//   title,
//   icon,
//   iconColor,
//   totalSolved,
//   levels,
//   profileUrl,
//   progressPercentage,
//   imageSrc,
// }: ProfileCardProps) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="bg-muted/5 border-muted/10 w-full md:px-12"> {/* Increased padding */}
//         <CardContent className="p-12"> {/* Increased padding */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center">
//               <span className={`text-5xl ${iconColor} mr-4`}>{icon}</span> {/* Increased icon size */}
//               <h3 className="text-3xl font-semibold">{title}</h3> {/* Increased title size */}
//             </div>
//           </div>
          
//           <div className="mb-10 text-center">
//             <div className="mb-4">
//               <span className="text-muted-foreground text-xl block">Problems Solved</span> {/* Increased text size */}
//               <span className="font-semibold text-4xl">{totalSolved}</span> {/* Increased text size */}
//             </div>
//             <div className="h-4 bg-muted/20 rounded-full overflow-hidden max-w-lg mx-auto"> {/* Increased progress bar size */}
//               <motion.div
//                 className={`h-full rounded-full`}
//                 style={{ backgroundColor: `var(--${iconColor})` }}
//                 initial={{ width: 0 }}
//                 animate={inView ? { width: `${progressPercentage}%` } : { width: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//               />
//             </div>
//           </div>
          
//           <div className="grid grid-cols-3 gap-8 mb-10"> {/* Increased gap */}
//             {levels.map((level, index) => (
//               <div key={index} className="bg-muted/10 p-6 rounded-lg text-center"> {/* Increased padding */}
//                 <span className={`block font-semibold text-2xl ${level.color}`}>{level.count}</span> {/* Increased text size */}
//                 <span className="text-muted-foreground text-lg">{level.label}</span> {/* Increased text size */}
//               </div>
//             ))}
//           </div>

//           {imageSrc && (
//             <div className="mb-10">
//               <img
//                 src={imageSrc}
//                 alt={`${title} Profile Screenshot`}
//                 className="w-full h-auto rounded-lg shadow-md object-contain max-w-full mx-auto" // Changed to max-w-full
//                 loading="lazy"
//               />
//             </div>
//           )}
//         </CardContent>
        
//         <CardFooter className="px-12 pb-12 pt-0">
//           <Button asChild size="lg">
//             <a href={profileUrl} target="_blank" rel="noopener noreferrer">
//               <span className="flex items-center">
//                 <ExternalLink className="mr-2 h-6 w-6" /> {/* Increased icon size */}
//                 View Profile
//               </span>
//             </a>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }
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
  imageSrc?: string;
}

export default function ProfileCard({
  title,
  icon,
  iconColor,
  totalSolved,
  levels,
  profileUrl,
  progressPercentage,
  imageSrc,
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
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-muted/5 border-muted/10 w-full md:px-12">
        <CardContent className="p-12">
          <div className="flex items-center justify-center mb-8"> {/* Changed to justify-center */}
            <div className="flex items-center mr-20">
              <span className={`text-5xl ${iconColor} mr-8`}>{icon}</span>
              <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
          </div>
          
          <div className="mb-10 text-center">
            <div className="mb-4">
              <span className="text-muted-foreground text-xl block">Problems Solved</span>
              <span className="font-semibold text-4xl">{totalSolved}</span>
            </div>
            <div className="h-4 bg-muted/20 rounded-full overflow-hidden max-w-lg mx-auto">
              <motion.div
                className={`h-full rounded-full`}
                style={{ backgroundColor: `var(--${iconColor})` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${progressPercentage}%` } : { width: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-10">
            {levels.map((level, index) => (
              <div key={index} className="bg-muted/10 p-6 rounded-lg text-center">
                <span className={`block font-semibold text-2xl ${level.color}`}>{level.count}</span>
                <span className="text-muted-foreground text-lg">{level.label}</span>
              </div>
            ))}
          </div>

          {imageSrc && (
            <div className="mb-10">
              <img
                src={imageSrc}
                alt={`${title} Profile Screenshot`}
                className="w-full h-auto rounded-lg shadow-md object-contain max-w-full mx-auto"
                loading="lazy"
              />
            </div>
          )}
        </CardContent>
        
        <CardFooter className="px-12 pb-12 pt-0">
          <Button asChild size="lg">
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center">
                <ExternalLink className="mr-2 h-6 w-6" />
                View Profile
              </span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}