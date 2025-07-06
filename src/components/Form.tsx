import { useEffect, useState } from "react";
import Selects from "./Select";

type CiudadOption = {
  value: number;
  label: string;
};

export default function Form() {

  const [selectedDesde, setSelectedDesde] = useState<CiudadOption | null>(null);
  const [selectedHasta, setSelectedHasta] = useState<CiudadOption | null>(null);

  return (
    <div className="flex items-center justify-center">
      <form className="w-[550px] bg-white p-10 flex flex-col gap-10 rounded-xl">
        <div className="text-center text-4xl">
          <p>
            Encuentra
            <span className="block text-[#16A34A] font-bold">
              LA RUTA IDEAL
            </span>
            para tu viaje
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {/* <label>
            VIAJA DESDE:
            <select>

            </select>
          </label> */}
          <Selects
            selectedDesde={selectedDesde}
            setSelectedDesde={setSelectedDesde}
            selectedHasta={selectedHasta}
            setSelectedHasta={setSelectedHasta}
          />
          <label>
            Seleccionar Prioridad:
            <select>
              <option value="time">Tiempo óptimo</option>
              <option value="price">Precio más económico</option>
            </select>
          </label>
        </div>
        <button className="cursor-pointer text-xl bg-[#16A34A] p-[.6rem] rounded-[.7rem] text-white">
          BUSCAR
        </button>
      </form>
    </div>
  );
}
