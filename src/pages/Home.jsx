import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section>
        <div>
          <p>DOCES FEITOS COM ♥ E DEDICAÇÃO</p>
          <h1>Momentos especiais</h1>
          <p>merecem doçura.</p>
          <p>
            Confeitaria artesanal com ingredientes selecionados e muito carinho
            em cada detalhe
          </p>
          <Link to="/catalogo">Ver produtos</Link>
          <a href="https://wa.me/5541997792875" target="_blank">
            Fazer orçamento
          </a>
        </div>
        <div>{/* Vou adicionar a imegem depois */}</div>
      </section>
      <section>
        <div>
          <span>{/* Vou adicionar a imegem depois */}</span>
          <h3>Feito com carinho</h3>
          <p>Cada receita preparada de forma artesanal.</p>
        </div>
        <div>
          <span>{/* Vou adicionar a imegem depois */}</span>
          <h3>Ingredientes selecionados</h3>
          <p>Qualidade que você sente no sabor.</p>
        </div>
        <div>
          <span>{/* Vou adicionar a imegem depois */}</span>
          <h3>Personalizado</h3>
          <p>Do seu jeito, para o seu momento.</p>
        </div>
        <div>
          <span>{/* Vou adicionar a imegem depois */}</span>
          <h3>Encantamento</h3>
          <p>Do primeiro olhar a ultima colherada.</p>
        </div>
      </section>
      <section>
        <p>NOSSOS DESTAQUES</p>
        <h2>Escolha o seu favorito</h2>
        <p>Doces e bolos para todos os momentos</p>
        {/* Produtos em destaque serão exibidos aqui — issue #41 */}
      </section>
    </main>
  );
}

export default Home;
