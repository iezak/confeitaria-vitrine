import { Link } from "react-router-dom";

function Sobre() {
  return (
    <main>
      <section>
        <div>
          <p>Nossa História</p>
          <h1>Uma história que começou com amor pela confeitaria</h1>
          <p>
            A Luxo Doce nasceu da paixão por transformar ingredientes simples em
            obras de arte comestíveis. Começamos em uma pequena cozinha, com
            receitas de família e o sonho de levar doçura artesanal para
            momentos especiais.
          </p>
          <p>
            Hoje, cada criação carrega a mesma essência do início: dedicação,
            ingredientes cuidadosamente selecionados e aquele toque de carinho
            que só a confeitaria artesanal pode oferecer.
          </p>
          <p>
            Acreditamos que um bolo bem feito é mais do que sobremesa — é uma
            declaração de amor, uma forma de celebrar a vida e criar memórias
            doces e inesquecíveis.
          </p>
          <Link to="/catalogo">Conheça nossos produtos</Link>
        </div>
        <div>{/* Vou adicionar a imegem depois */}</div>
      </section>
      <section>
        <h2>Nosso Propósito</h2>
        <p>
          Transformar ingredientes em emoções, celebrações em memórias e cada
          mordida em um momento de felicidade
        </p>
        <div>
          <h3>Afeto em cada receita</h3>
          <p>
            Colocamos amor real em cada etapa, como fazemos para nossa família.
          </p>
        </div>
        <div>
          <h3>Excelência artesanal</h3>
          <p>
            Técnica profissional com alma caseira. Qualidade sem abrir mão do
            carinho.
          </p>
        </div>
        <div>
          <h3>Ingredientes nobres</h3>
          <p>
            Selecionamos os melhores ingredientes para um sabor autêntico e
            memorável.
          </p>
        </div>
      </section>
      <section>
        <div>
          <p>Onde Estamos</p>
          <h2>Região de Atendimento</h2>
          <p>
            Atendemos em Quatro barras e região, incluindo Campina grande do
            sul, Colombo, Bairro Alto e Piraquara.
          </p>
          <p>Encomendas com antecedência mínima de 3 dias úteis</p>
        </div>
        <div>{/* Vou adicionar a imegem depois */}</div>
      </section>
    </main>
  );
}

export default Sobre;
