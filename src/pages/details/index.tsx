import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import CardStep from "../../components/CardStep";

const Details = () => {
  const location = useLocation();
  const { desde, hasta, criteria, result } = location.state || {};

  const formattingResult = (value: string) => {
    if (criteria === "tiempo") {
      return `${value} minutos`;
    } else if (criteria === "precio") {
      return `S/. ${value}`;
    } else if (criteria === "distancia") {
      return `${value} km`;
    }
  };
  return (
    <section className="bg-[#f9fafb] pb-10 min-h-full">
      <Header color={"black"} />
      <div className="mt-5 max-w-[90%] m-auto flex flex-col gap-[3rem]">
        <div>
          <h1 className="font-bold text-[32px]">Mejor resultado</h1>
          <p className="text-[#656565]">
            {desde.label} → {hasta.label}
          </p>
        </div>

        <div className="flex flex-col gap-[3rem]">
          <div className="w-full p-[2rem] flex justify-between items-center rounded-3xl bg-white drop-shadow-md">
            <div>
              <h3 className="font-bold text-[20px]">Resumen del Viaje</h3>
              <p className="text-[#656565]">Total</p>
            </div>

            <div>
              <p className="text-[#16A34A] text-[32px] font-semibold">
                {formattingResult(result.total)}
              </p>
            </div>
          </div>
          {result.steps.map((step: any) => (
            <CardStep key={step.distancia_km} step={step} criteria={criteria} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
