import logo from "../../assets/imagens/logo-principal.png";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container__footer">
        <img src={logo} alt="Logo" />
        <span>
          <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank">API reference</a>
        </span>
        <div>
          <span>
            Desenvolvido por <a href="https://github.com/bruno-gonzalez" target="_blank"> Bruno Torres</a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
