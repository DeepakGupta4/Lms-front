import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "../components/AnimatedCounter";
import { mobileApps } from "../data/apps";
import { products } from "../data/products";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";

// Typing-animation phrases — module scope keeps the reference stable across renders.
const textArray = ["web apps.", "React Native apps.", "full-stack products.", "delightful user experiences."];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (index) => setActiveIndex(index);
  const handleMouseOut = () => setActiveIndex(0);

  const services = [
    {
      title: "App Development",
      description: "Building innovative React Native & Expo apps published on Play Store & App Store — from concept to deployment."
    },
    {
      title: "Web Development",
      description: "I excel in delivering high-quality web development services, ensuring outstanding results tailored to the unique needs of your business."
    },
    {
      title: "Freelancer [App & Web]",
      description: "As a freelancer, I specialize in providing tailored services that deliver exceptional results, helping businesses achieve their goals."
    },
    {
      title: "Content Creator",
      description: "Passionate photographer and videographer capturing moments with creativity. Expert in visual storytelling, skilled in both photography and videography."
    }
  ];

  // Typing animation
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1000;

  useEffect(() => {
    const currentText = textArray[textIndex];

    if (pause) {
      const pauseTimeout = setTimeout(() => {
        setPause(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) setPause(true);
      } else {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, pause]);

  // Cinematic curtain reveal: the banner splits open on scroll to reveal the hero.
  // Desktop only (pinned scrub); on mobile the hero just shows normally.
  //
  // useLayoutEffect + gsap.context (scoped to the section) is important: GSAP's
  // `pin` wraps the section in a pin-spacer, re-parenting the node. The context's
  // cleanup runs synchronously (layout phase) BEFORE React removes this route from
  // the DOM, so the pin is torn down first. Without it, React hits "removeChild is
  // not a child of this node" on navigation and the hero stays stuck over every
  // other page.
  const revealRef = useRef(null);
  useLayoutEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=130%",
            scrub: 1,
            pin: el,
            anticipatePin: 1,
          },
        });

        tl.to(".reveal__hint", { opacity: 0, duration: 0.15 }, 0)
          .to(".curtain--top", { yPercent: -100, ease: "power2.inOut", duration: 0.6 }, 0)
          .to(".curtain--bottom", { yPercent: 100, ease: "power2.inOut", duration: 0.6 }, 0)
          .fromTo(".reveal__stage", { scale: 1.12 }, { scale: 1, ease: "none", duration: 0.6 }, 0)
          .to({}, { duration: 0.4 }); // hold fully-open before the section ends
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <title>Deepak Gupta - Portfolio</title>

      {/* ===== Cinematic curtain-reveal hero ===== */}
      <section className="reveal" ref={revealRef}>
        <div className="reveal__sticky">
          {/* The hero revealed behind the banner (images are back) */}
          <div className="reveal__stage">
            <div className="reveal__glow" aria-hidden="true"></div>
            <div className="container">
              <div className="reveal__grid">
                <div className="reveal__text">
                  <span className="hero_badge">
                    <span className="hero_badge_dot"></span> Open to freelance work
                  </span>
                  <h1 className="hero_headline">
                    I build <span className="hero_grad">web &amp; mobile apps</span> that real people use.
                  </h1>
                  <p className="hero_sub">
                    MERN + React Native (Expo) developer. I design, build and ship{" "}
                    <span className="hero_typed">{text}</span>
                    <span className="hero_caret">|</span>
                  </p>
                  <div className="hero_proof">
                    <span className="hero_proof_item"><b className="gold">★ 4</b> apps live on Play Store</span>
                    <span className="hero_proof_sep"></span>
                    <span className="hero_proof_item"><b>10+</b> products built</span>
                    <span className="hero_proof_sep"></span>
                    <span className="hero_proof_item"><b>5+</b> live websites</span>
                  </div>
                  <div className="hero_cta">
                    <Link to="/projects" className="btn_primary">View My Work</Link>
                    <Link to="/contact" className="btn_ghost">Hire Me <GoArrowUpRight /></Link>
                    <a href="/Deepak Gupta Resume.pdf" download className="btn_text">
                      Download CV <BiDownload />
                    </a>
                  </div>
                  <ul className="hero_social hero_social--left">
                    <li><a href="https://www.instagram.com/deepakgupta_8172/?igsh=MTQxZnZvdzYydDMwNg%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/deepak-gupta-633b00286/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><GrLinkedinOption /></a></li>
                    <li><a href="https://github.com/DeepakGupta4" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a></li>
                    <li><a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a></li>
                  </ul>
                </div>

                <div className="reveal__visual">
                  <div className="reveal__photo">
                    <img src="/assets/c.JPG" alt="Deepak Gupta" />
                    <div className="reveal__photo-badge">
                      <span className="reveal__photo-badge-num">4</span>
                      <span>Apps live on<br />Google Play</span>
                    </div>
                  </div>
                  <div className="reveal__apps">
                    {mobileApps.map((app) => (
                      <a
                        key={app.id}
                        href={app.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={app.name}
                        className="reveal__appchip"
                      >
                        <img src={app.icon} alt={app.name} loading="lazy" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The banner that splits open on scroll */}
          <div className="curtain curtain--top">
            <span className="curtain__name">DEEPAK GUPTA</span>
          </div>
          <div className="curtain curtain--bottom">
            <span className="curtain__role">Full-Stack · React Native Developer</span>
          </div>

          <div className="reveal__hint">
            <span>Scroll to enter</span>
            <span className="reveal__hint-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="statsband">
        <div className="container">
          <div className="funfect_area flex flex-sb">
            <div className="funfect_item" data-aos="fade-right">
              <h3><AnimatedCounter end={12} suffix="+" /></h3>
              <h4>Products<br />Built</h4>
            </div>
            <div className="funfect_item" data-aos="fade-up">
              <h3><AnimatedCounter end={8} suffix="+" /></h3>
              <h4>Web<br />Applications</h4>
            </div>
            <div className="funfect_item" data-aos="fade-up">
              <h3><AnimatedCounter end={4} /></h3>
              <h4>Mobile<br />Apps</h4>
            </div>
            <div className="funfect_item" data-aos="fade-left">
              <h3><AnimatedCounter end={15} suffix="+" /></h3>
              <h4>Technologies<br />Mastered</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div>
          <div className="container">
            <div className="services_titles">
              <h2>MY Quality Services</h2>
              <p>We transform your vision and ideas into exceptional web & mobile projects that captivate both you and your customers.</p>
            </div>
            <div className="services_menu">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`services_item ${activeIndex === index ? 'sactive' : ''}`}
                  onMouseOver={() => handleHover(index)}
                  onMouseOut={handleMouseOut}
                >
                  <div className="left_s_box">
                    <span>0{index + 1}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="right_s_box">
                    <p>{service.description}</p>
                  </div>
                  <GoArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products preview */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>Products Built &amp; Deployed</h2>
            <p>Real, production-grade software across healthcare, AI, e-commerce, education and enterprise domains — not just landing pages.</p>
          </div>
          <div className="projects_cards" data-aos="fade-up">
            {products.slice(0, 4).map((p, index) => (
              <Link
                to="/projects"
                key={p.id}
                className="procard"
                style={{ "--app-accent": p.accent }}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
              >
                {p.image ? (
                  <div className="proimgbox">
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </div>
                ) : (
                  <div className="proimgbox procard_ph">
                    <span className="procard_ph_emoji">{p.emoji}</span>
                    <h4>{p.name}</h4>
                  </div>
                )}
                <div className="procontentbox">
                  <h2>{p.name}</h2>
                  <p>{p.type}</p>
                  <GoArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-center home_prod_more">
            <Link to="/projects" className="btn_primary">
              View All Products <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="mobileapps">
        <div className="container">
          <div className="myskills_title" data-aos="fade-up">
            <h2>Apps I've Shipped to the Play Store</h2>
            <p>4 live React Native (Expo) apps — real products, real users. Tap any card to open it on Google Play.</p>
          </div>
          <div className="mobileapps_grid">
            {mobileApps.map((app, index) => (
              <a
                className="appcard"
                key={app.id}
                href={app.playstore}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ "--app-accent": app.accent }}
              >
                <div className="appcard_head">
                  <img className="appcard_logo" src={app.icon} alt={`${app.name} app icon`} loading="lazy" />
                  <div className="appcard_headinfo">
                    <h3>{app.name}</h3>
                    <span className="appcard_dev">{app.developer}</span>
                    <div className="appcard_meta">
                      <span className="appcard_rating">★ {app.rating}</span>
                      <span className="appcard_dot">•</span>
                      <span className="appcard_cat">{app.tag}</span>
                    </div>
                  </div>
                </div>
                <p className="appcard_desc">{app.desc}</p>
                <span className="appcard_tech">{app.tech}</span>
                <div className="appcard_cta">
                  <span className="store_badge playstore_badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.96-3.37-3.37L3.18 23.76zM.54 1.96C.2 2.3 0 2.85 0 3.57v16.86c0 .72.2 1.27.54 1.61l.08.08 9.44-9.44v-.22L.62 1.88l-.08.08zM20.12 10.5l-2.68-1.55-3.77 3.77 3.77 3.77 2.7-1.56c.77-.44.77-1.16 0-1.6l-.02-.83zM4.17.24l12.6 11.96-3.37 3.37L3.18.24C3.48.07 3.87.07 4.17.24z"/>
                    </svg>
                    Get it on Google Play
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience" data-aos="flip-right">
            <div className="experience_title flxe gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2025-Present</span>
                <h3>Freelance</h3>
                <p>Full Stack App/Web Developer</p>
              </div>
              <div className="exper_card">
                <span>2024-Present</span>
                <h3>React Native Developer</h3>
                <p>4 Apps Published on Play Store & App Store</p>
              </div>
              <div className="exper_card">
                <span>2024-Present</span>
                <h3>Freelance</h3>
                <p>Video Editor</p>
              </div>
            </div>
          </div>
          <div className="experience" data-aos="flip-left">
            <div className="experience_title flxe gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>2018-2019</span>
                <h3>Higher Secondary Education</h3>
                <p>Navjeewan Inter College Patherwa Kushinagar</p>
              </div>
              <div className="exper_card">
                <span>2019-2022</span>
                <h3>Diploma</h3>
                <p>SIRT Bhopal</p>
              </div>
              <div className="exper_card">
                <span>2022-2025</span>
                <h3>B.Tech</h3>
                <p>SAM Global University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>Technologies I use to build web & mobile applications</p>
          </div>
          <div className="myskils_cards">
            {[
              { name: "React", img: "/assets/react.svg", percent: "80%" },
              { name: "React Native", img: "/assets/react.svg", percent: "75%" },
              { name: "Expo", img: "/assets/ex.png", percent: "70%" },
              { name: "Node", img: "/assets/nodejs.png", percent: "90%" },
              { name: "MongoDB", img: "/assets/mongodb.svg", percent: "90%" },
              { name: "Express", img: "/assets/express.svg", percent: "77%" },
              { name: "JavaScript", img: "/assets/js.svg", percent: "75%" },
              { name: "Tailwind CSS", img: "/assets/8.svg", percent: "71%" },
              { name: "Firebase", img: "/assets/firebase.svg", percent: "65%" },
              { name: "Python", img: "/assets/python.jpeg", percent: "25%" },
              { name: "Capcut", img: "/assets/11.svg", percent: "60%" },
              { name: "Canva", img: "/assets/13.svg", percent: "50%" }
            ].map((skill, index) => (
              <div className="mys_card" key={index}>
                <div className="mys_inner" data-aos="fade-up" data-aos-delay={index * 50}>
                  <img src={skill.img} alt={skill.name} />
                  <h2>{skill.percent}</h2>
                </div>
                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
