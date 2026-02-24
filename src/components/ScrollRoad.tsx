import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from "../assets/car.webp";

gsap.registerPlugin(ScrollTrigger);

const ScrollRoad = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(carRef.current, {
        x: "120vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom+=1000 top",
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
  className="relative h-[200vh] bg-gray-200 overflow-hidden"
>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

    <div className="absolute left-0 w-32 h-40 bg-green-500 z-10" />

    <div className="w-full h-40 bg-gradient-to-r from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full border-t-4 border-dashed border-yellow-400" />
      </div>

      <img
        ref={carRef}
        src={car}
        alt="car"
        className="absolute left-4 top-1/2 -translate-y-1/2 
                   w-[180px] sm:w-[220px] md:w-[260px] 
                   h-auto object-contain z-20"
      />
    </div>

  </div>
    </section>
  );
};

export default ScrollRoad;