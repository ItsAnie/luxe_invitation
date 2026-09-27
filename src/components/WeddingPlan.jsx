import { useEffect, useRef, useState } from "react";

export default function WeddingPlan({ data }) {
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

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-8 py-12"
    >
      <div className="mx-auto bg-[#6B2737] text-white max-w-md py-9">
        <div className="relative mx-auto max-w-md overflow-hidden bg-[#6B2737] px-8 text-white">

          {/* Decorative line */}
          <svg
            viewBox="0 0 400 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 280 60
                C 40 60, 20 230, 180 270
                C 340 310, 360 480, 180 520
                C 30 550, 80 680, 260 680
              "
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10">

            {/* Title */}
            <h2
              className={`text-start font-light font-script italic text-[30px] transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              {data.plan.title}
            </h2>


            {/* Bride */}
            <div
              className={`flex min-h-[130px] justify-end transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              <div className="text-right font-light">
                <p className="mt-1 font-serif">
                  {data.plan.bride.time}
                </p>  
                <h2 className="font-armenian">
                  {data.plan.bride.title}
                </h2>

                <p className="mt-1 font-light">
                  {data.plan.bride.address}
                </p>
              </div>
            </div>


            {/* Ceremony */}
            <div
              className={`flex min-h-[130px] items-start transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1900ms" }}
            >
              <div className="text-left mt-3 font-light">
                <h2 className="font-armenian">
                  {data.ceremony.title}
                </h2>

                <p className="mt-1 font-serif">
                  {data.ceremony.time}
                </p>

                <p className="mt-1">
                  {data.ceremony.address}
                </p>
              </div>
            </div>


            {/* Reception */}
            <div
              className={`flex min-h-[130px] justify-end transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "2700ms" }}
            >
              <div className="text-right mt-3 font-light">
                <h2 className="font-armenian">
                  {data.reception.venue}
                </h2>

                <p className="mt-1 font-serif">
                  {data.reception.time}
                </p>

                <p className="mt-1">
                  {data.reception.address}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}