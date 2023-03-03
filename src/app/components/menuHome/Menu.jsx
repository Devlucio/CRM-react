import React from "react";
import { Link } from "react-router-dom";
import logocrm from "../../../Images/logocrm.png";
import "./Menu.css";
import "../components.css";

export default function Menu() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link to="/app/home" className="navbar-brand" href="/">
          <img src={logocrm} alt="Logo" height="28" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/app/home" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/app/novocliente"
                className="nav-link"
                aria-current="page"
              >
                Adicionar Cliente
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item btn-menu ">
              <Link to="/" className="btn btn-outline-light btn-lg btn-menu">
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
