import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductCarousel({ produtos }) {
  const [selecionado, setSelecionado] = useState(produtos[0]?.id);

  return (
    <div>
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          descricao={produto.descricao}
          imagem={produto.imagem}
          selecionado={produto.id === selecionado}
          onClick={() => setSelecionado(produto.id)}
        />
      ))}
    </div>
  );
}

export default ProductCarousel;
