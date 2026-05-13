import { Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}

export default App;
