import React from "react";
import { FaBuilding } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

type Step = {
  destino: string;
  destino_name: string;
  distancia_km: number;
  duracion_min: number;
  empresa: string;
  id: string;
  origen: string;
  origen_name: string;
  precio_soles: number;
  tipo_transporte: string;
};

const CardStep = ({ step, criteria }: { step: Step; criteria: string }) => {
  return (
    <div className="w-full p-[1.5rem] flex justify-between items-center rounded-3xl border-1 border-[#16A34A]">
      <div className="flex gap-5">
        <div className="flex justify-center items-center">
          <PiAirplaneTiltFill color="16A34A" size={50} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[20px]">
            {step.origen_name} → {step.destino_name}
          </h3>
          <p className="text-[#656565]">{step.tipo_transporte}</p>
          <div className="flex gap-1 items-center">
            <FaBuilding color="#656565" />
            <p className="#656565">Empresa: {step.empresa}</p>
          </div>
        </div>
      </div>

      <div>
        <p
          className={`${
            criteria == "precio" ? "text-[#16A34A]" : "text-[#656565]"
          } text-[32px] font-semibold`}
        >
          S/ {step.precio_soles}
        </p>
        <p
          className={`${
            criteria == "distancia" ? "text-[#16A34A]" : "text-[#656565]"
          } text-[32px] font-semibold`}
        >
          {step.distancia_km} km
        </p>
        <p
          className={`${
            criteria == "tiempo" ? "text-[#16A34A]" : "text-[#656565]"
          } text-[32px] font-semibold`}
        >
          {step.duracion_min} min
        </p>
      </div>
    </div>
  );
};

export default CardStep;
