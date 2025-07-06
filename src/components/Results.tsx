import Header from "./Header";
import Medal1 from "../assets/imgs/medal1.png";
import Medal2 from "../assets/imgs/medal2.png";
import Medal3 from "../assets/imgs/medal3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function Results() {

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { delay: 0.1, duration: 1, autoAlpha: 1 },
    });
    tl.to(".card3", {}).to(".card2", {}).to(".card1", {});
  });

  return (
    <section className="w-full h-full flex flex-col bg-section">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[64px] font-bold">TOP 3 rutas</h1>
          <p className="text-[32px]">Mas baratas</p>
          <p className="text-[32px]">Origen → Destino</p>
        </div>
      </div>
      <div className="flex-1/3 relative">
        <div className="grid grid-cols-1 h-full">
          {/* <div className="py-15 px-5 flex justify-center items-end">
            <div className="cards card3 flex w-full max-w-md bg-[#dcfce7] h-[176px] rounded-[15px]">
              <div className="flex-1 flex h-full items-center justify-center">
                <img src={Medal2} alt="medal-2" />
              </div>
              <div className="flex-1 flex flex-col h-full items-center justify-center text-center">
                <h1 className="text-[#16A34A] text-[48px] font-bold">S/. X</h1>
                <p className="text-[20px]">Segunda opcion</p>
              </div>
            </div>
          </div> */}
          <div className="py-15 px-5 flex justify-center items-end">
            <div className="cards card1 flex w-full  bg-[#16A34A] h-[355px] rounded-[15px]">
              <div className="flex-1 flex h-full items-center justify-center">
                <img src={Medal1} alt="medal-2" />
              </div>
              <div className="text-white flex-1 flex flex-col h-full items-center justify-center text-center">
                <h1 className="text-[96px] font-bold">S/. X</h1>
                <p className="text-[32px]">Primera opcion</p>
              </div>
            </div>
          </div>
          {/* <div className="py-15 px-5 flex justify-center items-end">
            <div className="cards card2 flex w-full max-w-md bg-[#dcfce7] h-[176px] rounded-[15px]">
              <div className="flex-1 flex h-full items-center justify-center">
                <img src={Medal3} alt="medal-2" />
              </div>
              <div className="flex-1 flex flex-col h-full items-center justify-center text-center">
                <h1 className="text-[#16A34A] text-[48px] font-bold">S/. X</h1>
                <p className="text-[20px]">Tercera opcion</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="modal fixed justify-center items-center h-full w-full bg-transparent">
        <div className="w-[95vw] h-[95vh] contx">
        </div>
      </div>
    </section>
  );
}
