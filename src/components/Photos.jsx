import photo1 from "../assets/image2.jpg";
import photo2 from "../assets/image.png";
import photo3 from "../assets/image1.jpg";

export default function Photos() {
  return (
    <section className="overflow-hidden">
      <div className="flex w-full items-stretch justify-center gap-5 px-6 sm:px-10 lg:px-12">

        <div className="flex flex-1 items-center justify-center bg-black">
          <h2 className="font-serif text-[clamp(30px,5vw,70px)] font-light leading-none text-white [writing-mode:vertical-rl]">
            We are waiting for you.
          </h2>
        </div>

        <div className="flex w-2/3 max-w-md flex-col gap-5">
          <img src={photo1} alt="" className="block h-auto w-full" />
          <img src={photo2} alt="" className="block h-auto w-full" />
          <img src={photo3} alt="" className="block h-auto w-full" />
        </div>

      </div>
    </section>
  );
}