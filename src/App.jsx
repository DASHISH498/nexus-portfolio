
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedSketch from "./components/AnimatedSketch";
import ScrollTraceBackground from "./components/ScrollTraceBackground";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML5",
  "CSS3 / SCSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive UI",
  "Pixel-perfect UI",
];

const projects = [
  {
    number: "01",
    title: "JobNest",
    type: "WEB APPLICATION",
    description:
      "A clean job portal experience with reusable components and responsive layouts.",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Digital Presence",
    type: "WEBSITE DESIGN",
    description:
      "A modern web experience focused on visual hierarchy, responsiveness and usability.",
    tags: ["HTML", "SCSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Interface Lab",
    type: "UI DEVELOPMENT",
    description:
      "A collection of polished interface components built with attention to detail.",
    tags: ["Angular", "CSS", "Responsive UI"],
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ashish Soni home">
        <span className="brand-mark">A.</span>
        <span className="brand-name">ASHISH SONI</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#work">Selected work</a>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-meta">
        <span className="availability">
          <span className="availability-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <span className="location-label">
          JAIPUR, INDIA · OPEN TO PAN INDIA
        </span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            FRONTEND / UI DEVELOPER
          </p>

          <h1>
            Crafting digital
            <br />
            <em>experiences</em> that
            <br />
            feel different<span className="gold-period">.</span>
          </h1>

          <p className="hero-description">
            I turn thoughtful designs into refined, responsive interfaces —
            with a sharp eye for detail and a passion for pixel-perfect UI.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowIcon />
            </a>

            <a className="text-link" href="#about">
              More about me <span aria-hidden="true">⟶</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>
                06<span>+</span>
              </strong>
              <small>YEARS OF EXPERIENCE</small>
            </div>

            <span className="stat-divider" />

            <div className="stat">
              <strong>
                05<span>+</span>
              </strong>
              <small>PROJECTS &amp; BUILDS</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-glow" />

          <div className="visual-top-label">
            <span>FIG. 001</span>
            <span>FORM / FUNCTION</span>
          </div>

          <AnimatedSketch />

          <div className="visual-bottom-label">
            <span>DESIGNING WITH INTENTION</span>
            <span>26° / 75°</span>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <span>INDEPENDENT MIND. COLLABORATIVE SPIRIT.</span>
        <a href="#about">
          SCROLL TO DISCOVER <span aria-hidden="true">⟶</span>
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad intro" id="about">
      <div className="section-kicker">
        <span>01 / ABOUT</span>
        <span>A LITTLE ABOUT MY APPROACH</span>
      </div>

      <div className="intro-grid">
        <h2>
          I build interfaces that feel as good as they <em>look.</em>
        </h2>

        <div className="intro-copy">
          <p>
            I&apos;m Ashish Kumar Soni, a UI / Frontend Developer with 6+
            years of experience creating responsive, polished and
            user-friendly web interfaces.
          </p>

          <p>
            My strength is translating designs into clean, pixel-perfect UI
            with a strong focus on layout, typography, consistency and
            responsive behaviour.
          </p>
        </div>
      </div>

      <div className="principles">
        <div>
          <span>01</span>
          <h3>Pixel precision</h3>
          <p>Carefully crafted details, spacing and visual consistency.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Responsive by nature</h3>
          <p>Interfaces designed to work beautifully across screen sizes.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Built with purpose</h3>
          <p>Reusable components and maintainable frontend structure.</p>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section-pad expertise" id="expertise">
      <div className="section-kicker">
        <span>02 / EXPERTISE</span>
        <span>WHAT I BRING TO THE TABLE</span>
      </div>

      <div className="expertise-heading">
        <h2>
          Detail is not
          <br />
          <em>an extra.</em>
        </h2>

        <p>
          Strong UI foundations, thoughtful implementation and a consistent
          focus on the experience people actually use.
        </p>
      </div>

      <div className="expertise-layout">
        <article className="expertise-card">
          <span className="card-index">01 — INTERFACE</span>
          <h3>UI Development</h3>
          <p>
            Responsive interfaces built with clean HTML, CSS, SCSS and
            reusable frontend patterns.
          </p>
          <span className="card-symbol">↗</span>
        </article>

        <article className="expertise-card">
          <span className="card-index">02 — IMPLEMENTATION</span>
          <h3>Frontend Engineering</h3>
          <p>
            Angular UI development and React-based personal projects with a
            focus on component structure.
          </p>
          <span className="card-symbol">⌘</span>
        </article>

        <article className="expertise-card">
          <span className="card-index">03 — EXPERIENCE</span>
          <h3>Responsive Design</h3>
          <p>
            Translating design concepts into consistent experiences across
            desktop, tablet and mobile.
          </p>
          <span className="card-symbol">◎</span>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-pad skills-section" id="skills">
      <div className="section-kicker">
        <span>03 / TOOLKIT</span>
        <span>TOOLS I WORK WITH</span>
      </div>

      <div className="skills-content">
        <h2>
          My everyday
          <br />
          <em>toolkit.</em>
        </h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-pad projects-section" id="work">
      <div className="section-kicker">
        <span>04 / SELECTED WORK</span>
        <span>A FEW THINGS I&apos;VE BUILT</span>
      </div>

      <div className="projects-heading">
        <h2>
          Selected <em>work.</em>
        </h2>

        <p>
          A selection of frontend builds and UI explorations. Replace these
          sample entries with your live project links before publishing.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-art project-art-${project.number}`}>
              <span className="project-art-index">{project.number}</span>
              <span className="project-art-mark">A.</span>
              <span className="project-art-orbit" />
            </div>

            <div className="project-meta">
              <span>{project.type}</span>
              <span>{project.number}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="section-kicker">
        <span>05 / CONTACT</span>
        <span>HAVE A GOOD PROJECT IN MIND?</span>
      </div>

      <div className="contact-content">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          LET&apos;S CREATE SOMETHING GOOD
        </p>

        <h2>
          Good work starts
          <br />
          with a <em>conversation.</em>
        </h2>

        <p>
          Open to UI Developer, UI Engineer and Frontend Developer
          opportunities across India.
        </p>

        <a
          className="button button-primary"
          href="mailto:your.email@example.com"
        >
          Get in touch <ArrowIcon />
        </a>
      </div>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span className="brand-name">ASHISH SONI</span>
        </a>

        <span>DESIGNED WITH INTENTION · BUILT WITH CARE</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils
        .toArray(
          ".section-kicker, .intro-grid, .principles > div, .expertise-heading, .expertise-card, .skills-content, .project-card, .contact-content"
        )
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <ScrollTraceBackground />
      <Header />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
