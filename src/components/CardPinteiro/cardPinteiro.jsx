import { FlipPinteiro } from "../FlipPinteiro";
import { useNavigate } from "react-router-dom";

export const CardPinteiro = () => {
  const PinteiroDark = useNavigate();

  const handleClickPinteiroDark = () => {
    PinteiroDark("/pinteiro-dark");
  };

  return (
    <div className="overlap-wrapper-3">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-12">Tela Pinteiro</div>

        <FlipPinteiro
          className="flip-pinteiro-instance"
          property1="component-2"
        />
        <p className="text-wrapper-5">
          Galinheiros
          <br />
          Cercamento de hortas
          <br />
          Cercamento de granjas
        </p>

        <button className="btn" onClick={handleClickPinteiroDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
