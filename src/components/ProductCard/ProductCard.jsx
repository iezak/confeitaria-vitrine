function ProductCard({ nome, descricao, imagem, selecionado }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <img src={imagem} alt={nome} />
      {selecionado && <p>selecionado</p>}
    </div>
  );
}

export default ProductCard;
