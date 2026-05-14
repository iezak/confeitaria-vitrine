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
        <h2>Nossas Categorias</h2>
        <p>
          Descubra nossa seleção artesanal, feita com os melhores ingredientes e
          muito carinho
        </p>
        {/* vou adicionar as div com as categorias depois */}
      </section>
      <section>
        <p>Destaques</p>
        <h2>Escolha o seu favorito</h2>
        <p>Nossos produtos mais amados, preparados com carinho especial</p>
        {/* Produtos em destaque serão exibidos aqui — issue #41 */}
      </section>
      <section>
        <h2>Vamos criar algo especial?</h2>
        <p>
          Entre em contato pelo WhatsApp e conte-nos sobre seu evento. Será um
          prazer adoçar seu momento.
        </p>
        <a href="https://wa.me/5541997792875" target="_blank">
          Falar pelo WhatsApp
        </a>
      </section>
    </main>
  );
}

export default Home;
