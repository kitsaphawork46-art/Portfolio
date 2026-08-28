"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowRight,
  ChevronLeft, ChevronRight, ChevronUp, Code2, ExternalLink,
  Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Phone, Play,
  Moon, Sparkles, Sun, X,
} from "lucide-react";
import { certifications, skillGroups } from "@/data/portfolio";
import { aiTutorDetails, bankersAlgorithmDetails, featuredProjects, weightBasedInventoryDetails, zenithDetails } from "@/data/featuredProjects";
import { localizedActivities } from "@/data/localizedTimeline";
import { Language, translations } from "@/data/translations";

const nav = ["home", "about", "projects", "skills", "activities", "certifications", "contact"] as const;
type Theme = "light" | "dark";
const zenithImages = Array.from({ length: 10 }, (_, index) => `/projects/zenith/${index + 1}.png`);
const projectImages = Array.from({ length: 18 }, (_, index) => `/projects/fishy-app/${index + 1}.png`);
const activityImages = Array.from({ length: 4 }, (_, index) => `/activities/it-empowering-day-${index + 1}.png`);
const secondActivityImages = ["/activities/cyber-expo-1.png", "/activities/cyber-expo-2.jpg"];
const gallerySlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "110%" : "-110%",
    opacity: 0,
    scale: .94,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-110%" : "110%",
    opacity: 0,
    scale: .94,
    filter: "blur(8px)",
  }),
};
const gallerySlideTransition = {
  x: { duration: .72, ease: [0.22, 1, 0.36, 1] },
  opacity: { duration: .42, ease: "easeOut" },
  scale: { duration: .65, ease: [0.22, 1, 0.36, 1] },
  filter: { duration: .38, ease: "easeOut" },
} as const;

function Reveal({ children, className = "", onClick, onKeyDown, role, tabIndex, ariaLabel }: { children: React.ReactNode; className?: string; onClick?: React.MouseEventHandler<HTMLDivElement>; onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>; role?: string; tabIndex?: number; ariaLabel?: string }) {
  return <motion.div className={className} onClick={onClick} onKeyDown={onKeyDown} role={role} tabIndex={tabIndex} aria-label={ariaLabel} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .6 }}>{children}</motion.div>;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string; text: string }) {
  return <Reveal className="section-title">{eyebrow && <span>{eyebrow}</span>}<h2>{title}</h2></Reveal>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [certificate, setCertificate] = useState<(typeof certifications)[number] | null>(null);
  const [zenithIndex, setZenithIndex] = useState(0);
  const [zenithDirection, setZenithDirection] = useState<-1 | 1>(1);
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectDirection, setProjectDirection] = useState<-1 | 1>(1);
  const [activityIndex, setActivityIndex] = useState(0);
  const [activityDirection, setActivityDirection] = useState<-1 | 1>(1);
  const [secondActivityIndex, setSecondActivityIndex] = useState(0);
  const [secondActivityDirection, setSecondActivityDirection] = useState<-1 | 1>(1);
  const [projectModal, setProjectModal] = useState<"zenith" | "fishy" | "ai-tutor" | "weight-inventory" | "bankers-algorithm" | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const aiTutorVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const t = translations[language];
  const zenithContent = zenithDetails[language];
  const projectContent = featuredProjects[language][0];
  const aiTutorContent = aiTutorDetails[language];
  const weightInventoryContent = weightBasedInventoryDetails[language];
  const bankersContent = bankersAlgorithmDetails[language];
  const modalProjectContent = projectModal === "zenith" ? zenithContent : projectModal === "fishy" ? projectContent : projectModal === "ai-tutor" ? aiTutorContent : projectModal === "weight-inventory" ? weightInventoryContent : bankersContent;
  const featuredActivity = localizedActivities[language][0];
  const currentZenithImage = zenithImages[zenithIndex];
  const currentPreviewImage = projectImages[projectIndex];
  const certificateTitle = certificate ? (language === "th" ? certificate.titleTh : certificate.title) : "";
  const certificateIssuer = certificate ? (language === "th" ? certificate.issuerTh : certificate.issuer) : "";
  const certificateDate = certificate ? (language === "th" ? certificate.dateTh : certificate.date) : "";
  const projectRole = language === "th" ? "นักพัฒนาเว็บไซต์ส่วนหน้า" : "Frontend Developer";
  const activityRole = language === "th" ? "นักพัฒนาเว็บส่วนหน้า / ผู้ทดสอบซอฟต์แวร์" : "Frontend Developer / Tester";
  const secondActivityContent = language === "th"
    ? {
        label: "กิจกรรมด้านความมั่นคงปลอดภัยไซเบอร์",
        title: "BU Cyber Fortress Challenge & Career Expo",
        insightsTitle: "Company Insights",
        insights: "กิจกรรม BU Cyber Fortress Challenge & Career Expo ทำให้ผมได้เรียนรู้ภาพรวมของสายงาน Cybersecurity มากขึ้น ทั้งเรื่องภัยคุกคามทางไซเบอร์ การนำ AI มาใช้เพื่อเพิ่มความปลอดภัย รวมถึงทักษะที่บริษัทต่าง ๆ ต้องการจากผู้สมัครงาน นอกจากนี้ยังได้พูดคุยและสอบถามข้อมูลจากบูธของบริษัทชั้นนำเกี่ยวกับตำแหน่งงาน การฝึกงาน และแนวทางการเตรียมตัวเข้าสู่สายอาชีพ ทำให้ผมเห็นเส้นทางการทำงานในอนาคตได้ชัดเจนขึ้น",
      }
    : {
        label: "CYBERSECURITY ACTIVITY",
        title: "BU Cyber Fortress Challenge & Career Expo",
        insightsTitle: "Company Insights",
        insights: "The BU Cyber Fortress Challenge & Career Expo gave me a broader understanding of cybersecurity careers, including cyber threats, how AI can enhance security, and the skills companies seek in candidates. I also spoke with representatives at leading company booths about job opportunities, internships, and how to prepare for a career in the field, helping me see my future career path more clearly.",
      };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language | null;
    let languageTimer: number | undefined;
    if (savedLanguage === "th" || savedLanguage === "en") {
      document.documentElement.lang = savedLanguage;
      languageTimer = window.setTimeout(() => setLanguage(savedLanguage), 0);
    }
    const initialTheme = document.documentElement.dataset.theme;
    let themeTimer: number | undefined;
    if (initialTheme === "light" || initialTheme === "dark") {
      themeTimer = window.setTimeout(() => setTheme(initialTheme), 0);
    }
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") return;
      const nextTheme: Theme = event.matches ? "dark" : "light";
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    };
    systemTheme.addEventListener("change", onSystemThemeChange);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%", threshold: 0 });
    nav.forEach(item => { const el = document.getElementById(item); if (el) observer.observe(el); });
    return () => {
      if (languageTimer !== undefined) window.clearTimeout(languageTimer);
      if (themeTimer !== undefined) window.clearTimeout(themeTimer);
      systemTheme.removeEventListener("change", onSystemThemeChange);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!projectModal && !certificate) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProjectModal(null);
        setCertificate(null);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [projectModal, certificate]);

  useEffect(() => {
    const zenithTimer = window.setInterval(() => {
      setZenithDirection(1);
      setZenithIndex(current => (current + 1) % zenithImages.length);
    }, 5600);
    const fishyTimer = window.setInterval(() => {
      setProjectDirection(1);
      setProjectIndex(current => (current + 1) % projectImages.length);
    }, 5000);
    return () => {
      window.clearInterval(zenithTimer);
      window.clearInterval(fishyTimer);
    };
  }, [language]);

  useEffect(() => {
    const firstActivityTimer = window.setInterval(() => {
      setActivityDirection(1);
      setActivityIndex(current => (current + 1) % activityImages.length);
    }, 5000);
    const secondActivityTimer = window.setInterval(() => {
      setSecondActivityDirection(1);
      setSecondActivityIndex(current => (current + 1) % secondActivityImages.length);
    }, 6000);
    return () => {
      window.clearInterval(firstActivityTimer);
      window.clearInterval(secondActivityTimer);
    };
  }, []);

  useEffect(() => {
    const video = aiTutorVideoRef.current;
    if (!video) return;
    video.muted = true;
    const startVideo = () => video.play().catch(() => setVideoPlaying(false));
    if (video.readyState >= 2) startVideo();
    else video.addEventListener("canplay", startVideo, { once: true });
    return () => video.removeEventListener("canplay", startVideo);
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  const changePreview = (direction: -1 | 1) => {
    const total = projectImages.length;
    setProjectDirection(direction);
    setProjectIndex(current => (current + direction + total) % total);
  };

  const changeZenithImage = (direction: -1 | 1) => {
    setZenithDirection(direction);
    setZenithIndex(current => (current + direction + zenithImages.length) % zenithImages.length);
  };

  const changeActivityImage = (direction: -1 | 1) => {
    setActivityDirection(direction);
    setActivityIndex(current => (current + direction + activityImages.length) % activityImages.length);
  };

  const changeSecondActivityImage = (direction: -1 | 1) => {
    setSecondActivityDirection(direction);
    setSecondActivityIndex(current => (current + direction + secondActivityImages.length) % secondActivityImages.length);
  };

  return <MotionConfig reducedMotion="user">
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <div className="space-bg" aria-hidden="true"><div className="stars" /><div className="nebula n1" /><div className="nebula n2" /></div>
    <header className={scrolled ? "nav-wrap scrolled" : "nav-wrap"}>
      <a href="#home" className="nav-mark" aria-label={t.ui.home}><Image src="/images/ka-logo.png" alt="KA" width={40} height={40} priority /></a>
      <nav aria-label={t.ui.navigation}>
        {nav.map(item => <a key={item} className={active === item ? "active" : ""} href={`#${item}`}>{t.nav[item]}</a>)}
      </nav>
      <div className="language-switch" role="group" aria-label={t.ui.selectLanguage}><button className={language === "th" ? "selected" : ""} onClick={() => changeLanguage("th")}>TH</button><button className={language === "en" ? "selected" : ""} onClick={() => changeLanguage("en")}>EN</button></div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light mode" : "Dark mode"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={theme} initial={{ opacity: 0, rotate: -35, scale: .7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 35, scale: .7 }} transition={{ duration: .16 }}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </motion.span>
        </AnimatePresence>
      </button>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.ui.toggleNavigation} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{nav.map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{t.nav[item]}</a>)}<div className="mobile-language"><button onClick={() => changeLanguage("th")}>ภาษาไทย</button><button onClick={() => changeLanguage("en")}>{language === "th" ? "ภาษาอังกฤษ" : "English"}</button></div></motion.div>}</AnimatePresence>
    </header>

    <main>
      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <motion.p className="hello" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>{t.hero.hello}</motion.p>
          <motion.h1 className="long-name" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>{language === "th" ? <>กฤษภา<br /><span>อินทร์เปือย</span></> : <>KITSAPHA<br /><span>AINPUEAI</span></>}<em>.</em></motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18 }}>{t.hero.role}{t.hero.role2 && <> <span>/</span> {t.hero.role2}</>}</motion.h2>
          <motion.p className="hero-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .24 }}>{t.hero.desc}</motion.p>
          <div className="hero-actions"><a href="#projects" className="btn primary">{t.hero.work} <ArrowRight size={17} /></a><a href="#contact" className="btn secondary">{t.hero.talk}</a></div>
          <div className="socials"><a href="https://github.com/kitsaphawork46-art" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/kitsapha-ainp46/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:kitsapha.work46@gmail.com" aria-label="Email"><Mail /></a></div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }}>
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="planet-dot dot-a" /><div className="planet-dot dot-b" />
          <div className="portrait"><Image src="/images/profile-kitsapha.png" alt={t.about.title} fill priority sizes="(max-width: 800px) 85vw, 42vw" /></div>
          <div className="hero-badge badge-top"><Sparkles /> <span>{t.hero.badge1a}<br /><b>{t.hero.badge1b}</b></span></div>
          <div className="hero-badge badge-bottom"><Code2 /> <span>{t.hero.badge2a}<br /><b>{t.hero.badge2b}</b></span></div>
        </motion.div>
        <a href="#about" className="scroll-cue">{t.hero.scroll} <ArrowDown /></a>
      </section>

      <section id="about" className="content-section section-shell">
        <SectionTitle eyebrow={t.sections.about[0]} title={t.sections.about[1]} text={t.sections.about[2]} />
        <div className="about-grid">
          <Reveal className="about-visual"><div className="about-photo"><Image src="/images/about-kitsapha.png" alt={t.about.title} fill sizes="(max-width: 760px) 90vw, 34vw" /></div></Reveal>
          <Reveal className="about-copy">
            <span className="profile-label">{language === "th" ? "ข้อมูลส่วนตัว" : "PERSONAL PROFILE"}</span><h3>{t.about.title}</h3>
            <div className="profile-meta"><div><small>{t.about.nicknameLabel}</small><b>{t.about.nickname}</b></div><div><small>{t.about.birthLabel}</small><b>{t.about.birth}</b></div></div>
            <div className="education-panel"><div className="education-heading"><GraduationCap /><h4>{t.about.education}</h4></div><div className="education-history">
              <article><span>{t.about.firstYears}</span><div><h5>{t.about.firstSchool}</h5><p>{t.about.gpa} <b>3.64</b></p></div></article>
              <article><span>{t.about.secondYears}</span><div><h5>{t.about.secondSchool}</h5><p>{t.about.gpa} <b>3.38</b></p></div></article>
            </div></div>
            <p className="about-bio">{t.about.bio}</p>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="content-section section-shell">
        <SectionTitle eyebrow={t.sections.projects[0]} title={t.sections.projects[1]} text={t.sections.projects[2]} />
        <div className="project-showcase-grid">
        <Reveal className="project-showcase clickable-project" role="button" tabIndex={0} ariaLabel={language === "th" ? "เปิดรายละเอียดโปรเจกต์ Zenith" : "Open Zenith project details"} onClick={event => { if (!(event.target as HTMLElement).closest("button, input, video, a")) setProjectModal("zenith"); }} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) { event.preventDefault(); setProjectModal("zenith"); } }}>
          <div className="showcase-media">
            <div className="showcase-slider-stage"><AnimatePresence initial={false} custom={zenithDirection}>
              <motion.div className="sliding-preview" key={zenithIndex} custom={zenithDirection} variants={{ enter: (direction: number) => ({ x: direction > 0 ? "105%" : "-105%", opacity: .2, scale: .955, rotateY: direction > 0 ? 5 : -5 }), center: { x: 0, opacity: 1, scale: 1, rotateY: 0 }, exit: (direction: number) => ({ x: direction > 0 ? "-105%" : "105%", opacity: .2, scale: .955, rotateY: direction > 0 ? -5 : 5 }) }} initial="enter" animate="center" exit="exit" transition={{ x: { duration: .68, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: .46, ease: "easeOut" }, scale: { duration: .62, ease: [0.22, 1, 0.36, 1] }, rotateY: { duration: .62, ease: [0.22, 1, 0.36, 1] } }}><div className="fishy-slide"><Image className="fishy-backdrop" src={currentZenithImage} alt="" fill sizes="900px" aria-hidden="true" /><Image className="fishy-screen" src={currentZenithImage} alt={`Zenith platform screen ${zenithIndex + 1}`} fill sizes="(max-width: 760px) 85vw, 900px" priority={zenithIndex === 0} /></div></motion.div>
            </AnimatePresence></div>
            <button className="showcase-arrow previous" onClick={() => changeZenithImage(-1)} aria-label={t.ui.previous}><ChevronLeft /></button>
            <button className="showcase-arrow next" onClick={() => changeZenithImage(1)} aria-label={t.ui.next}><ChevronRight /></button>
            <div className="showcase-image-count" aria-live="polite">{String(zenithIndex + 1).padStart(2, "0")} / {zenithImages.length}</div>
          </div>
          <motion.article key={`zenith-content-${language}`} className="showcase-content" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="showcase-title"><div><span>{zenithContent.label}</span><h3>{zenithContent.title}</h3></div></div>
            <p>{zenithContent.description}</p>
            <ul>{zenithContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul>
            <div className="showcase-tags">{zenithContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </motion.article>
        </Reveal>
        <Reveal className="project-showcase clickable-project" role="button" tabIndex={0} ariaLabel={language === "th" ? "เปิดรายละเอียด Fishy Game" : "Open Fishy Game details"} onClick={event => { if (!(event.target as HTMLElement).closest("button, input, video, a")) setProjectModal("fishy"); }} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) { event.preventDefault(); setProjectModal("fishy"); } }}>
          <div className="showcase-media">
            <div className="showcase-slider-stage"><AnimatePresence initial={false} custom={projectDirection}>
              <motion.div className="sliding-preview" key={projectIndex} custom={projectDirection} variants={{ enter: (direction: number) => ({ x: direction > 0 ? "105%" : "-105%", opacity: .2, scale: .955, rotateY: direction > 0 ? 5 : -5 }), center: { x: 0, opacity: 1, scale: 1, rotateY: 0 }, exit: (direction: number) => ({ x: direction > 0 ? "-105%" : "105%", opacity: .2, scale: .955, rotateY: direction > 0 ? -5 : 5 }) }} initial="enter" animate="center" exit="exit" transition={{ x: { duration: .68, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: .46, ease: "easeOut" }, scale: { duration: .62, ease: [0.22, 1, 0.36, 1] }, rotateY: { duration: .62, ease: [0.22, 1, 0.36, 1] } }}><div className="fishy-slide"><Image className="fishy-backdrop" src={currentPreviewImage} alt="" fill sizes="900px" aria-hidden="true" /><Image className="fishy-screen" src={currentPreviewImage} alt={`Fishy Game application screen ${projectIndex + 1}`} fill sizes="(max-width: 760px) 85vw, 900px" priority={projectIndex === 0} /></div></motion.div>
            </AnimatePresence></div>
            <button className="showcase-arrow previous" onClick={() => changePreview(-1)} aria-label={t.ui.previous}><ChevronLeft /></button>
            <button className="showcase-arrow next" onClick={() => changePreview(1)} aria-label={t.ui.next}><ChevronRight /></button>
            <div className="showcase-image-count" aria-live="polite">{String(projectIndex + 1).padStart(2, "0")} / {projectImages.length}</div>
          </div>
          <motion.article key={`content-${language}`} className="showcase-content" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="showcase-title"><div><span>{projectContent.label}</span><h3>{projectContent.title}</h3></div></div>
            <div className="project-role"><span>{t.projects.role}</span><b>{projectRole}</b></div>
            <p>{projectContent.description}</p>
            <ul>{projectContent.highlights.map(item => { const [title, detail] = item.split("::"); return <li key={item}>{detail ? <><strong>{title}</strong><span>{detail}</span></> : item}</li>; })}</ul>
            <div className="showcase-tags">{projectContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </motion.article>
        </Reveal>
        <Reveal className="project-showcase ai-tutor-showcase clickable-project" role="button" tabIndex={0} ariaLabel={language === "th" ? "เปิดรายละเอียด AI Tutor" : "Open AI Tutor details"} onClick={event => { if (!(event.target as HTMLElement).closest("button, input, video, a")) setProjectModal("ai-tutor"); }} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) { event.preventDefault(); setProjectModal("ai-tutor"); } }}>
          <div className="showcase-media ai-media"><div className="ai-video-stage"><video ref={aiTutorVideoRef} src="/projects/ai-tutor.mp4" controls autoPlay muted loop playsInline preload="auto" onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} aria-label={aiTutorContent.title}>{t.ui.videoFallback}</video>{!videoPlaying && <button className="video-play-button" onClick={() => aiTutorVideoRef.current?.play()} aria-label={t.ui.playVideo}><Play /></button>}</div></div>
          <article className="showcase-content">
            <div className="showcase-title"><div><span>{aiTutorContent.label}</span><h3>{aiTutorContent.title}</h3></div></div>
            <div className="project-role"><span>{t.projects.role}</span><b>{projectRole}</b></div>
            <p>{aiTutorContent.description}</p>
            <ul>{aiTutorContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul>
            <a className="project-live-link" href="https://project-h50pr.vercel.app/" target="_blank" rel="noreferrer">
              {language === "th" ? "เปิดเว็บไซต์ AI Tutor" : "Visit AI Tutor"} <ExternalLink />
            </a>
            <div className="showcase-tags">{aiTutorContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        </Reveal>
        <Reveal className="project-showcase ai-tutor-showcase clickable-project" role="button" tabIndex={0} ariaLabel={language === "th" ? "เปิดรายละเอียด Weight-based Inventory" : "Open Weight-based Inventory details"} onClick={event => { if (!(event.target as HTMLElement).closest("button, input, video, a")) setProjectModal("weight-inventory"); }} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) { event.preventDefault(); setProjectModal("weight-inventory"); } }}>
          <div className="showcase-media ai-media"><div className="ai-video-stage"><video src="/projects/weight-based-inventory.mp4" controls autoPlay muted loop playsInline preload="metadata" aria-label={weightInventoryContent.title}>{t.ui.videoFallback}</video></div></div>
          <article className="showcase-content">
            <div className="showcase-title"><div><span>{weightInventoryContent.label}</span><h3>{weightInventoryContent.title}</h3></div></div>
            <p>{weightInventoryContent.description}</p>
            <div className="showcase-tags">{weightInventoryContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        </Reveal>
        <Reveal className="project-showcase project-video-card clickable-project" role="button" tabIndex={0} ariaLabel={language === "th" ? "เปิดรายละเอียดโปรแกรมจำลอง Banker’s Algorithm" : "Open Banker’s Algorithm Simulator details"} onClick={event => { if (!(event.target as HTMLElement).closest("button, input, video, a")) setProjectModal("bankers-algorithm"); }} onKeyDown={event => { if ((event.key === "Enter" || event.key === " ") && event.target === event.currentTarget) { event.preventDefault(); setProjectModal("bankers-algorithm"); } }}>
          <div className="project-card-video"><video src="/projects/project-04.mp4" controls autoPlay muted loop playsInline preload="auto">{t.ui.videoFallback}</video></div>
          <article className="showcase-content">
            <div className="showcase-title"><div><span>{bankersContent.label}</span><h3>{bankersContent.title}</h3></div></div>
            <p>{bankersContent.description}</p>
            <ul>{bankersContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul>
            <div className="showcase-tags">{bankersContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        </Reveal>
        </div>
      </section>

      <section id="skills" className="content-section section-shell">
        <SectionTitle eyebrow={t.sections.skills[0]} title={t.sections.skills[1]} text={t.sections.skills[2]} />
        <div className="skills-grid">{skillGroups.map((group, i) => <Reveal key={group.title} className="skill-group"><div className="skill-number">0{i + 1}</div><h3>{t.skills.groups[i]}</h3><div>{group.items.map(item => <span key={item}><i />{item}<small>{t.skills.familiar}</small></span>)}</div></Reveal>)}</div>
      </section>

      <section id="activities" className="content-section section-shell split-section">
        <SectionTitle eyebrow={t.sections.activities[0]} title={t.sections.activities[1]} text={t.sections.activities[2]} />
        <div className="activity-showcase-grid"><Reveal className="activity-showcase">
          <div className="activity-visual activity-gallery"><AnimatePresence initial={false} custom={activityDirection}><motion.div className="activity-gallery-slide" key={activityIndex} custom={activityDirection} variants={gallerySlideVariants} initial="enter" animate="center" exit="exit" transition={gallerySlideTransition}><Image className="activity-gallery-backdrop" src={activityImages[activityIndex]} alt="" fill sizes="50vw" aria-hidden="true" /><Image className="activity-gallery-image" src={activityImages[activityIndex]} alt={`${featuredActivity.title} ${activityIndex + 1}`} fill sizes="(max-width: 900px) 92vw, 48vw" priority={activityIndex === 0} /></motion.div></AnimatePresence><button className="activity-gallery-arrow previous" onClick={() => changeActivityImage(-1)} aria-label={t.ui.previous}><ChevronLeft /></button><button className="activity-gallery-arrow next" onClick={() => changeActivityImage(1)} aria-label={t.ui.next}><ChevronRight /></button><div className="activity-gallery-count">{String(activityIndex + 1).padStart(2, "0")} / {activityImages.length}</div></div>
          <article className="showcase-content activity-content"><div className="showcase-title"><div><h3>{featuredActivity.title}</h3><span className="activity-project-label">{featuredActivity.tag}</span></div></div><div className="project-role"><span>{t.projects.role}</span><b>{activityRole}</b></div><small className="activity-meta"><MapPin />{featuredActivity.meta}</small><p>{featuredActivity.description}</p></article>
        </Reveal><Reveal className="activity-showcase">
          <div className="activity-visual activity-gallery"><AnimatePresence initial={false} custom={secondActivityDirection}><motion.div className="activity-gallery-slide" key={secondActivityIndex} custom={secondActivityDirection} variants={gallerySlideVariants} initial="enter" animate="center" exit="exit" transition={gallerySlideTransition}><Image className="activity-gallery-backdrop" src={secondActivityImages[secondActivityIndex]} alt="" fill sizes="50vw" aria-hidden="true" /><Image className="activity-gallery-image" src={secondActivityImages[secondActivityIndex]} alt={`${secondActivityContent.title} ${secondActivityIndex + 1}`} fill sizes="(max-width: 900px) 92vw, 48vw" /></motion.div></AnimatePresence><button className="activity-gallery-arrow previous" onClick={() => changeSecondActivityImage(-1)} aria-label={t.ui.previous}><ChevronLeft /></button><button className="activity-gallery-arrow next" onClick={() => changeSecondActivityImage(1)} aria-label={t.ui.next}><ChevronRight /></button><div className="activity-gallery-count">{String(secondActivityIndex + 1).padStart(2, "0")} / {secondActivityImages.length}</div></div>
          <article className="showcase-content activity-content second-activity-content"><div className="showcase-title"><div><span>{secondActivityContent.label}</span><h3>{secondActivityContent.title}</h3></div></div><section className="activity-detail-block"><h4>{secondActivityContent.insightsTitle}</h4><p>{secondActivityContent.insights}</p></section></article>
        </Reveal></div>
      </section>

      <section id="certifications" className="content-section section-shell">
        <SectionTitle eyebrow={t.sections.certifications[0]} title={t.sections.certifications[1]} text={t.sections.certifications[2]} />
        <div className="cert-grid">{certifications.map(cert => { const title = language === "th" ? cert.titleTh : cert.title; const issuer = language === "th" ? cert.issuerTh : cert.issuer; const date = language === "th" ? cert.dateTh : cert.date; return <Reveal key={cert.title} className="cert-card" role="button" tabIndex={0} ariaLabel={`${t.ui.view} ${title}`} onClick={() => setCertificate(cert)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setCertificate(cert); } }}><div className="certificate-thumbnail"><Image src={cert.image} alt={`${title} ${t.ui.certificate}`} fill sizes="(max-width: 760px) 90vw, 32vw" /><span>{t.ui.viewCertificate}</span></div><div className="cert-info"><span>{date}</span><h3>{title}</h3><p>{issuer} · {cert.code}</p></div></Reveal>; })}</div>
      </section>

      <section id="contact" className="content-section section-shell contact-section">
        <div className="contact-copy"><Reveal><span className="eyebrow">{t.contact.eyebrow}</span><h2>{t.contact.title}</h2></Reveal></div>
        <Reveal className="contact-cards">
          <a className="contact-card" href="mailto:kitsapha.work46@gmail.com"><span className="contact-icon"><Mail /></span><span><small>{t.contact.email}</small><b>kitsapha.work46@gmail.com</b></span></a>
          <a className="contact-card" href="tel:+66829763167"><span className="contact-icon"><Phone /></span><span><small>{t.contact.phone}</small><b>(+66) 82-976-3167</b></span></a>
          <a className="contact-card" href="https://www.linkedin.com/in/kitsapha-ainp46/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin /></span><span><small>{t.contact.linkedin}</small><b>{t.about.title}</b></span></a>
          <div className="contact-card"><span className="contact-icon"><MapPin /></span><span><small>{t.contact.location}</small><b>{t.contact.locationValue}</b></span></div>
        </Reveal>
      </section>
    </main>

    <footer><div className="footer-name"><Image src="/images/ka-logo.png" alt="KA" width={24} height={24} /> {language === "th" ? "กฤษภา อินทร์เปือย" : "KITSAPHA AINPUEAI"}</div><div className="footer-links"><a href="https://github.com/kitsaphawork46-art" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/kitsapha-ainp46/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="#home" aria-label={t.ui.backToTop}><ChevronUp /></a></div></footer>

    <AnimatePresence>{certificate && <motion.div className="modal" role="dialog" aria-modal="true" aria-label={certificateTitle} onClick={() => setCertificate(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="modal-content certificate-modal-content" onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }}><button onClick={() => setCertificate(null)} aria-label={t.ui.close}><X /></button><div className="certificate-modal-image"><Image src={certificate.image} alt={`${certificateTitle} ${t.ui.certificate}`} fill sizes="95vw" priority /></div><div className="certificate-modal-details"><span>{certificateDate}</span><h2>{certificateTitle}</h2><p>{certificateIssuer} · {certificate.code}</p></div></motion.div></motion.div>}</AnimatePresence>
    <AnimatePresence>{projectModal && <motion.div className="modal project-detail-modal" role="dialog" aria-modal="true" aria-label={modalProjectContent.title} onClick={() => setProjectModal(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="project-modal-content" onClick={event => event.stopPropagation()} initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .98 }} transition={{ duration: .32, ease: [0.22, 1, 0.36, 1] }}><button className="project-modal-close" onClick={() => setProjectModal(null)} aria-label={t.ui.closeProject}><X /></button><div className="project-modal-layout">
      <div className="project-modal-media">{projectModal === "zenith" ? <><AnimatePresence initial={false} custom={zenithDirection}><motion.div className="modal-gallery-slide" key={zenithIndex} custom={zenithDirection} variants={gallerySlideVariants} initial="enter" animate="center" exit="exit" transition={gallerySlideTransition}><Image src={currentZenithImage} alt={`${zenithContent.title} ${zenithIndex + 1}`} fill sizes="(max-width: 760px) 92vw, 480px" /></motion.div></AnimatePresence><button className="modal-gallery-arrow previous" onClick={() => changeZenithImage(-1)} aria-label={t.ui.previous}><ChevronLeft /></button><button className="modal-gallery-arrow next" onClick={() => changeZenithImage(1)} aria-label={t.ui.next}><ChevronRight /></button><div className="modal-gallery-status">{String(zenithIndex + 1).padStart(2, "0")} / {zenithImages.length}</div></> : projectModal === "fishy" ? <><AnimatePresence initial={false} custom={projectDirection}><motion.div className="modal-gallery-slide" key={projectIndex} custom={projectDirection} variants={gallerySlideVariants} initial="enter" animate="center" exit="exit" transition={gallerySlideTransition}><Image src={currentPreviewImage} alt={`${projectContent.title} ${projectIndex + 1}`} fill sizes="(max-width: 760px) 92vw, 480px" /></motion.div></AnimatePresence><button className="modal-gallery-arrow previous" onClick={() => changePreview(-1)} aria-label={t.ui.previous}><ChevronLeft /></button><button className="modal-gallery-arrow next" onClick={() => changePreview(1)} aria-label={t.ui.next}><ChevronRight /></button><div className="modal-gallery-status">{String(projectIndex + 1).padStart(2, "0")} / {projectImages.length}</div></> : <video src={projectModal === "ai-tutor" ? "/projects/ai-tutor.mp4" : projectModal === "weight-inventory" ? "/projects/weight-based-inventory.mp4" : "/projects/project-04.mp4"} controls autoPlay muted loop playsInline>{t.ui.videoFallback}</video>}</div>
      <article className="project-modal-copy"><span>{modalProjectContent.label}</span><h2>{modalProjectContent.title}</h2>{(projectModal === "fishy" || projectModal === "ai-tutor") && <div className="project-role"><span>{t.projects.role}</span><b>{projectRole}</b></div>}<p>{modalProjectContent.description}</p>{projectModal === "zenith" ? <ul>{zenithContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul> : projectModal === "fishy" ? <ul>{projectContent.highlights.map(item => { const [title, detail] = item.split("::"); return <li key={item}><strong>{title}</strong>{detail && <span>{detail}</span>}</li>; })}</ul> : projectModal === "ai-tutor" ? <ul>{aiTutorContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul> : projectModal === "bankers-algorithm" ? <ul>{bankersContent.highlights.map(item => <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>)}</ul> : null}{projectModal === "ai-tutor" && <a className="project-live-link" href="https://project-h50pr.vercel.app/" target="_blank" rel="noreferrer">{language === "th" ? "เปิดเว็บไซต์ AI Tutor" : "Visit AI Tutor"} <ExternalLink /></a>}<div className="showcase-tags">{modalProjectContent.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>
    </div></motion.div></motion.div>}</AnimatePresence>
  </MotionConfig>;
}
