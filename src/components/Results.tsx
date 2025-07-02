import Header from "./Header";

export default function Results() {
  return (
    <section className="w-full h-full flex flex-col bg-section">
      <Header />
      <div className="flex-1 bg-amber-400 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[64px] font-bold">TOP 3 rutas</h1>
          <p className="text-[32px]">Mas baratas</p>
          <p className="text-[32px]">Origen → Destino</p>
        </div>
      </div>

      <div className="flex-1/3 bg-amber-900">
        <div className="grid grid-cols-3 h-full">
            <div className="py-15 flex justify-center items-end bg-red-400">
                <div className="flex w-full max-w-md bg-green-400">
                    <div className="flex-1">
                        IMAGEN
                    </div>
                    <div className="flex-1 justify-center text-center">
                        <h1 className="">S/. X</h1>
                        <p>Segunda opcion</p>
                    </div>
                </div>
            </div>
            <div className="py-15 flex justify-center items-end bg-red-500">GANADOR</div>
            <div className="py-15 flex justify-center items-end bg-red-600">TERCERO</div>
        </div>
      </div>
    </section>
  );
}
