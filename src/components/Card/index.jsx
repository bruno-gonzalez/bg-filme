import React from "react";
import "./Card.css";


const Card = ({ imgSRC, titulo, nome, nota, lancamento, serieLancamento}) => {
  const dataFilmeLancamento = new Date(lancamento);
  const dataSerieLancamento = new Date(serieLancamento);

  if(nota === null || nota === undefined){
    nota = 0
  }

  if(imgSRC === "null" || imgSRC === "undefined"){
    imgSRC = "404"
  }

  return (
    <div className="card__container">
      <div className="imagem__container">
        <img src={imgSRC} alt={titulo} className="imagem" />
      </div>
      <div className="texto">
        <h1>{titulo || nome}</h1>
      </div>
      <div className="infos__container">
        <span className="infos"><i className="bi bi-balloon-heart-fill text-danger"></i><p>{nota.toFixed(1)}</p></span>
        <span className="infos"><i className="bi bi-calendar-event"></i><p>{dataFilmeLancamento.getFullYear() | dataSerieLancamento.getFullYear()}</p></span>
      </div>
    </div>
  );
};
export default React.memo(Card);
