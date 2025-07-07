import Home from "./pages/home";
import Top from "./pages/top";
import Details from "./pages/details";
import { Navigate, Route, Routes } from "react-router-dom";
import Results from "./pages/top/Results";
function App() {
  return (
    <Routes>
      {/* 1. Home */}
      <Route path="/" element={<Home />} />

      {/* 2. Top */}
      <Route path="/top" element={<Top />} />

      {/* 3. Details */}
      <Route path="/details" element={<Details />} />

      {/* 4. Details */}
      <Route path="/results" element={<Results />} />

      {/* Redirección o 404 */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
