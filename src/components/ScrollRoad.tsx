import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from "../assets/car.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollRoad = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(carRef.current, {
        x: window.innerWidth * 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gray-200 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center">
        <div className="absolute left-0 w-32 h-40 bg-green-500 z-10" />

        <div className="w-full h-40 bg-gradient-to-r from-gray-900 to-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t-4 border-dashed border-yellow-400" />
          </div>
        </div>
      </div>

      <img
        ref={carRef}
        src={car}
        alt="car"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 z-20"
      />
    </section>
  );
};

export default ScrollRoad;