import Form from "./components/Form";

export default function App() {
  return (
    <>
      <main className="bg-hero w-full h-full flex justify-evenly gap-35 p-10">
        <Form />
        <div className="flex justify-center items-center text-center">
          <p className="text-white text-[64px] leading-25">
            Busca rutas para
            <span className="block text-[5vw] font-bold">
              DESCUBRIR EL PERÚ
            </span>
            de forma accesible
          </p>
        </div>
      </main>
    </>
  );
}
