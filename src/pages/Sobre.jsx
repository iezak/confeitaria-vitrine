import { Link } from "react-router-dom";

function Sobre() {
  return (
    <main>
      <section>
        <div>
          <p>SOBRE</p>
          <h1>Nossa historia é feita</h1>
          <p>de amor e açucar</p>
          <p>
            A Luxo Doce nasceu do sonho de transformar momentos simples em
            lembranças inesqueciveis. Aqui, cada detalhe é feito com carinho,
            ingredientes selecionados e muito amor.
          </p>
          <p>
            Nosso propósito é levar sabor, beleza e afeto para sua vida, seja em
            uma comemoração especial ou naquele momento que merece ser doce.
          </p>
          <Link to="/catalogo">Conheça nossos produtos</Link>
        </div>
        <div>{/* Vou adicionar a imegem depois */}</div>
      </section>
      <section>
        <p>O QUE NOS MOVE</p>
        <h2>Mais que doces, criamos memórias</h2>
        <div>
          <h3>Feito com amor</h3>
          <p>Cada receita carregada carinho em cada etapa do preparo.</p>
        </div>
        <div>
          <h3>Ingredientes selecionados</h3>
          <p>
            Utilizamos ingredientes de qualidade para garantir sabor e frescor.
          </p>
        </div>
        <div>
          <h3>Beleza que encanta</h3>
          <p>Acabamentos delicados que transforman qualque ocasião</p>
        </div>
        <div>
          <h3>Atendimento próximo</h3>
          <p>
            Acolhimento e atenção do inicio ao fim para você se sentir unico.
          </p>
        </div>
      </section>
      <section>
        <div>
          <p>REGIÃO DE ATENDIMENTO</p>
          <h2>Onde espalhamos doçura</h2>
          <p>
            Atendemos Quatro Barras e região, levando nossos doces e bolos para
            tornar momentos especiais ainda mais inesqueciveis. Para outras
            localidades, consulte disponibilidade pelo WhatsApp.
          </p>
        </div>
        <div>
          <div>
            <p>Quatro Barras</p>
          </div>
          <div>
            <p>Campina grande do sul</p>
          </div>
          <div>
            <p>Colombo</p>
          </div>
          <div>
            <p>Piraguara</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
