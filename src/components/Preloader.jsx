// components/Preloader.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onFinish }) => {
  const rootRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    const tl = gsap.timeline({
      onComplete: () => onFinish && onFinish(),
    });

    // Show the animated name, then curtain-up to reveal the page beneath.
    tl.to(".preloader-heading .load-text span", {
      delay: 1.6,
      y: -60,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.in",
    })
      .to(svgRef.current, { duration: 0.5, attr: { d: curve }, ease: "power2.in" })
      .to(svgRef.current, { duration: 0.5, attr: { d: flat }, ease: "power2.out" })
      .to(rootRef.current, { y: "-100vh", duration: 0.7, ease: "power2.inOut" }, "-=0.15");

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="preloader" ref={rootRef}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          ref={svgRef}
          id="preloaderSvg"
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        ></path>
      </svg>

      <div className="preloader-heading">
        <div className="load-text">
          <span>D</span>
          <span>E</span>
          <span>E</span>
          <span>P</span>
          <span>A</span>
          <span>K</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
