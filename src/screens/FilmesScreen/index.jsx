import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Carrossel from "../../components/Carrossel";
import axios from "axios";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const FilmesScreen = ({ baseImgURL }) => {
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [geral, setGeral] = useState([]);

  const optionsBuscaFilmes = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjdkYWRlZjYwNDg1YjYwZDE5MGMwODY2NWEyZjkzMiIsInN1YiI6IjY0NmI5ZWVkNTRhMDk4MDE3MjhhZDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WonpzC5IXSBfTOoWVRoKGWkX3gb05rIpKqxUkw1BFlA",
    },
  };

  const buscador = (name, evento) => {
    evento.preventDefault();
    if (name == "") {
      alert("Insira o nome do filme que deseja assistir!!");
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
        optionsBuscaFilmes
      )
      .then((resposta) => setGeral(resposta.data.results))
      .catch((erro) => console.log(erro));
  };

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "pt-BR", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjdkYWRlZjYwNDg1YjYwZDE5MGMwODY2NWEyZjkzMiIsInN1YiI6IjY0NmI5ZWVkNTRhMDk4MDE3MjhhZDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WonpzC5IXSBfTOoWVRoKGWkX3gb05rIpKqxUkw1BFlA",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setFilmes(response.data.results);
      })
      .then((resposta) => console.log(filmes))
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
      <Banner baseImgUrl={baseImgURL} imagens={filmes} />

      <Modal
        baseImgURL={baseImgURL}
        itens={geral}
        tituloPesquisa={busca}
        limpaInput={limpaInput}
      />
      <div className="container">
        <div className="container">
          <h2 className="titulo">Filmes</h2>
        </div>
        {filmes.map((filme) => (
          <Card
            imgSRC={`${baseImgURL + filme.poster_path}`}
            nome={filme.nome}
            titulo={filme.title}
            lancamento={filme.release_date}
            nota={filme.vote_average}
            key={filme.id}
          />
        ))}
      </div>
    </>
  );
};

export default FilmesScreen;
