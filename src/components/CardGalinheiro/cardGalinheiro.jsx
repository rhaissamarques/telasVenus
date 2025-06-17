import { FlipGalinheiro } from "../FlipGalinheiro";
import { useNavigate } from "react-router-dom";

export const CardGalinheiro = () => {
  const GalinheiroDark = useNavigate();

  const handleClickGalinheiroDark = () => {
    GalinheiroDark('/galinheiro-dark')
  }

  return (
    <div className="overlap-wrapper-2">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-4">Tela Galinheiro</div>

        <FlipGalinheiro
          className="flip-galinheiro-instance"
          property1="component-1"
        />
        <div className="galinheiros-viveiros">
          Galinheiros
          <br />
          Viveiros
          <br />
          Proteção animais
        </div>

        <button className="btn" onClick={handleClickGalinheiroDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
