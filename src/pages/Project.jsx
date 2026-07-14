import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { mobileApps } from "../data/apps";
import {
  products,
  productCategories,
  productHighlights,
  STATUS,
} from "../data/products";

// Coloured status dot for the on-card corner badge (theme-independent —
// the badge floats on dark glass over the screenshot / placeholder).
const STATUS_DOT = {
  live: "#27c93f",
  production: "#4facfe",
  playstore: "#27c93f",
  website: "#38bdf8",
  enterprise: "#a78bfa",
  ai: "#e879f9",
  private: "#f5b301",
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <title>Projects · Products Built & Deployed</title>

      <div className="projectpage">
        <div className="projects">
          <div className="container">
            {/* ===== Heading + positioning ===== */}
            <div className="project_titles">
              <h2>Products Built &amp; Deployed</h2>
              <p>
                Not just landing pages — real, production-grade software across
                healthcare, AI, e-commerce, education and enterprise domains.
              </p>
            </div>

            <div className="showcase_badges" data-aos="fade-up">
              {productHighlights.map((badge) => (
                <span className="showcase_badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>

            {/* ===== Category filter ===== */}
            <div className="project_buttons showcase_filter">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ===== Product cards (image + hover reveal) ===== */}
            {filteredProducts.length === 0 ? (
              <h1 className="w-100 flex flex-center mt-3">No Project Found</h1>
            ) : (
              <div className="projects_cards">
                {filteredProducts.map((product, index) => {
                  const url = product.liveUrl || product.playStoreUrl || null;
                  const primary = product.status?.[0];
                  const s = primary ? STATUS[primary] : null;
                  const CardTag = url ? "a" : "div";
                  const linkProps = url
                    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <CardTag
                      className="procard"
                      key={product.id}
                      style={{ "--app-accent": product.accent }}
                      data-aos="fade-up"
                      data-aos-delay={(index % 2) * 100}
                      {...linkProps}
                    >
                      {product.image ? (
                        <div className="proimgbox">
                          <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                      ) : (
                        <div className="proimgbox procard_ph">
                          <span className="procard_ph_emoji">{product.emoji}</span>
                          <h4>{product.name}</h4>
                        </div>
                      )}

                      {s && (
                        <span
                          className="procard_badge"
                          style={{ "--badge-dot": STATUS_DOT[s.kind] }}
                        >
                          {s.label}
                        </span>
                      )}

                      <div className="procontentbox">
                        <h2>{product.name}</h2>
                        <p>{product.type}</p>
                        <GoArrowUpRight />
                      </div>
                    </CardTag>
                  );
                })}
              </div>
            )}

            {/* ===== Mobile Applications (Play Store) ===== */}
            <div className="myskills_title mt-3 showcase_mobile_title" data-aos="fade-up">
              <h2>Mobile Applications</h2>
              <p>
                Live on the Google Play Store — real React Native (Expo) apps
                with real users. Tap any card to open it on Google Play.
              </p>
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
                    <img
                      className="appcard_logo"
                      src={app.icon}
                      alt={`${app.name} app icon`}
                      loading="lazy"
                    />
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
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="16"
                        height="16"
                      >
                        <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.96-3.37-3.37L3.18 23.76zM.54 1.96C.2 2.3 0 2.85 0 3.57v16.86c0 .72.2 1.27.54 1.61l.08.08 9.44-9.44v-.22L.62 1.88l-.08.08zM20.12 10.5l-2.68-1.55-3.77 3.77 3.77 3.77 2.7-1.56c.77-.44.77-1.16 0-1.6l-.02-.83zM4.17.24l12.6 11.96-3.37 3.37L3.18.24C3.48.07 3.87.07 4.17.24z" />
                      </svg>
                      Get it on Google Play
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
