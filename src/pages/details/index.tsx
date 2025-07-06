import { PiAirplaneTiltFill } from "react-icons/pi";
import Header from "../../components/Header";
import { FaBuilding } from "react-icons/fa";

const Details = () => {
  return <section className="bg-[#f9fafb] h-full">
    <Header color={"black"} />
    <div className="mt-5 max-w-[90%] m-auto flex flex-col gap-[3rem]">
      <div>
        <h1 className="font-bold text-[32px]">Opción 2</h1>
        <p className="text-[#656565]">Lima → Cusco</p>
      </div>

      <div className="flex flex-col gap-[3rem]">
        <div className="w-full p-[2rem] flex justify-between items-center rounded-3xl bg-white drop-shadow-md">
          <div>
            <h3 className="font-bold text-[20px]">Resumen del Viaje</h3>
            <p className="text-[#656565]">Precio total</p>
          </div>

          <div>
            <p className="text-[#16A34A] text-[32px] font-semibold">S/ 192.00</p>
          </div>
        </div>

        <div className="w-full p-[1.5rem] flex justify-between items-center rounded-3xl border-1 border-[#16A34A]">
          <div className="flex gap-5">
            <div className="flex justify-center items-center">
              <PiAirplaneTiltFill color="16A34A" size={50} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Lima → Huánuco</h3>
              <p className="text-[#656565]">Vuelo</p>
              <div className="flex gap-1 items-center">
                <FaBuilding color="#656565"/>
                <p className="#656565">Empresa: Nombre de la empresa</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#16A34A] text-[32px] font-semibold">S/ 192.00</p>
          </div>
        </div>

        <div className="w-full p-[1.5rem] flex justify-between items-center rounded-3xl border-1 border-[#16A34A]">
          <div className="flex gap-5">
            <div className="flex justify-center items-center">
              <PiAirplaneTiltFill color="16A34A" size={50} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px]">Lima → Huánuco</h3>
              <p className="text-[#656565]">Vuelo</p>
              <div className="flex gap-1 items-center">
                <FaBuilding color="#656565"/>
                <p className="#656565">Empresa: Nombre de la empresa</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#16A34A] text-[32px] font-semibold">S/ 192.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Details;
