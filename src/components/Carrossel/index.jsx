// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Card from "../Card";

import "./Carrossel.css";

const Carrossel = ({ itens, baseImgURL, tituloDoItem }) => {
  return (
    <>
      <h2 className="titulo">{tituloDoItem}</h2>
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {itens.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              imgSRC={`${baseImgURL + item.poster_path}`}
              key={item.id}
              titulo={item.original_title}
              nome={item.name}
              lancamento={item.release_date}
              serieLancamento={item.first_air_date}
              nota={item.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrossel;
