import { useEffect, useState, useRef } from "react";
import couple from "../assets/couple.png";
import romanticSong from "../assets/Stephen Sanchez - Until I Found You.mp3";

export default function Hero({ data }) {
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio play error:", error);
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">

      <img
        src={couple}
        alt="Wedding couple"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[12000ms] ease-out ${
          show ? "scale-[1.06]" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 px-6 py-16 text-center text-white">

        <div
          className={`transition-all duration-1000 ease-out ${
            show
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <p className="text-l font-light uppercase tracking-[0.4em] font-serif">
            {data.intro}
          </p>
        </div>

        <div className="mt-auto">

          <h1
            className={`font-script italic font-light mt-4 text-[37px] drop-shadow-md transition-all duration-1000 ease-out delay-300 ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {data.groom} & {data.bride}
          </h1>

          <p
            className={`mt-4 font-sans text-l tracking-[0.25em] transition-all duration-1000 ease-out delay-[1000ms] ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            {data.date}
          </p>

        </div>
        {/* Music button */}
        <div
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className={`fixed top-1/3 left-0 bottom-5 flex h-15 w-15 -translate-y-1/2 items-center justify-center rounded-r-xl bg-black/50 backdrop-blur-sm transition-all duration-1000 hover:bg-white/15 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {isPlaying ? (
            <span className="flex gap-[5px]">
              <span className="h-4 w-[4px] bg-white" />
              <span className="h-4 w-[4px] bg-white" />
            </span>
          ) : (
            <span className="ml-[2px] h-0 w-0 border-y-[8px] border-l-[11px] border-y-transparent border-l-white" />
          )}

        </div>
      </div>
      {/* Audio */}
      <audio
        ref={audioRef}
        src={romanticSong}
        loop
        onEnded={() => setIsPlaying(false)}
      />

    </section>
  );
}