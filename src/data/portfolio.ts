import { Project, TimelineItem } from "@/types";

export const projects: Project[] = [
  { title: "CashFlow Tracker", category: "Web Application", description: "A clear personal finance dashboard that turns daily transactions into useful spending insights.", role: "Full-stack developer", tags: ["Next.js", "TypeScript", "PostgreSQL"], accent: "#22d3ee", metric: "Finance · 2026", icon: "wallet" },
  { title: "Student Service System", category: "Academic Project", description: "A unified portal for requests, appointments, and real-time status updates across campus services.", role: "UX & frontend lead", tags: ["React", "Node.js", "REST API"], accent: "#8b5cf6", metric: "Campus · 2025", icon: "users" },
  { title: "Smart Canteen Occupancy", category: "IoT", description: "Live seat availability and peak-time forecasting for a more efficient campus lunch experience.", role: "IoT & dashboard developer", tags: ["ESP32", "Python", "MQTT"], accent: "#38bdf8", metric: "IoT · 2025", icon: "wifi" },
  { title: "Orbit Notes", category: "Mobile Application", description: "A focused cross-device note workspace with offline-first sync and thoughtful keyboard navigation.", role: "Mobile developer", tags: ["React Native", "SQLite", "Figma"], accent: "#2563eb", metric: "Mobile · 2025", icon: "note" },
  { title: "Face Recognition + 2FA Lab", category: "Academic Project", description: "Layered identity verification for restricted laboratories with transparent audit trails.", role: "ML & backend developer", tags: ["Python", "OpenCV", "FastAPI"], accent: "#22d3ee", metric: "Security · 2024", icon: "scan" },
  { title: "Employee Management", category: "UI/UX Design", description: "A human-centered operations suite for onboarding, time tracking, and team performance.", role: "Product designer & developer", tags: ["C#", "XAML", "Figma"], accent: "#a78bfa", metric: "Desktop · 2024", icon: "building" },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["C#", "Python", "HTML & CSS"] },
  { title: "Frameworks & Libraries", items: ["Next.js", "React", "Tailwind CSS", ".NET MAUI", "CommunityToolkit.Mvvm"] },
  { title: "Databases", items: ["SQLite", "MySQL"] },
  { title: "Tools & Technologies", items: ["Git & GitHub", "Visual Studio", "VS Code", "Figma", "Node-RED", "Arduino", "ESP32"] },
];

export const activities: TimelineItem[] = [
  { year: "2026", title: "National Software Hackathon", meta: "Bangkok · Product Engineer", description: "Built an accessibility-first community reporting prototype with a four-person team in 36 hours.", tag: "Finalist" },
  { year: "2025", title: "Developer Student Club", meta: "University · Core Team", description: "Led practical web workshops and mentored first-year students through their first deployed projects.", tag: "Community" },
  { year: "2024", title: "Code for Community", meta: "Remote · Volunteer", description: "Redesigned a volunteer coordination flow and reduced repetitive administrative steps.", tag: "Volunteer" },
];

export const experience: TimelineItem[] = [
  { year: "2026", title: "Software Developer Intern", meta: "Nova Digital · Hybrid", description: "Built reusable React interfaces, integrated APIs, and collaborated with designers through weekly product iterations.", tag: "Internship" },
  { year: "2025", title: "Freelance Frontend Developer", meta: "Independent · Remote", description: "Delivered responsive marketing and dashboard experiences with maintainable components and clear handoff notes.", tag: "Freelance" },
  { year: "2024", title: "University Project Lead", meta: "Faculty of Computing", description: "Coordinated a five-person agile team from discovery and prototyping through testing and final presentation.", tag: "Team Project" },
];

export const certifications = [
  { title: "Cybersecurity Foundation Course", titleTh: "หลักสูตรพื้นฐานด้านความมั่นคงปลอดภัยไซเบอร์", issuer: "National Cyber Security Agency (NCSA)", issuerTh: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)", date: "23 Oct 2025", dateTh: "23 ต.ค. 2568", code: "4634491626KA", image: "/certificates/cybersecurity-foundation.jpg" },
  { title: "Official Practice Exam: AWS Certified AI Practitioner", titleTh: "แบบทดสอบฝึกปฏิบัติอย่างเป็นทางการ: AWS Certified AI Practitioner", issuer: "AWS Training & Certification", issuerTh: "AWS Training & Certification", date: "26 Apr 2026", dateTh: "26 เม.ย. 2569", code: "AIF-C01", image: "/certificates/aws-ai-practitioner.jpg" },
  { title: "AI Governance & Ethics", titleTh: "ธรรมาภิบาลและจริยธรรมปัญญาประดิษฐ์", issuer: "Thailand Digital Government Academy (TDGA)", issuerTh: "สถาบันพัฒนาบุคลากรภาครัฐด้านดิจิทัล (TDGA)", date: "21 Nov 2025", dateTh: "21 พ.ย. 2568", code: "a5e727cf", image: "/certificates/ai-governance-ethics.jpg" },
  { title: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate", titleTh: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate", issuer: "Oracle University", issuerTh: "Oracle University", date: "10 May 2025", dateTh: "10 พ.ค. 2568", code: "101617241OMBPHCMCFA1", image: "/certificates/oracle-hcm-foundations.png" },
  { title: "Oracle Fusion Cloud Applications ERP Certified Foundations Associate", titleTh: "Oracle Fusion Cloud Applications ERP Certified Foundations Associate", issuer: "Oracle University", issuerTh: "Oracle University", date: "11 May 2025", dateTh: "11 พ.ค. 2568", code: "101617241OMBPERPCFA1", image: "/certificates/oracle-erp-foundations.png" },
  { title: "AWS Academy Graduate — Machine Learning Foundations", titleTh: "AWS Academy Graduate — พื้นฐานการเรียนรู้ของเครื่อง", issuer: "AWS Academy", issuerTh: "AWS Academy", date: "2 Jun 2026", dateTh: "2 มิ.ย. 2569", code: "iv2SGWTn", image: "/certificates/aws-machine-learning-foundations.png" },
];
