import { Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Orcamento from "./pages/Orcamento";
import { OrcamentoProvider } from "./context/OrcamentoContext";

function App() {
  return (
    <OrcamentoProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/orcamento" element={<Orcamento />} />
        </Route>
      </Routes>
    </OrcamentoProvider>
  );
}

export default App;
