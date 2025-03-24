import SectionHeading from "@/components/ui/section-heading";
import ProfileCard from "@/components/ui/profile-card";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-16 px-6">
      <div className="container mx-auto">
        <SectionHeading title="Coding Profiles" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProfileCard
            title="LeetCode"
            icon={<SiLeetcode />}
            iconColor="text-yellow-500"
            totalSolved="250+"
            levels={[
              { count: "150+", label: "Easy", color: "text-green-500" },
              { count: "75+", label: "Medium", color: "text-yellow-500" },
              { count: "25+", label: "Hard", color: "text-red-500" }
            ]}
            profileUrl="https://leetcode.com/u/vsabari146/"
            progressPercentage={75}
          />
          
          <ProfileCard
            title="GeeksforGeeks"
            icon={<SiGeeksforgeeks />}
            iconColor="text-green-500"
            totalSolved="50+"
            levels={[
              { count: "25+", label: "School", color: "text-green-500" },
              { count: "20+", label: "Basic", color: "text-yellow-500" },
              { count: "5+", label: "Medium", color: "text-orange-500" }
            ]}
            profileUrl="https://www.geeksforgeeks.org/user/vsabara3hq/"
            progressPercentage={60}
          />
        </div>
      </div>
    </section>
  );
}
