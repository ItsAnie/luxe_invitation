import code1 from "../assets/code1.jpg"
import code2 from "../assets/code2.jpg"
import code3 from "../assets/code3.jpg"
import code4 from "../assets/code4.jpg"
import code5 from "../assets/code5.jpg"
import code6 from "../assets/code6.jpg"

export default function Instagram() {
  return (
    <section className="bg-[#f5f1e9]">

      <div className="px-7 pb-12 flex flex-col justify-center items-center">

        <h2 className="font-script text-[30px] italic">
          Dress Code
        </h2>

        <div className="mt-8 flex flex-col gap-[15px] text-center">
            <div className="flex gap-[25px]">
              <img src={code1} className="rounded-full w-[50px] h-[50px]"/>
              <img src={code2} className="rounded-full w-[50px] h-[50px]"/>
              <img src={code3} className="rounded-full w-[50px] h-[50px]"/>
            </div>

            <div className="flex gap-[25px]">
              <img src={code4} className="rounded-full w-[50px] h-[50px]"/>
              <img src={code5} className="rounded-full w-[50px] h-[50px]"/>
              <img src={code6} className="rounded-full w-[50px] h-[50px]"/>
            </div>

        </div>
        <p className="mx-auto mt-6 max-w-md leading-6 text-[#77776c] text-center">
          Մենք շատ ջանացինք տոնը գեղեցիկ դարձնել, և ուրախ կլինենք, եթե դուք աջակցեք տոնակատարության գունային գամմային։
        </p> 

      </div>

    </section>
  );
}