import type { Metadata } from "next";
import { Inter, Orbitron, Prompt } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-prompt" });

const themeInitScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      const theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

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
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${prompt.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
