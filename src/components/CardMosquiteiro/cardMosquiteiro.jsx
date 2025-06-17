import { FlipMosquiteiro } from "../FlipMosquiteiro";
import { useNavigate } from "react-router-dom";

export const CardMosquiteiro = () => {
  const MosquiteiroDark = useNavigate();
  
  const handleClickMosquiteiro = () => {
    MosquiteiroDark('/mosquiteiro-dark')
  }
  return (
    <div className="overlap-wrapper">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper">Tela Mosquiteiro</div>

        <FlipMosquiteiro
          className="flip-mosquiteiro-instance"
          property1="component-1"
        />
        <p className="p">
          Proteção contra mosquitos
          <br />
          Permitir ventilação
          <br />
          Permitir iluminação
        </p>

        <button className="btn" onClick={handleClickMosquiteiro}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
