<<<<<<< HEAD
import "./App.css";
import Home from "./pages/home";
import Top from "./pages/top";
import Details from "./pages/details";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      {/* 1. Home */}
      <Route path="/" element={<Home />} />

      {/* 2. Top */}
      <Route path="/top" element={<Top />} />

      {/* 3. Details */}
      <Route path="/details" element={<Details />} />

      {/* Redirección o 404 */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
=======
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
>>>>>>> 49253f2b743c92dc72f4c7d7f7ad0b117a10f240
  );
}
