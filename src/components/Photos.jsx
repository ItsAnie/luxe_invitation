import photo1 from "../assets/image2.jpg";
import photo2 from "../assets/image.png";
import photo3 from "../assets/image1.jpg";
import message from "../assets/message.jpg";

export default function Photos() {
  return (
    <section className="overflow-hidden">
      <div className="flex w-full h-[800px] pr-9">
        
        {/* Ձախ նկար */}
        <div className="w-1/2 h-full">
          <img
            src={message}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Աջ նկարները */}
        <div className="w-1/2 h-full flex flex-col gap-3">
          <img
            src={photo1}
            alt=""
            className="w-full h-full object-contain"
          />
          <img
            src={photo2}
            alt=""
            className="w-full h-full object-contain"
          />
          <img
            src={photo3}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}