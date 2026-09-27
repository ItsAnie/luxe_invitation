import { useEffect, useRef, useState } from "react";
import table from "../assets/table.png";

export default function Reception({ event }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-7 py-14 text-center"
    >
      <div className="mx-auto bg-[#6B2737] flex max-w-md flex-col items-center justify-center border-b border-[#b8b29f]/40 py-10 px-10">
        <h2
          className={`font-script text-[30px] italic text-white transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {event.title}
        </h2>

        <p
          className={`text-sm font-serif mt-4 uppercase tracking-[0.16em] text-white transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {event.venue}
        </p>

        <p
          className={`mt-1 text-sm text-white font-serif transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          {event.address}
        </p>
        <p
          className={`font-serif text-white text-sm text-[#77786b] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {event.time}
        </p>

        <img src={table} className="h-[200px] w-full object-cover my-8" />

        <button className={`cursor-pointer border border-white rounded-xl py-2 px-4 text-white font-armenian font-light text-sm transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: "1500ms" }}>
          <a
            href={event.mapUrl}
            target="_blank"
          >
            Բացել քարտեզում
          </a>
        </button>

      </div>
    </section>
  );
}