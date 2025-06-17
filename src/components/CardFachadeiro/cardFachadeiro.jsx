import { FlipFachadeiro } from "../FlipFachadeiro";
import { useNavigate } from "react-router-dom";

export const CardFachadeiro = () => {
  const FachadeiroDark = useNavigate();

  const handleClickFachadeiro = () => {
    FachadeiroDark('/fachadeiro-dark')
  }
  return (
    <div className="tela-fachadeiro">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-10">Tela Fachadeiro</div>

        <FlipFachadeiro
          className="component"
          frameClassName="flip-fachadeiro-instance"
        />
        <p className="prote-o-de-queda-de">
          Proteção de queda de resíduos
          <br />
          Proteção de trabalhadores
          <br />
          Proteção de pedestres
        </p>

        <button className="btn" onClick={handleClickFachadeiro}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
