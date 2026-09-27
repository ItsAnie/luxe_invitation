import { useEffect, useMemo, useRef, useState } from "react";
import heart from "../assets/heart.png";

export default function WeddingDay({ date }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const calendar = useMemo(() => {
    const weddingDate = new Date(date);

    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth();
    const weddingDay = weddingDate.getDate();

    // Ամսվա անունը ավտոմատ ստանում ենք անգլերենով
    const monthName = weddingDate.toLocaleString("en-US", {
      month: "long",
    });

    // Ամսվա առաջին օրվա weekday-ը
    const firstDay = new Date(year, month, 1).getDay();

    // Calendar-ը սկսում ենք Monday-ից
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    // Ամսվա օրերի քանակը
    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const days = [];

    // Դատարկ բջիջներ մինչև ամսվա առաջին օրը
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }

    // Ամսվա օրերը
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return {
      month: monthName,
      year,
      weddingDay,
      days,
    };
  }, [date]);

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

  // Անգլերեն շաբաթվա օրերը՝ Monday → Sunday
  const weekDays = Array.from(
    { length: 7 },
    (_, index) => {
      // 2021-06-07 = Monday
      const day = new Date(2021, 5, 7 + index);

      return day.toLocaleString("en-US", {
        weekday: "short",
      });
    }
  );

  return (
    <div ref={sectionRef}>
      <section className="bg-[#f5f1e9] px-7 pb-12">
        <div className="mx-auto max-w-md border-b border-black/40 pb-8">

          {/* Month */}
          <h2
            className={`border-b border-black/40 pb-2 text-center font-script text-4xl font-light transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {calendar.month}
          </h2>

          {/* Week days */}
          <div className="mt-8 grid grid-cols-7 text-center">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`font-serif text-sm font-light transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + index * 80}ms`,
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="mt-3 grid grid-cols-7 gap-y-5 text-center">
            {calendar.days.map((day, index) => {
              const isWeddingDay =
                day === calendar.weddingDay;

              return (
                <div
                  key={index}
                  className={`relative flex h-10 items-center justify-center transition-all duration-500 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 25}ms`,
                  }}
                >
                  {day && (
                    <>
                      {/* Wedding heart */}
                      {isWeddingDay && (
                        <span
                          className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000 ease-out ${
                            isVisible
                              ? "scale-100 opacity-100"
                              : "scale-50 opacity-0"
                          }`}
                          style={{
                            backgroundImage: `url(${heart})`,
                            transitionDelay: "1300ms",
                          }}
                        />
                      )}

                      {/* Day number */}
                      <span
                        className={`relative z-10 font-serif text-[20px] font-light transition-all duration-700 ${
                          isWeddingDay
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {day}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}