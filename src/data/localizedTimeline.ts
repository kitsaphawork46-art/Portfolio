import type { Language } from "./translations";
import type { TimelineItem } from "@/types";

export const localizedActivities: Record<Language, TimelineItem[]> = {
  en: [
    { year: "2026", title: "IT Empowering Day 2026: In the Era of AI — Bangkok University", meta: "21 May 2026 · BU Diamond Hall", description: "Team 65 Gram was selected as one of the 10 finalists in the Industry-driven Innovation Project category and had the opportunity to present the project to judges from AWS, KBTG, and BorntoDev for the Best AI Prototype for Real-World Impact Award.", tag: "Smart Laboratory Management System — Pitching Round" },
    { year: "2025", title: "Developer Student Club", meta: "University · Core Team", description: "Led practical web workshops and mentored first-year students through their first deployed projects.", tag: "Community" },
    { year: "2024", title: "Code for Community", meta: "Remote · Volunteer", description: "Redesigned a volunteer coordination flow and reduced repetitive administrative steps.", tag: "Volunteer" },
  ],
  th: [
    { year: "2026", title: "IT Empowering Day 2026: In the Era of AI — มหาวิทยาลัยกรุงเทพ", meta: "21 พฤษภาคม 2569 · BU Diamond Hall", description: "ทีม 65กรัม ได้รับเลือกให้เป็นหนึ่งใน 10 ทีมสุดท้าย ในประเภท Industry-driven Innovation Project และมีโอกาสนำเสนอผลงานต่อคณะกรรมการจาก AWS, KBTG และ BorntoDev เพื่อชิงรางวัล Best AI Prototype for Real-World Impact", tag: "ผลงานระบบบริหารจัดการห้องแล็บอัจฉริยะ — รอบ Pitching" },
    { year: "2025", title: "Developer Student Club", meta: "มหาวิทยาลัย · ทีมแกนนำ", description: "จัดเวิร์กช็อปพัฒนาเว็บไซต์เชิงปฏิบัติและให้คำแนะนำนักศึกษาชั้นปีที่ 1 ในการนำโปรเจกต์แรกขึ้นใช้งานจริง", tag: "ชุมชนนักพัฒนา" },
    { year: "2024", title: "Code for Community", meta: "ออนไลน์ · อาสาสมัคร", description: "ออกแบบขั้นตอนประสานงานอาสาสมัครใหม่เพื่อลดงานจัดการที่ซ้ำซ้อน", tag: "อาสาสมัคร" },
  ],
};

export const localizedExperience: Record<Language, TimelineItem[]> = {
  en: [
    { year: "2026", title: "Software Developer Intern", meta: "Nova Digital · Hybrid", description: "Built reusable React interfaces, integrated APIs, and collaborated with designers through weekly product iterations.", tag: "Internship" },
    { year: "2025", title: "Freelance Frontend Developer", meta: "Independent · Remote", description: "Delivered responsive marketing and dashboard experiences with maintainable components and clear handoff notes.", tag: "Freelance" },
    { year: "2024", title: "University Project Lead", meta: "Faculty of Computing", description: "Coordinated a five-person agile team from discovery and prototyping through testing and final presentation.", tag: "Team Project" },
  ],
  th: [
    { year: "2026", title: "นักศึกษาฝึกงานด้านพัฒนาซอฟต์แวร์", meta: "Nova Digital · รูปแบบผสม", description: "พัฒนา React Components ที่นำกลับมาใช้ซ้ำได้ เชื่อมต่อ API และทำงานร่วมกับนักออกแบบผ่านการปรับปรุงผลิตภัณฑ์รายสัปดาห์", tag: "ฝึกงาน" },
    { year: "2025", title: "นักพัฒนา Frontend อิสระ", meta: "อิสระ · ทำงานทางไกล", description: "พัฒนาเว็บไซต์การตลาดและแดชบอร์ดที่รองรับทุกหน้าจอ ด้วย Components ที่ดูแลต่อได้ง่ายและมีเอกสารส่งมอบชัดเจน", tag: "ฟรีแลนซ์" },
    { year: "2024", title: "หัวหน้าทีมโปรเจกต์มหาวิทยาลัย", meta: "คณะเทคโนโลยีสารสนเทศ", description: "ประสานงานทีม Agile จำนวน 5 คน ตั้งแต่ค้นหาปัญหา สร้างต้นแบบ ทดสอบ ไปจนถึงนำเสนอผลงาน", tag: "โปรเจกต์ทีม" },
  ],
};
