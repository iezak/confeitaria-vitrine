import { Link } from "react-router-dom";

function Contato() {
  return (
    <main>
      <section>
        <p>Fale Conosco</p>
        <h1>Vamos conversar?</h1>
        <p>
          Adoramos receber suas ideias e transformá-las em doces inesquecíveis.
          Entre em contato pelo canal que preferir.
        </p>
        <div>
          {/* Vou adicionar a imegem depois */}
          <h4>WhatsApp</h4>
          <a href="https://wa.me/5541997792875" target="_blank">
            (41) 99779-2875
          </a>
        </div>
        <div>
          {/* Vou adicionar a imegem depois */}
          <h4>Instagram</h4>
          <a href="https://www.instagram.com/luxodocetortas" target="_blank">
            @luxodocetortas
          </a>
        </div>
      </section>
      <section>
        <h2>Como Funciona</h2>
        <p>Solicitar um orçamento é simples e rápido</p>
        <div>
          <h3>01</h3>
          <h4>Escolha seus favoritos</h4>
          <p>
            Navegue pelo nosso catálogo e adicione os produtos à lista de
            orçamento.
          </p>
        </div>
        <div>
          <h3>02</h3>
          <h4>Envie pelo WhatsApp</h4>
          <p>Clique em enviar e sua lista será enviada diretamente para nós.</p>
        </div>
        <div>
          <h3>03</h3>
          <h4>Receba seu orçamento</h4>
          <p>Conversamos sobre detalhes, personalização e valores.</p>
        </div>
        <div>
          <h3>04</h3>
          <h4>Celebre o momento</h4>
          <p>Receba seus doces fresquinhos e feitos com todo carinho.</p>
        </div>
      </section>
      <section>
        <h2>Região de Atendimento</h2>
        <p>
          Quatro barras e região — Campina grande do sul, Colombo, Bairro Alto e
          Piraquara.
        </p>
        <p>Encomendas com antecedência mínima de 3 dias úteis</p>
      </section>
      <section>
        <h2>Pronta para solicitar seu orçamento?</h2>
        <p>
          Monte sua lista de favoritos ou entre em contato diretamente pelo
          WhatsApp.
        </p>
        <Link to="/catalogo">Ver produtos</Link>
        <a href="https://wa.me/5541997792875" target="_blank">
          WhatsApp Direto
        </a>
      </section>
    </main>
  );
}

export default Contato;
