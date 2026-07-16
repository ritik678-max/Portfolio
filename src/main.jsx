import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, Code2, Download, GraduationCap, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";
import { portfolio as p } from "./data";
import "./styles.css";

const nav = ["about", "experience", "projects", "education", "contact"];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return <header className={scrolled ? "scrolled" : ""}>
    <a className="logo" href="#top" aria-label="Home"><span>{p.initials}</span><i /></a>
    <nav className={open ? "open" : ""}>
      {nav.map((item, i) => <a key={item} href={`#${item}`} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item}</a>)}
    </nav>
    <a className="nav-cta" href={p.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Ritik on WhatsApp">Let’s talk <ArrowUpRight size={15} /></a>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
  </header>;
}

function SectionTitle({ index, eyebrow, title, text }) {
  return <div className="section-heading reveal"><div className="section-no">{index}</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</div></div>;
}

function App() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return <>
    <div className="noise" /><div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="status"><span />{p.availability}</div>
          <p className="kicker">Hello, I’m</p>
          <h1>{p.name.split(" ")[0]} <em>{p.name.split(" ")[1]}</em></h1>
          <div className="role"><span>01</span><strong>{p.role}</strong></div>
          <p className="intro">I test with precision, build with purpose, and explore intelligent systems that make technology work better.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
            <a className="button ghost" href={p.resume} download>Resume <Download size={17} /></a>
          </div>
        </div>
        <div className="orb-wrap" aria-hidden="true"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orb"><div className="orb-core">RT</div></div><span className="orbit-label l1">QUALITY</span><span className="orbit-label l2">INTELLIGENCE</span><span className="orbit-label l3">SYSTEMS</span></div>
        <a href="#about" className="scroll-note"><span>Scroll to discover</span><i /></a>
      </section>

      <section id="about" className="section about">
        <SectionTitle index="01" eyebrow="About" title="Curious mind. Quality focus." />
        <div className="about-grid">
          <div className="about-copy reveal"><p>{p.summary}</p><div className="location"><MapPin size={18} /> Based in {p.location}</div></div>
          <div className="stats reveal">{p.highlights.map(h => <div className="stat" key={h.label}><strong>{h.value}</strong><span>{h.label}</span></div>)}</div>
        </div>
        <div className="skills-grid">{p.skills.map((s, i) => <div className="skill-card reveal" style={{ transitionDelay: `${i * 70}ms` }} key={s.group}><div><Code2 size={18} /><span>0{i+1}</span></div><h3>{s.group}</h3><p>{s.items.join(" · ")}</p></div>)}</div>
      </section>

      <section id="experience" className="section experience">
        <SectionTitle index="02" eyebrow="Experience" title="Where I’ve made an impact." />
        <div className="timeline">{p.experience.map((job, i) => <article className="job reveal" key={job.company}><div className="job-marker"><span>{String(i+1).padStart(2,"0")}</span></div><div className="job-meta"><p>{job.period}</p><span>{job.location}</span></div><div className="job-body"><p className="company">{job.company}</p><h3>{job.role}</h3><ul>{job.points.map(x => <li key={x}>{x}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="projects" className="section projects">
        <SectionTitle index="03" eyebrow="Selected work" title="Projects built to solve." text="A selection of applied AI projects—turning models and research into experiences people can use." />
        <div className="project-grid">{p.projects.map((project, i) => <a className="project-card reveal" href={project.link} target="_blank" rel="noreferrer" key={project.title}><div className="project-top"><span>PROJECT / 0{i+1}</span><ArrowUpRight /></div><div className={`project-visual visual-${i+1}`}>{i === 0 ? <><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="aircraft"><span className="wing left"/><span className="wing right"/><i /></div><div className="damage-target"><b/><span>DAMAGE DETECTED</span></div><div className="scan" /></> : <><div className="sentiment-label positive">POSITIVE</div><div className="sentiment-label neutral">NEUTRAL</div><div className="sentiment-label negative">NEGATIVE</div><div className="wave-bars">{[32,58,42,78,52,90,64,38,72,48,82,55].map((h,n)=><i key={n} style={{"--height":`${h}%`,"--delay":`${n*.08}s`}}/>)}</div><div className="face-pulse"><Sparkles /></div></>}</div><p className="project-date">{project.date}</p><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div></a>)}</div>
      </section>

      <section id="education" className="section education">
        <SectionTitle index="04" eyebrow="Education & recognition" title="Built on strong foundations." />
        <div className="education-layout">
          <div>{p.education.map(e => <article className="edu-card reveal" key={e.school}><GraduationCap /><div><span>{e.period}</span><h3>{e.school}</h3><p>{e.degree}</p><small>{e.location}</small></div></article>)}</div>
          <a className="achievement reveal" href={p.achievement.link} target="_blank" rel="noreferrer"><Award /><p>Academic achievement</p><h3>{p.achievement.title}</h3><span>{p.achievement.text}</span><b>View recognition <ArrowUpRight size={16}/></b></a>
        </div>
        <div className="certs reveal"><p className="eyebrow">Certifications</p>{p.certifications.map(c => <a href={c.link} target="_blank" rel="noreferrer" key={c.title}><span>{c.title}</span><ArrowUpRight size={17}/></a>)}</div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-glow" />
        <p className="eyebrow reveal">Have a role or project in mind?</p><h2 className="reveal">Let’s build something<br/><em>remarkable.</em></h2>
        <a className="mail-link reveal" href={`mailto:${p.email}`}>{p.email}<ArrowUpRight /></a>
        <div className="contact-links reveal"><a href={`tel:${p.phone}`}><Phone size={17}/>{p.phone}</a><a href={p.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17}/>LinkedIn</a><a href={p.github} target="_blank" rel="noreferrer"><Code2 size={17}/>GitHub</a></div>
      </section>
    </main>
    <footer><span>© {new Date().getFullYear()} {p.name}</span><p>Designed with intention. Built with React.</p><a href="#top">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById("root")).render(<App />);
