import { useContext } from "react";
import { OrcamentoContext } from "../context/OrcamentoContext";
import { Link } from "react-router-dom";

function Orcamento() {
  const { lista, remover } = useContext(OrcamentoContext);

  return (
    <div>
      <h1>Lista de Orçamento</h1>
      <div>
        {lista.length === 0 ? (
          <div>
            <p>Nenhum produto adicionado.</p>
            <Link to="/catalogo">Ver Produtos</Link>
          </div>
        ) : (
          <div>
            {lista.map((produto) => (
              <div key={produto.id}>
                <p>{produto.nome}</p>
                <button onClick={() => remover(produto.id)}>Remover</button>
              </div>
            ))}
            <button>Enviar pelo WhatsApp</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orcamento;
