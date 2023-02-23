import React from 'react';
import { Link } from 'react-router-dom';
import logocrm from '../../Images/logocrm.png';

export default function Menu() {
  return (
    <section id="menu">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark">

        <div className="container-fluid">
                
            <a className="navbar-brand" href="/#">
              <img className='logo' src={logocrm} alt= "Logo"/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#banner">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#testemunho">Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#preco">Planos e Preços</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#footer">Contato</a>
                </li>                
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item btn-menu ">              
                  <Link to="/app" className="btn btn-outline-light btn-lg btn-menu">Fazer Login</Link>
                </li>
              </ul>
            </div>    
          
        </div>
      </nav>
    </section>
  )
}
