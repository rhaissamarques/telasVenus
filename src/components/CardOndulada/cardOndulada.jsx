import { FlipOndulada } from "../FlipOndulada";
import { useNavigate } from "react-router-dom";


export const CardOndulada = () => {

  const OnduladaDark = useNavigate();

  const handleClickOnduladaDark = () => {
    OnduladaDark('/ondulada-dark')
  }
  return (
    <div className="overlap-wrapper-4">
      <div className="overlap-5">
        <div className="card" />

        <FlipOndulada className="flip-ondulada-instance" />
        <div className="text-wrapper-6">Tela Ondulada</div>

        <div className="text-wrapper-7">
          Proteção de equipamentos
          <br />
          Fachadas
          <br />
          Fechamentos
        </div>

        <button className="btn" onClick={handleClickOnduladaDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
