import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>Luxo doce</p>

      <div>
        <h3>Navegação</h3>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>

      <div>
        <h3>Contatos</h3>
        <a href="https://wa.me/5541997792875" target="_blank">
          WhatsApp
        </a>
        <a href="https://www.instagram.com/luxodocetortas" target="_blank">
          Instagram
        </a>
      </div>

      <p>© 2026 Luxo Doce</p>
      <p>Desenvolvido por Vinicius Medeiros Iezak</p>
    </footer>
  );
}

export default Footer;
