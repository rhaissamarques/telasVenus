import { FlipViveiro } from "../FlipViveiro";
import { useNavigate } from "react-router-dom";

export const CardViveiro = () => {
  const ViveiroDark = useNavigate();
  
  const handleClickViveiro = () => {
    ViveiroDark('/viveiro-dark')
  }
  return (
    <div className="overlap-group-wrapper">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-12">Tela Viveiro</div>

        <FlipViveiro className="flip-viveiro-instance" />
        <p className="cria-o-de-aves-prote">
          Criação de aves
          <br />
          Proteção predadores
          <br />
          Cercar jardins
        </p>

        <button className="btn" onClick={handleClickViveiro}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
