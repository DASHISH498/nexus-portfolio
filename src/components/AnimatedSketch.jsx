
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import traceSvg from "../assets/ashish-gold-trace.svg?raw";
import ashishGold from "../assets/ashish-3d.png";
import "./AnimatedSketch.css";

export default function AnimatedSketch() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const paths = root.querySelectorAll(".trace-path");
    const portrait = root.querySelector(".sketch-portrait");
    const glow = root.querySelector(".sketch-glow");

    if (!paths.length || !portrait) return;

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(portrait, {
        opacity: 0,
        scale: 0.985,
        transformOrigin: "center center",
      });

      gsap.set(glow, { opacity: 0 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
      });

      // Draw the actual contours extracted from your portrait.
      timeline.to(paths, {
        strokeDashoffset: 0,
        duration: 3.4,
        stagger: {
          each: 0.0007,
          from: "random",
        },
      });

      // Reveal the original portrait after the sketch is drawn.
      timeline.to(
        portrait,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.45"
      );

      timeline.to(
        glow,
        {
          opacity: 0.3,
          duration: 0.7,
          ease: "power2.out",
        },
        "<"
      );

      timeline.to(
        paths,
        {
          opacity: 0,
          duration: 0.65,
          ease: "power1.out",
        },
        "-=0.35"
      );

      timeline.to(
        glow,
        { opacity: 0.12, duration: 0.6 },
        "<"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="animated-sketch"
      aria-label="Animated golden sketch portrait"
    >
      <div className="sketch-glow" />

      <div
        className="sketch-trace"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: traceSvg }}
      />

      <img
        className="sketch-portrait"
        src={ashishGold}
        alt="Ashish's gold-and-black illustrated portrait"
        fetchPriority="high"
      />
    </div>
  );
}
