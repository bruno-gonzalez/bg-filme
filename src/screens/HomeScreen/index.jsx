import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.css";
// import Cabecalho from "../../components/Cabecalho";
// import Banner from "../../components/Banner";
// import Modal from "../../components/Modal";
import Loading from "../../components/Loading";

const Cabecalho = React.lazy(() => import("../../components/Cabecalho"));
const Banner = React.lazy(() => import("../../components/Banner"));
const Card = React.lazy(() => import("../../components/Card"));
const Modal = React.lazy(() => import("../../components/Modal"));


const HomeScreen = ({ baseImgURL }) => {
  const [trendingFilmes, setTrendingFilmes] = useState([]);
  const [geral, setGeral] = useState([]);
  const [busca, setBusca] = useState("");

  const optionsGeral = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjdkYWRlZjYwNDg1YjYwZDE5MGMwODY2NWEyZjkzMiIsInN1YiI6IjY0NmI5ZWVkNTRhMDk4MDE3MjhhZDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WonpzC5IXSBfTOoWVRoKGWkX3gb05rIpKqxUkw1BFlA",
    },
  };

  const buscador = (name, evento) => {
    evento.preventDefault();
    if (name === "") {
      alert("Insira o nome do filme que deseja assistir!!");
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`,
        optionsGeral
      )
      .then((resposta) => {
        setGeral(resposta.data.results);
        console.log(resposta.data.results);
      })
      .catch((erro) => console.log(erro));
  };

  const optionsTrending = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day",
    params: { language: "pt-BR" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjdkYWRlZjYwNDg1YjYwZDE5MGMwODY2NWEyZjkzMiIsInN1YiI6IjY0NmI5ZWVkNTRhMDk4MDE3MjhhZDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WonpzC5IXSBfTOoWVRoKGWkX3gb05rIpKqxUkw1BFlA",
    },
  };

  useEffect(() => {
    axios
      .request(optionsTrending)
      .then(function (response) {
        setTrendingFilmes(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const limpaInput = () => {
    setBusca("");
  };

  return (
    <>
      <Cabecalho
        busca={busca}
        buscador={(evento) => buscador(busca, evento)}
        setBusca={setBusca}
      />
      <Banner imagens={trendingFilmes} />

      <Modal
        baseImgURL={baseImgURL}
        itens={geral}
        tituloPesquisa={busca}
        limpaInput={limpaInput}
      />
      <div className="container">
        <div className="container__titulo">
          <h3 className="titulo">Trending</h3>
        </div>

        {trendingFilmes.map((filme) => (
          <React.Suspense fallback={<Loading />}>
            <Card
              imgSRC={`${baseImgURL + filme.poster_path}`}
              nome={filme.name}
              titulo={filme.title}
              lancamento={filme.release_date}
              nota={filme.vote_average}
              key={filme.id}
            />
          </React.Suspense>
        ))}
      </div>
    </>
  );
};

export default React.memo(HomeScreen);
