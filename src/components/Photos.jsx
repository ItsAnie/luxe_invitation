import photo1 from "../assets/image2.jpg";
import photo2 from "../assets/image.png";
import photo3 from "../assets/image1.jpg";

export default function Photos() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-[auto_1fr] gap-5 px-6 sm:px-10 lg:px-12">

        <h2 className="flex items-center justify-center bg-black px-3 py-6 font-serif text-[clamp(32px,5vw,70px)] font-light text-white [writing-mode:vertical-rl]">
          We are waiting for you.
        </h2>

        <div className="flex flex-col gap-5">
          <img
            src={photo1}
            alt=""
            className="block h-auto w-full object-cover"
          />

          <img
            src={photo2}
            alt=""
            className="block h-auto w-full object-cover"
          />

          <img
            src={photo3}
            alt=""
            className="block h-auto w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}