import { categorias } from "../data/categorias";
import { produtos } from "../data/produtos";
import CategorySection from "../components/CategorySection/CategorySection";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useState } from "react";

function Catalogo() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <div>
      {categorias.map((categoria) => (
        <div key={categoria.id}>
          <CategorySection
            categoria={categoria}
            produtos={produtos}
            onSelecionado={setProdutoSelecionado}
          />
          {produtoSelecionado &&
            produtoSelecionado.categoriaId === categoria.id && (
              <ProductDetails produto={produtoSelecionado} />
            )}
        </div>
      ))}
    </div>
  );
}

export default Catalogo;
