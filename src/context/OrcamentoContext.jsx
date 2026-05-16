import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const OrcamentoContext = createContext();

export function OrcamentoProvider({ children }) {
  const [lista, setLista] = useState([]);

  function adicionar(item) {
    setLista([...lista, item]);
  }

  function remover(id) {
    setLista(lista.filter((f) => f.id !== id));
  }

  return (
    <OrcamentoContext.Provider value={{ lista, adicionar, remover }}>
      {children}
    </OrcamentoContext.Provider>
  );
}
