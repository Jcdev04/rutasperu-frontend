export default function Form() {
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
          <label>
            VIAJA DESDE:
            <input type="text" placeholder="Ingrese una ciudad" />
          </label>
          <label>
            HASTA:
            <input type="text" placeholder="Ingrese su destino" />
          </label>
          <label>
            Seleccionar Prioridad:
            <select>
              <option value="vuelo">Vuelo</option>
              <option value="bus">Bus</option>
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
