import type { Metadata } from "next";
import { Inter, Orbitron, Prompt } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-prompt" });

export const metadata: Metadata = {
  title: "KITSAPHA AINPUEAI — Software Developer",
  description: "Portfolio of Kitsapha Ainpueai, a software developer building thoughtful digital products.",
  openGraph: { title: "KITSAPHA AINPUEAI — Software Developer", description: "Ideas into impact, one line at a time.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${orbitron.variable} ${prompt.variable}`}><body>{children}</body></html>;
}
