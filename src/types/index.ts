export type ProjectCategory = "Web Application" | "Mobile Application" | "UI/UX Design" | "IoT" | "Academic Project";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  role: string;
  tags: string[];
  accent: string;
  metric: string;
  icon: "wallet" | "users" | "wifi" | "note" | "scan" | "building";
}

export interface TimelineItem {
  year: string;
  title: string;
  meta: string;
  description: string;
  tag: string;
}
