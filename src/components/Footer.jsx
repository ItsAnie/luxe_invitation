import instagram from "../assets/instagram.png"

export default function Footer() {
  return (
    <footer className="bg-[#6B2737] text-white w-full flex flex-col items-center py-[20px] rounded-t-[50px]">
        <div className="flex justify-center items-center gap-[20px]">
            
            <p className="font-serif text-xl">Contacts</p>|
            
            <div className="flex flex-col">
                <a href="tel:044444444" className="cursor-pointer">044 44-44-44</a>
                <a href="tel:095959595" className="cursor-pointer">095 95-95-95</a>
            </div>
        </div>
        <a href="https://www.instagram.com/elaris_digi?stkn=MWpkc2Q4ZXRmcjlkdw==" 
            className="flex items-center gap-2 font-serif text-[16px] uppercase mt-[20px] max-w-[250px] text-center font-thin">
            <img src={instagram} className="w-[30px]" />
            Elaris
        </a>
    </footer>
  );
}