import photo1 from "../assets/image2.jpg";
import photo2 from "../assets/image.png";
import photo3 from "../assets/image1.jpg";

export default function Photos() {

  return (
    <section className="overflow-hidden">
        <div className="flex justify-center w-full gap-5 px-12">
            <h2 className="font-serif [writing-mode:vertical-rl] text-center text-[55px] font-light bg-black text-white py-3">We are waiting for you.</h2>
            <div className="flex flex-col gap-5">
                <img src={photo1} className="object-contain" />
                <img src={photo2} className="object-contain" />
                <img src={photo3} className="object-contain" />
            </div>
        </div>
    </section>
  );
}