import type { Language } from "./translations";

export interface FeaturedProject {
  title: string;
  label: string;
  description: string;
  highlights: string[];
  tags: string[];
  demo: string;
  preview: "finance" | "student" | "canteen";
}

export const featuredProjects: Record<Language, FeaturedProject[]> = {
  en: [
    { title: "Fishy Game — AI Party Game for Android", label: "Mobile Application", description: "A party and hidden-role game designed for a group to play together on a single smartphone. Players pass the phone around to receive their roles and move through each phase. Before every round, the application uses OpenAI to generate new questions and illustrations automatically. The content is adapted to the selected category and the players’ age group, including children, teenagers, and adults. Players are randomly assigned as the Hunter, Blue Fish, or Red Fish, while the application manages role distribution, storytelling, hunting, round summaries, and score calculation.", highlights: ["Fresh AI content in every game::Uses gpt-4o-mini to generate questions, validate the content, and create illustrations that match each round.", "Automatic game-rule management::Randomly assigns hidden roles, controls the play sequence, and calculates scores at the end of each round.", "On-device data storage::Stores play history, game details, accumulated scores, and leaderboards in a SQLite database."], tags: ["C#", ".NET MAUI", "XAML", "SQLite", "OpenAI API"], demo: "#contact", preview: "finance" },
    { title: "Student Service — Campus Portal", label: "Academic Project", description: "A unified student portal for service requests, appointments, announcements, and transparent status tracking.", highlights: ["Submit and follow requests through a clear step-by-step flow", "Help staff prioritize work with a focused operations dashboard"], tags: ["React", "Node.js", "REST API", "PostgreSQL", "Figma"], demo: "#contact", preview: "student" },
    { title: "Smart Canteen — Live Occupancy", label: "IoT Project", description: "A live canteen occupancy experience that helps students find available seats and avoid the busiest periods.", highlights: ["Display real-time occupancy from lightweight IoT sensors", "Forecast peak periods using historical usage patterns"], tags: ["ESP32", "Python", "MQTT", "Next.js", "TimescaleDB"], demo: "#contact", preview: "canteen" },
  ],
  th: [
    { title: "Fishy Game — เกมปาร์ตี้พลัง AI สำหรับ Android", label: "โมบายแอปพลิเคชัน", description: "เกมแนวปาร์ตี้และบทบาทลับที่ออกแบบมาให้เล่นร่วมกันผ่านสมาร์ตโฟนเพียงเครื่องเดียว โดยผู้เล่นจะส่งโทรศัพท์ต่อกันเพื่อรับบทบาทและดำเนินเกมในแต่ละช่วง ก่อนเริ่มรอบ ระบบจะใช้ AI จาก OpenAI สร้างคำถามและภาพประกอบใหม่โดยอัตโนมัติ เนื้อหาจะถูกปรับให้เหมาะกับหมวดหมู่ที่เลือก รวมถึงช่วงอายุของผู้เล่น เช่น เด็ก วัยรุ่น และผู้ใหญ่ ภายในเกม ผู้เล่นจะถูกสุ่มให้รับบทเป็น Hunter, Blue Fish หรือ Red Fish โดยแอปจะดูแลขั้นตอนทั้งหมด ตั้งแต่การแจกบทบาท ช่วงเล่าเรื่อง ช่วงตามล่า ไปจนถึงการสรุปและคำนวณคะแนน", highlights: ["เนื้อหาใหม่จาก AI ในทุกเกม::ใช้ gpt-4o-mini สำหรับสร้างคำถาม พร้อมกระบวนการตรวจสอบเนื้อหาและสร้างภาพประกอบให้สอดคล้องกับแต่ละรอบ", "ระบบจัดการกติกาอัตโนมัติ::สุ่มและแจกบทบาทลับให้กับผู้เล่น ควบคุมลำดับการเล่น และคำนวณคะแนนเมื่อจบรอบ", "บันทึกข้อมูลภายในอุปกรณ์::จัดเก็บประวัติการเล่น รายละเอียดของแต่ละเกม คะแนนสะสม และตารางจัดอันดับด้วยฐานข้อมูล SQLite"], tags: ["C#", ".NET MAUI", "XAML", "SQLite", "OpenAI API"], demo: "#contact", preview: "finance" },
    { title: "Student Service — ระบบบริการนักศึกษา", label: "โปรเจกต์ในรายวิชา", description: "ศูนย์รวมบริการนักศึกษาสำหรับส่งคำร้อง นัดหมาย ติดตามข่าวสาร และตรวจสอบสถานะได้อย่างโปร่งใส", highlights: ["ส่งและติดตามคำร้องผ่านขั้นตอนที่ชัดเจน", "ช่วยเจ้าหน้าที่จัดลำดับงานด้วยแดชบอร์ดที่ใช้งานง่าย"], tags: ["React", "Node.js", "REST API", "PostgreSQL", "Figma"], demo: "#contact", preview: "student" },
    { title: "Smart Canteen — ระบบตรวจสอบที่นั่ง", label: "โปรเจกต์ IoT", description: "ระบบแสดงจำนวนที่นั่งว่างแบบเรียลไทม์ ช่วยให้นักศึกษาหาที่นั่งและหลีกเลี่ยงช่วงเวลาที่มีผู้ใช้บริการหนาแน่น", highlights: ["แสดงจำนวนผู้ใช้งานแบบเรียลไทม์จากเซนเซอร์ IoT", "คาดการณ์ช่วงเวลาหนาแน่นจากข้อมูลการใช้งานย้อนหลัง"], tags: ["ESP32", "Python", "MQTT", "Next.js", "TimescaleDB"], demo: "#contact", preview: "canteen" },
  ],
};

export const aiTutorDetails = {
  en: {
    label: "CS460 COURSE PROJECT",
    title: "AI Tutor — Adaptive Learning Assistant",
    description: "A CS460 course project developed to teach content at a level suited to each learner’s existing knowledge. Users can select an available subject or create a new course, upload learning materials, and submit questions to the system. Gemini analyzes each learner’s answers to estimate their understanding, explains the content at an appropriate level, and generates exercises for further review and improvement.",
    highlights: [
      { title: "A structured learning process", text: "The system follows an assess → explain → practice sequence. Gemini uses the learner’s answers to determine the appropriate level and teaching approach." },
      { title: "User-created courses and document support", text: "Users can attach PDF, TXT, and MD files as references for the AI, create new courses, and store course information locally." },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Axios", "Gemini API"],
  },
  th: {
    label: "โปรเจกต์ในรายวิชา CS460",
    title: "AI Tutor — Adaptive Learning Assistant",
    description: "โปรเจกต์ในรายวิชา CS460 ที่พัฒนาขึ้นเพื่อช่วยสอนเนื้อหาให้เหมาะกับพื้นฐานของผู้เรียนแต่ละคน ผู้ใช้สามารถเลือกวิชาที่มีอยู่หรือสร้างรายวิชาใหม่ พร้อมอัปโหลดเอกสารประกอบการเรียนและส่งคำถามเข้าสู่ระบบ Gemini จะวิเคราะห์คำตอบของผู้เรียนเพื่อประเมินระดับความเข้าใจ จากนั้นจึงอธิบายเนื้อหาในระดับที่เหมาะสม และสร้างแบบฝึกหัดเพื่อช่วยทบทวนและพัฒนาความรู้เพิ่มเติม",
    highlights: [
      { title: "กระบวนการเรียนรู้แบบเป็นขั้นตอน", text: "ระบบทำงานตามลำดับ ประเมินความรู้ → อธิบายเนื้อหา → สร้างแบบฝึกหัด โดย Gemini จะใช้ผลการตอบคำถามในการกำหนดระดับและรูปแบบการสอน" },
      { title: "รองรับเอกสารและรายวิชาที่ผู้ใช้สร้างเอง", text: "สามารถแนบไฟล์ PDF, TXT และ MD เพื่อใช้เป็นข้อมูลอ้างอิงให้ AI รวมถึงเพิ่มรายวิชาใหม่และจัดเก็บข้อมูลไว้ภายในเครื่องได้" },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Axios", "Gemini API"],
  },
} as const;

export const weightBasedInventoryDetails = {
  en: {
    label: "IoT PROJECT",
    title: "Weight-based Inventory",
    description: "Weight-based Inventory is an IoT inventory monitoring system that connects an ESP32 to weight sensors installed beneath product containers. When an item is removed, the system calculates the change in weight and displays the remaining quantity in real time, making stock checks faster, easier, and more accurate.",
    tags: ["Arduino IDE", "ESP32"],
  },
  th: {
    label: "โปรเจกต์ IoT",
    title: "Weight-based Inventory",
    description: "Weight-based Inventory คือระบบตรวจสอบสินค้าคงคลังแบบ IoT โดยใช้ ESP32 เชื่อมต่อกับเซ็นเซอร์วัดน้ำหนักที่ติดตั้งใต้ภาชนะสินค้า เมื่อมีการหยิบสินค้าออก ระบบจะคำนวณน้ำหนักที่เปลี่ยนแปลงและแสดงจำนวนสินค้าที่เหลือแบบเรียลไทม์ ช่วยให้ตรวจสอบสต็อกได้สะดวก รวดเร็ว และแม่นยำยิ่งขึ้น",
    tags: ["Arduino IDE", "ESP32"],
  },
} as const;

export const bankersAlgorithmDetails = {
  en: {
    label: "CS422 COURSE PROJECT",
    title: "Banker’s Algorithm Simulator",
    description: "A Banker’s Algorithm simulator designed to make resource allocation and deadlock avoidance in operating systems easier to understand. Users can define the number of processes and resource types, enter Max and Allocation values, calculate Need, check whether the system is in a safe state, and follow the simulation one step at a time.",
    highlights: [
      { title: "Create and manage simulation data", text: "Generate Max and Allocation tables from the selected process and resource counts, with controls for resetting all entered data." },
      { title: "Calculate and verify system safety", text: "Compute the Need matrix and check whether the simulated resource allocation is in a safe state." },
      { title: "Step-by-step simulation", text: "Use Next Step to inspect each stage of the algorithm and Reset Simulation to start the walkthrough again." },
    ],
    tags: ["Figma", "Banker’s Algorithm", "Operating Systems"],
  },
  th: {
    label: "โปรเจกต์ในรายวิชา CS422",
    title: "โปรแกรมจำลอง Banker’s Algorithm",
    description: "โปรแกรมจำลอง Banker’s Algorithm ที่ออกแบบมาเพื่อช่วยให้เข้าใจการจัดสรรทรัพยากรและการหลีกเลี่ยงภาวะติดตายในระบบปฏิบัติการได้ง่ายขึ้น ผู้ใช้สามารถกำหนดจำนวน Process และ Resource Type กรอกค่า Max และ Allocation คำนวณค่า Need ตรวจสอบว่าระบบอยู่ใน Safe State หรือไม่ และติดตามการจำลองทีละขั้นตอน",
    highlights: [
      { title: "สร้างและจัดการข้อมูลจำลอง", text: "สร้างตาราง Max และ Allocation จากจำนวน Process และ Resource ที่กำหนด พร้อมรีเซ็ตข้อมูลทั้งหมดได้" },
      { title: "คำนวณและตรวจสอบความปลอดภัย", text: "คำนวณตาราง Need และตรวจสอบว่าการจัดสรรทรัพยากรที่จำลองขึ้นอยู่ใน Safe State หรือไม่" },
      { title: "แสดงการทำงานทีละขั้นตอน", text: "ใช้ Next Step เพื่อตรวจสอบแต่ละขั้นของอัลกอริทึม และใช้ Reset Simulation เพื่อเริ่มการจำลองใหม่" },
    ],
    tags: ["Figma", "Banker’s Algorithm", "Operating Systems"],
  },
} as const;
