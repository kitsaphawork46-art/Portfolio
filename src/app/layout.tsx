import type { Metadata } from "next";
import { Inter, Orbitron, Prompt } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-prompt" });

export const metadata: Metadata = {
  title: "KITSAPHA AINPUEAI — Frontend Developer / Tester",
  description: "Portfolio of Kitsapha Ainpueai, a fourth-year Computer Science student interested in frontend development and software testing.",
  openGraph: {
    title: "KITSAPHA AINPUEAI — Frontend Developer / Tester",
    description: "A portfolio of frontend projects, software testing, activities, skills, and certifications.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${orbitron.variable} ${prompt.variable}`}><body>{children}</body></html>;
}
