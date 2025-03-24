// import SectionHeading from "@/components/ui/section-heading";
// import ProfileCard from "@/components/ui/profile-card";
// import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// export default function CodingProfiles() {
//   return (
//     <section id="coding-profiles" className="py-16 px-6">
//       <div className="container mx-auto">
//         <SectionHeading title="Coding Profiles" />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           <ProfileCard
//             title="LeetCode"
//             icon={<SiLeetcode />}
//             iconColor="text-yellow-500"
//             totalSolved="250+"
//             levels={[
//               { count: "150+", label: "Easy", color: "text-green-500" },
//               { count: "75+", label: "Medium", color: "text-yellow-500" },
//               { count: "25+", label: "Hard", color: "text-red-500" }
//             ]}
//             profileUrl="https://leetcode.com/u/vsabari146/"
//             progressPercentage={75}
//           />
          
//           <ProfileCard
//             title="GeeksforGeeks"
//             icon={<SiGeeksforgeeks />}
//             iconColor="text-green-500"
//             totalSolved="50+"
//             levels={[
//               { count: "25+", label: "School", color: "text-green-500" },
//               { count: "20+", label: "Basic", color: "text-yellow-500" },
//               { count: "5+", label: "Medium", color: "text-orange-500" }
//             ]}
//             profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
//             progressPercentage={60}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// import SectionHeading from "@/components/ui/section-heading";
// import ProfileCard from "@/components/ui/profile-card";
// import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// export default function CodingProfiles() {
//   return (
//     <section id="coding-profiles" className="py-16 px-6">
//       <div className="container mx-auto">
//         <SectionHeading title="Coding Profiles" />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* LeetCode Profile Card and Screenshot */}
//           <div className="flex flex-col items-center">
//             <ProfileCard
//               title="LeetCode"
//               icon={<SiLeetcode />}
//               iconColor="text-yellow-500"
//               totalSolved="250+"
//               levels={[
//                 { count: "130+", label: "Easy", color: "text-green-500" },
//                 { count: "100+", label: "Medium", color: "text-yellow-500" },
//                 { count: "25+", label: "Hard", color: "text-red-500" }
//               ]}
//               profileUrl="https://leetcode.com/u/vsabari146/"
//               progressPercentage={75}
//             />
//             {/* Space for LeetCode Screenshot */}
//             <div className="mt-4 w-full">
//               <img
//                 src="\leetcode.png"
//                 alt="LeetCode Profile Screenshot"
//                 className="w-full h-auto rounded-lg shadow-md object-contain max-w-xs mx-auto"
//                 loading="lazy"
//               />
//             </div>
//           </div>
          
//           {/* GeeksforGeeks Profile Card and Screenshot */}
//           <div className="flex flex-col items-center">
//             <ProfileCard
//               title="GeeksforGeeks"
//               icon={<SiGeeksforgeeks />}
//               iconColor="text-green-500"
//               totalSolved="50+"
//               levels={[
//                 { count: "25+", label: "Basic", color: "text-green-500" },
//                 { count: "20+", label: "Easy", color: "text-yellow-500" },
//                 { count: "5+", label: "Medium", color: "text-orange-500" }
//               ]}
//               profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
//               progressPercentage={60}
//             />
//             {/* Space for GeeksforGeeks Screenshot */}
//             <div className="mt-4 w-full">
//               <img
//                 src="\geeks.png"
//                 alt="GeeksforGeeks Profile Screenshot"
//                 className="w-full h-auto rounded-lg shadow-md object-contain max-w-xs mx-auto"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import SectionHeading from "@/components/ui/section-heading";
// import ProfileCard from "@/components/ui/profile-card";
// import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// export default function CodingProfiles() {
//   return (
//     <section id="coding-profiles" className="py-16 px-6">
//       <div className="container mx-auto">
//         <SectionHeading title="Coding Profiles" />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           <div className="flex flex-col items-center">
//             <ProfileCard
//               title="LeetCode"
//               icon={<SiLeetcode />}
//               iconColor="text-yellow-500"
//               totalSolved="250+"
//               levels={[
//                 { count: "130+", label: "Easy", color: "text-green-500" },
//                 { count: "100+", label: "Medium", color: "text-yellow-500" },
//                 { count: "25+", label: "Hard", color: "text-red-500" }
//               ]}
//               profileUrl="https://leetcode.com/u/vsabari146/"
//               progressPercentage={75}
//               imageSrc="\leetcode.png" // Pass the image path to ProfileCard
//             />
//           </div>
          
//           <div className="flex flex-col items-center">
//             <ProfileCard
//               title="GeeksforGeeks"
//               icon={<SiGeeksforgeeks />}
//               iconColor="text-green-500"
//               totalSolved="50+"
//               levels={[
//                 { count: "25+", label: "Basic", color: "text-green-500" },
//                 { count: "20+", label: "Easy", color: "text-yellow-500" },
//                 { count: "5+", label: "Medium", color: "text-orange-500" }
//               ]}
//               profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
//               progressPercentage={60}
//               imageSrc="\geeks.png" // Pass the image path to ProfileCard
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import SectionHeading from "@/components/ui/section-heading";
// import ProfileCard from "@/components/ui/profile-card";
// import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// export default function CodingProfiles() {
//   return (
//     <section id="coding-profiles" className="py-16 px-6">
//       <div className="container mx-auto">
//         <SectionHeading title="Coding Profiles" />
        
//         <div className="flex flex-col gap-8">
//           {/* LeetCode Section - Full Width */}
//           <div className="w-full">
//             <ProfileCard
//               title="LeetCode"
//               icon={<SiLeetcode />}
//               iconColor="text-yellow-500"
//               totalSolved="250+"
//               levels={[
//                 { count: "130+", label: "Easy", color: "text-green-500" },
//                 { count: "100+", label: "Medium", color: "text-yellow-500" },
//                 { count: "25+", label: "Hard", color: "text-red-500" }
//               ]}
//               profileUrl="https://leetcode.com/u/vsabari146/"
//               progressPercentage={75}
//               imageSrc="\leetcode.png"
//             />
//           </div>
          
//           {/* GeeksforGeeks Section - Below LeetCode */}
//           <div className="w-full max-w-lg mx-auto">
//             <ProfileCard
//               title="GeeksforGeeks"
//               icon={<SiGeeksforgeeks />}
//               iconColor="text-green-500"
//               totalSolved="50+"
//               levels={[
//                 { count: "25+", label: "Basic", color: "text-green-500" },
//                 { count: "20+", label: "Easy", color: "text-yellow-500" },
//                 { count: "5+", label: "Medium", color: "text-orange-500" }
//               ]}
//               profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
//               progressPercentage={60}
//               imageSrc="\geeks.png"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import SectionHeading from "@/components/ui/section-heading";
import ProfileCard from "@/components/ui/profile-card";
import { User, Mail, Phone, MapPin, Globe, Trophy, Code, Medal } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-12 px-0"> {/* Removed px-6 for full-screen */}
      <div className="w-full">
        <SectionHeading title="Coding Profiles" />
        
        <div className="flex flex-col gap-6">
          {/* LeetCode Section - Full Width */}
          <div className="w-full max-w-4xl mx-auto px-6">
            <ProfileCard
              title="LeetCode"
              icon={<SiLeetcode />}
              iconColor="text-yellow-500"
              totalSolved="250+"
              levels={[
                { count: "130+", label: "Easy", color: "text-green-500" },
                { count: "100+", label: "Medium", color: "text-yellow-500" },
                { count: "8+", label: "Hard", color: "text-red-500" }
              ]}
              profileUrl="https://leetcode.com/u/vsabari146/"
              progressPercentage={75}
              imageSrc="\leetcode.png"
            />
          </div>
          
          {/* GeeksforGeeks Section - Below LeetCode */}
          <div className="w-full max-w-4xl mx-auto px-6"> {/* Added px-6 for GeeksforGeeks */}
            <ProfileCard
              title="GeeksforGeeks"
              icon={<SiGeeksforgeeks />}
              iconColor="text-green-500"
              totalSolved="50+"
              levels={[
                { count: "25+", label: "Basic", color: "text-green-500" },
                { count: "20+", label: "Easy", color: "text-yellow-500" },
                { count: "5+", label: "Medium", color: "text-orange-500" }
              ]}
              profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
              progressPercentage={60}
              imageSrc="\geeks.png"
            />
          </div>
        </div>
        
      </div>
      <SectionHeading title="Achievement" />
          <ul className="space-y-3">
            <li className="flex items-center justify-center">
              <span className="text-secondary mr-4"><Trophy size={18} /></span>
              <span>Cleared TCS NQT with a score of 71.59%</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-secondary mr-4"><Code size={18} /></span>
              <span>Solved 250+ problems on LeetCode</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-secondary mr-4"><Medal size={18} /></span>
              <span>Member of the state-level throwball team (2018 – 2020)</span>
            </li>
          </ul>
    </section>
  );
}