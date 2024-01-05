import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import axios from "axios";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

const SeriesScreen = ({ baseImgURL }) => {
  const [busca, setBusca] = useState("");
  const [series, setSeries] = useState([]);
  const [geral, setGeral] = useState([]);

  const optionsSeries = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/popular",
    params: { language: "pt-br", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjdkYWRlZjYwNDg1YjYwZDE5MGMwODY2NWEyZjkzMiIsInN1YiI6IjY0NmI5ZWVkNTRhMDk4MDE3MjhhZDAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WonpzC5IXSBfTOoWVRoKGWkX3gb05rIpKqxUkw1BFlA",
    },
  };

  const optionsAllSeries = {
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
        `https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`,
        optionsAllSeries
      )
      .then((resposta) => {
        setGeral(resposta.data.results);
        console.log(resposta.data.results);
      })
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    axios
      .request(optionsSeries)
      .then((response) => setSeries(response.data.results))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const limpaInput = () => {
    setBusca("")
  }

  return (
    <>
      <Cabecalho
        busca={busca}
        buscador={(evento) => buscador(busca, evento)}
        setBusca={setBusca}
      />
      <Banner imagens={series} />
      <Modal baseImgURL={baseImgURL} itens={geral} limpaInput={limpaInput} tituloPesquisa={busca} />
      <div className="container">
        <div className="container__titulo">
          <h3 className="titulo">Popular Series</h3>
        </div>
        {series.map((serie) => (
          <Card
            imgSRC={`${baseImgURL + serie.poster_path}`}
            nome={serie.name}
            nota={serie.vote_average}
            serieLancamento={serie.first_air_date}
            key={serie.id}
          />
        ))}
      </div>
    </>
  );
};

export default SeriesScreen;
