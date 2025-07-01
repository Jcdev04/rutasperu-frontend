import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p className="text-red-200">Hola</p>
    </>
  );
}

export default App;
