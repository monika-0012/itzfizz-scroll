import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroIntro = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const letters = headlineRef.current?.querySelectorAll("span");

if (letters) {
  gsap.from(letters, {
    y: 40,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power3.out",
  });
}

    gsap.from(statsRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.6,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <section className="h-screen overflow-hidden flex flex-col items-center justify-center bg-gray-100">
      <div
        ref={headlineRef}
        className="text-5xl md:text-7xl font-bold tracking-[0.3em] md:tracking-[0.5em] mb-10 text-center"
      >
        {headline.split("").map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </div>

      <div className="flex gap-12">
        {[
          { value: "98%", label: "Client Satisfaction" },
          { value: "120+", label: "Projects Delivered" },
          { value: "10K+", label: "Active Users" },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => {
  if (el) statsRef.current[index] = el;
}}
            className="text-center"
          >
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroIntro;