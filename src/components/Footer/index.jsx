import logo from "../../assets/imagens/logo-principal.png";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container__footer">
        <img src={logo} alt="Logo" />
        <span>
          <a
            href="https://developer.themoviedb.org/docs/getting-started"
            target="_blank"
            rel="noreferrer"
          >
            API reference
          </a>
        </span>
        <span>
          Desenvolvido por {""} 
          <a
            href="https:/github.com/bruno-gonzalez"
            target="_blank"
            rel="noreferrer"
          >
            Bruno Torres
          </a>
        </span>
      </footer>
    </>
  );
};

export default React.memo(Footer);
