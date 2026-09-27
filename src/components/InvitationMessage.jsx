import { useEffect, useRef, useState } from "react";

const InvitationMessage = () => {
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
      className="px-6 text-center"
    >
      <h2
        className={`mb-4 transform-[skewX(-15deg)] text-[24px] font-armenian uppercase tracking-[0.25em] transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        Սիրելի՛ հյուրեր
      </h2>

      <p
        className={`mx-auto max-w-xl text-base leading-8 transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        Մենք ուրախությամբ սպասում ենք այն պահին, երբ կկարողանանք կիսել ձեզ հետ
        մեր կյանքի ամենակարևոր և երջանիկ օրը։
        Շատ շուտով կկայանա մեր պսակադրությունը։
        Հրավիրում ենք ձեզ՝ դառնալու այս հանդիսության մասնակիցը և կիսել մեզ հետ
        ամենավառ պահերը։
      </p>

      <p
        className={`mt-8 transform-[skewX(-15deg)] font-armenian text-xl font-light transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        Սիրով՝ Կարեն & Մարիամ
      </p>
    </section>
  );
};

export default InvitationMessage;