import "./Banner.css";
import { Carousel } from "antd";
import React from "react";

const Banner = ({ imagens }) => {
  return (
    <Carousel autoplay>
      {imagens.map((imagem) => (
        <div className="container__banner" key={imagem.id}>  
          <div className="banner">
             <img
              className="img__banner"
              src={`${"https://image.tmdb.org/t/p/original/" + imagem.backdrop_path}`}
              alt={imagem.title}
            /> 
             <img className="img__card" src={`${"https://image.tmdb.org/t/p/original/" + imagem.poster_path}`} alt={imagem.title} /> 
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default React.memo(Banner);
