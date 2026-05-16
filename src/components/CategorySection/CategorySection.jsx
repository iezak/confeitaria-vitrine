import ProductCard from "../ProductCard/ProductCard";

function CategorySection({ categoria, produtos }) {
  const lista = produtos.filter((item) => item.categoriaId === categoria.id);

  return (
    <div>
      <h2>{categoria.nome}</h2>
      {lista.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
}

export default CategorySection;
