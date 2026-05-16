import ProductCarousel from "../ProductCarousel/ProductCarousel";

function CategorySection({ categoria, produtos, onSelecionado }) {
  const lista = produtos.filter((item) => item.categoriaId === categoria.id);

  return (
    <div>
      <h2>{categoria.nome}</h2>
      <ProductCarousel produtos={lista} onSelecionado={onSelecionado} />
    </div>
  );
}

export default CategorySection;
