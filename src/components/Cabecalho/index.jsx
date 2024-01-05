import logo from "../../assets/imagens/logo-principal.png";
import Buscador from "../Buscador";
import { Link } from "react-router-dom";
import React from "react";

const Cabecalho = ({ busca, setBusca, buscador }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-secondary-subtle" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={"/"} relative="path" className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="250"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} relative="path" className="nav-link">
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/filmes"} relative="path" className="nav-link">
                  Filmes
                </Link>
              </li>
              <li className="nav-item">
              <Link to={"/series"} relative="path" className="nav-link">
                  Series
                </Link>
              </li>
            </ul>
            <Buscador busca={busca} buscador={buscador} setBusca={setBusca} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Cabecalho);
