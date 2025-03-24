// Project type
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

// Certification type
export interface Certification {
  title: string;
  skills: string[];
  issueDate: string;
  url?: string;
}

// Contact form type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Timeline item type
export interface TimelineItemData {
  title: string;
  subtitle: string;
  date: string;
  points: string[];
}

// Education item type
export interface EducationItemData {
  degree: string;
  institution: string;
  period: string;
  score: string;
  description?: string;
  achievements?: string[];
}

// Skill category type
export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

// Coding profile type
export interface CodingProfile {
  platform: string;
  icon: JSX.Element;
  iconColor: string;
  totalSolved: string;
  levels: {
    count: string;
    label: string;
    color: string;
  }[];
  profileUrl: string;
  progressPercentage: number;
}
