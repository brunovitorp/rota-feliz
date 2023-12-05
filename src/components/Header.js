import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/"> HOME</Link>
        <Link to="/Contatos">CONTATO</Link>
        <Link to="/Suporte">SUPORTE</Link>
      </nav>
    </header>
  );
}

export default Header;
