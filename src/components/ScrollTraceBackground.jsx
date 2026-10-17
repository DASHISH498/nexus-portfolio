
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import traceSvg from "../assets/ashish-gold-trace.svg?raw";
import "./ScrollTraceBackground.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTraceBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const element = backgroundRef.current;
    const hero = document.querySelector("#home");

    if (!element || !hero) return;

    const ctx = gsap.context(() => {
      const svg = element.querySelector("svg");
      if (!svg) return;

      const shapes = Array.from(
        svg.querySelectorAll(
          "path, line, polyline, polygon, circle, ellipse, rect"
        )
      );

      // Hide the complete background before the animation starts.
      gsap.set(element, {
        autoAlpha: 0,
      });

      // Prepare every SVG shape for the drawing animation.
      shapes.forEach((shape) => {
        try {
          if (typeof shape.getTotalLength !== "function") return;

          const length = shape.getTotalLength();
          if (!length) return;

          shape.style.fill = "none";
          shape.style.stroke = "#d6ad60";
          shape.style.strokeDasharray = `${length}`;
          shape.style.strokeDashoffset = `${length}`;
        } catch {
          // Ignore unsupported SVG shapes.
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "bottom top",
          end: "+=1000",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Reveal the background only after the hero leaves the viewport.
      timeline.to(element, {
        autoAlpha: 0.3,
        duration: 0.15,
        ease: "none",
      });

      // Draw the SVG progressively as the user scrolls.
      timeline.to(
        shapes,
        {
          strokeDashoffset: 0,
          duration: 0.85,
          ease: "none",
          stagger: {
            each: 0.001,
            from: "start",
          },
        },
        0.15
      );
    }, backgroundRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="scroll-trace-background"
      aria-hidden="true"
    >
      <div
        className="scroll-trace-art"
        dangerouslySetInnerHTML={{ __html: traceSvg }}
      />
      <div className="scroll-trace-shade" />
    </div>
  );
}
