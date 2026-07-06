import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { mobileApps } from "../data/apps";

export default function Projects() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const projectsData = [
    {
      _id: "1",
      title: "Portfolio Website",
      slug: "portfolio-website",
      images: ["./assets/Portfolio.png"],
      category: "Website Development",
      link: "/",
    },
    {
      _id: "2",
      title: "My Friend Shop Website",
      slug: "friend-shop",
      images: ["./assets/friendshop.png"],
      category: "Website Development",
      link: "https://sarkar-frontend.vercel.app"
    },
    {
      _id: "3",
      title: "Design System for Dashboard",
      slug: "logo-design",
      images: ["./assets/desindashboard.png"],
      category: "Design System",
      link: "",
    },
    {
      _id: "4",
      title: "Learning Management System",
      slug: "lms-website",
      images: ["./assets/lms.png"],
      category: "Website Development",
      link: "https://lms-frontend-lyart-five.vercel.app/",
    },
  ];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((pro) => pro.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const showApps = selectedCategory === "All" || selectedCategory === "App Development";

  return (
    <>
      <title>Projects</title>
      <div className="projectpage">
        <div className="projects">
          <div className="container">
            <div className="project_titles">
              <h2>My Recent Works</h2>
              <p>Web projects, mobile apps and design systems — built with passion and precision.</p>
            </div>

            <div className="project_buttons">
              <button className={selectedCategory === "All" ? "active" : ""} onClick={() => setSelectedCategory("All")}>All</button>
              <button className={selectedCategory === "Website Development" ? "active" : ""} onClick={() => setSelectedCategory("Website Development")}>Website</button>
              <button className={selectedCategory === "App Development" ? "active" : ""} onClick={() => setSelectedCategory("App Development")}>Mobile Apps</button>
              <button className={selectedCategory === "Design System" ? "active" : ""} onClick={() => setSelectedCategory("Design System")}>Design</button>
            </div>

            {/* Web Projects */}
            {selectedCategory !== "App Development" && (
              <div className="projects_cards">
                {loading ? (
                  <div className="flex flex-center wh_100">
                    <Spinner />
                  </div>
                ) : filteredProjects.length === 0 ? (
                  <h1 className="w-100 flex flex-center mt-3">No Project Found</h1>
                ) : (
                  filteredProjects.map((pro) => (
                    <a
                      href={pro.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="procard"
                      key={pro._id}
                      data-aos="fade-up"
                    >
                      <div className="proimgbox">
                        <img src={pro.images[0]} alt={pro.title} />
                      </div>
                      <div className="procontentbox">
                        <h2>{pro.title}</h2>
                        <GoArrowUpRight />
                      </div>
                    </a>
                  ))
                )}
              </div>
            )}

            {/* Mobile Apps */}
            {showApps && (
              <>
                {selectedCategory === "All" && (
                  <div className="myskills_title mt-3" data-aos="fade-up">
                    <h2>Mobile Apps</h2>
                    <p>Published on Play Store & App Store — built with React Native & Expo</p>
                  </div>
                )}
                <div className="mobileapps_grid mt-3">
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
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
