import Card from "../Card";

const Modal = ({ itens, baseImgURL, tituloPesquisa, limpaInput }) => {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Resultado de obras com o nome: <span className="titulo__pesquisa">{tituloPesquisa}</span>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(() => limpaInput())}
              ></button>
            </div>
            <div className="modal-body p-0 d-flex flex-wrap justify-content-center">
              {itens.map((item) => (
                <Card
                  imgSRC={`${baseImgURL + item.poster_path}`}
                  key={item.id}
                  titulo={item.original_title}
                  nome={item.name}
                  lancamento={item.release_date}
                  serieLancamento={item.first_air_date}
                  nota={item.vote_average}
                />
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
                onClick={(() => limpaInput())}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
