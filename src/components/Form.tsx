import { useState } from "react";
import Selects from "./Select";
import { useNavigate } from "react-router-dom";
type CiudadOption = {
  value: number;
  label: string;
};

export default function Form() {
  const [criteria, setCriteria] = useState("tiempo");
  const [loading, setLoading] = useState(false);
  const [selectedDesde, setSelectedDesde] = useState<CiudadOption | null>(null);
  const [selectedHasta, setSelectedHasta] = useState<CiudadOption | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDesde || !selectedHasta) {
      alert("Por favor, selecciona una ciudad de origen y destino.");
      return;
    }
    if (selectedDesde.value === selectedHasta.value) {
      alert("La ciudad de origen y destino no pueden ser la misma.");
      return;
    }
    fetchingResults();
  };

  const fetchingResults = async () => {
    setLoading(true);
    const url = `https://django-production-6562.up.railway.app/api/routes/optima/?origen=${selectedDesde?.value}&destino=${selectedHasta?.value}&criterio=${criteria}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        // 3) cuando tengas los datos, navega a /resultados
        console.log("Datos obtenidos:", data);
        navigate("/results", {
          state: {
            desde: selectedDesde,
            hasta: selectedHasta,
            criteria,
            result: data,
          },
        });
      })
      .catch((err) => {
        console.error("Error al obtener ruta óptima:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[550px] bg-white p-10 flex flex-col gap-10 rounded-xl"
      >
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
          <Selects
            selectedDesde={selectedDesde}
            setSelectedDesde={setSelectedDesde}
            selectedHasta={selectedHasta}
            setSelectedHasta={setSelectedHasta}
          />
          <label>
            Seleccionar Prioridad:
            <select
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
            >
              <option value="tiempo">Tiempo óptimo</option>
              <option value="precio">Precio más económico</option>
              <option value="distancia">Distancia más corta</option>
            </select>
          </label>
        </div>
        <button
          disabled={loading}
          className={`cursor-pointer text-xl bg-[#16A34A] p-[.6rem] rounded-[.7rem] text-white ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          BUSCAR
        </button>
      </form>
    </div>
  );
}
