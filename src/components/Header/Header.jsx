import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* Vou adicionar a imegem depois */}
      <p>Luxo Doce</p>

      <div>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
      <div>
        <a href="https://wa.me/5541997792875" target="_blank">
          {/* Vou adicionar a imegem depois */}
          WhatsApp
        </a>
        <a href="https://www.instagram.com/luxodocetortas" target="_blank">
          {/* Vou adicionar a imegem depois */}
          Instagram
        </a>
      </div>
    </header>
  );
}

export default Header;
