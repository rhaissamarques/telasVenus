import { FlipEstuque } from "../FlipEstuque";
import { useNavigate } from "react-router-dom";

export const CardEstuque = () => {
  const EstuqueDark = useNavigate();
  
  const handleClickEstuque = () => {
    EstuqueDark('/estuque-dark')
  }
  return (
    <div className="tela-estuque">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-11">Tela Estuque</div>

        <FlipEstuque className="flip-estuque-instance" />
        <p className="refor-ar-argamassa">
          Reforçar argamassa
          <br />
          Sustentação lã de vidro
          <br />
          Aderência de concreto
        </p>

        <button className="btn" onClick={handleClickEstuque}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
