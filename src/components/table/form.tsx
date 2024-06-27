import Modal from "../modal/modal";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function Form(props:any) {
  const [riassunto, setRiassunto] = useState("test");
  const searchParams = useSearchParams();
  const act = searchParams.get("act");
  const [show, setShow] = useState(true);
  const handleCloseExt = () => {
    setShow(false);
    history.back();
  };

 

  if (props.vuoto) {
    return <></>;
  }
  var children;
  var title;
  if (act == "edit") {
    title = (
      <h3 className="m-3 text-center w-100">{props.ep.TitoloItaliano}</h3>
    );
    children = (<>
      <form action="/form" method="post">
        <div className="container-fluid">
          <div className="row">
            <div className="form-group col-3">
              <small>Sigla</small>
              <input
                name="Sigla"
                className="form-control"
                value={props.ep.Sigla}
              />
            </div>
            <div className="form-group col">
              <small>Serie</small>
              <input
                name="Serie"
                className="form-control"
                value={props.ep.Serie}
              />
            </div>
            <div className="form-group col">
              <small>Stagione-Episodio</small>
              <input
                name="Stagione_Episodio"
                className="form-control"
                value={props.ep.Stagione_Episodio}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <small>Titolo Originale</small>
              <input
                name="TitoloOriginale"
                className="form-control"
                value={props.ep.TitoloOriginale}
              />
            </div>
            <div className="form-group col">
              <small>Titolo Italiano</small>
              <input
                onChange={(e)=> setRiassunto(e.target.value)}
                name="TitoloItaliano"
                className="form-control"
                value={riassunto}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <small>Riassunto</small>
              <textarea value={props.ep.Riassunto} onChange={(e)=>setRiassunto(e.target.value)}  name="Riassunto" className="form-control">
                {}
              </textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between w-75 mx-auto m-1">
            <button
              type="button"
              onClick={handleCloseExt}
              className="btn btn-dark"
            >
              chiudi
            </button>
            <button type="submit" className="btn btn-success">
              salva
            </button>
          </div>
        </div>
      </form></>
    );
  } else {
    title = (
      <h3 className="m-3 text-center w-100">{props.ep.TitoloItaliano}</h3>
    );

    children = (
      <div className="container-fluid">
        <div className="row">
          <div className="form-group col-3">
            <small>Sigla</small>
            <div className="form-control">{props.ep.Sigla}</div>
          </div>
          <div className="form-group col">
            <small>Serie</small>
            <div className="form-control">{props.ep.Serie}</div>
          </div>
          <div className="form-group col">
            <small>Stagione-Episodio</small>
            <div className="form-control">{props.ep.Stagione_Episodio}</div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <small>Titolo Originale</small>
            <div className="form-control">{props.ep.TitoloOriginale}</div>
          </div>
          <div className="form-group col">
            <small>Titolo Italiano</small>
            <div className="form-control">{props.ep.TitoloItaliano}</div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <small>Riassunto</small>
            <div className="form-control">{props.ep.Riassunto}</div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse w-75 mx-auto m-1">
          <button onClick={handleCloseExt} className="btn btn-dark">
            chiudi
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Modal
        children={children}
        title={title}
        // handleCloseExt={handleCloseExt}
      />
    </div>
    // ) > <h1>{props.ep.TitoloItaliano}</h1>
  );
}
