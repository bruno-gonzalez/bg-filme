import React from "react";

const Buscador = ({ busca, setBusca, buscador }) => {
  return (
    <form className="d-flex" role="search" onSubmit={buscador}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="O que você quer assistir?"
        aria-label="Search"
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <button
        className="btn btn-outline-light"
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default React.memo(Buscador);
