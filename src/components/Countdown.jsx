import { useEffect, useRef, useState } from "react";

function getTimeLeft(targetDate) {
  const difference =
    new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function Countdown({ targetDate }) {
  const [time, setTime] = useState(
    getTimeLeft(targetDate)
  );

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
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const values = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-5 py-9"
    >


      {/* Countdown */}
      <div
        className={`mx-auto grid max-w-xl grid-cols-4 border-y border-black/40 py-6 transition-all duration-1000 ease-out delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        {values.map(([label, value], index) => (
          <div
            key={label}
            className={`border-r border-black/30 last:border-r-0 transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: `${400 + index * 150}ms`,
            }}
          >
            <div className="text-center font-script text-xl font-light transition-all duration-300">
              {String(value).padStart(2, "0")}
            </div>

            <p className="mt-1 text-center font-serif text-[9px] italic uppercase tracking-[0.2em]">
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}