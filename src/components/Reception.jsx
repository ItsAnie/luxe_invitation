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

  const animation = (delay) =>
    `transition-all duration-700 ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-5 opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-7 py-14 text-center"
    >
      <div className="mx-auto flex max-w-md flex-col items-center justify-center border-b border-[#b8b29f]/40 bg-[#6B2737] px-10 py-10">

        {/* 1. Title */}
        <h2
          className={`font-script text-[30px] italic text-white ${animation(
            0
          )}`}
          style={{ transitionDelay: "200ms" }}
        >
          {event.title}
        </h2>

        {/* 2. Venue */}
        <p
          className={`mt-4 font-serif text-sm uppercase tracking-[0.16em] text-white ${animation(
            0
          )}`}
          style={{ transitionDelay: "500ms" }}
        >
          {event.venue}
        </p>

        {/* 3. Address */}
        <p
          className={`mt-1 font-serif text-sm text-white ${animation(0)}`}
          style={{ transitionDelay: "800ms" }}
        >
          {event.address}
        </p>

        {/* 4. Time */}
        <p
          className={`font-serif text-sm text-white ${animation(0)}`}
          style={{ transitionDelay: "1100ms" }}
        >
          {event.time}
        </p>

        {/* 5. Image */}
        <img
          src={table}
          alt=""
          className={`my-8 h-[200px] w-full object-cover ${animation(0)}`}
          style={{ transitionDelay: "1400ms" }}
        />

        {/* 6. Button */}
        <button
          className={`cursor-pointer rounded-xl border border-white px-4 py-2 font-armenian text-sm font-light text-white ${animation(
            0
          )}`}
          style={{ transitionDelay: "1700ms" }}
        >
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Բացել քարտեզում
          </a>
        </button>

      </div>
    </section>
  );
}