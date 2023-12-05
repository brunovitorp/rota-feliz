import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

function Contatos() {
  return (
    <>
    <Header/>
    <p>Página de Contato</p>
    <Link to="/Suporte">SUPORTE</Link>
    </>
  )
}

export default Contatos