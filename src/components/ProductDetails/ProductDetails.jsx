import { useContext } from "react";
import { OrcamentoContext } from "../../context/OrcamentoContext";

function ProductDetails({ produto }) {
  const temSabores = produto.sabores && produto.sabores.length > 0;
  const temTamanhos = produto.tamanhos && produto.tamanhos.length > 0;

  const { adicionar } = useContext(OrcamentoContext);

  return (
    <div>
      <div>
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        {temSabores && (
          <div>
            <h4>Sabores:</h4>

            {produto.sabores.map((sabor) => (
              <p key={sabor}>{sabor}</p>
            ))}
          </div>
        )}
        {temTamanhos && (
          <div>
            <h4>Tamanhos:</h4>

            {produto.tamanhos.map((tamanho) => (
              <p key={tamanho}>{tamanho}</p>
            ))}
          </div>
        )}
        <button onClick={() => adicionar(produto)}>
          Adicionar ao orçamento
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
