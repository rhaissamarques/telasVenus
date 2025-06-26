import { useNavigate } from "react-router-dom"
import { FlipGradil } from "../FlipGradil/FlipGradil";

export const CardGradil = () => {
  const GradilDark = useNavigate();

  const handleClickGradilDark = () => {
    GradilDark("/gradil-dark");
  }
  return (
    <div className="tela-gradil">
      <div className="overlap-5">
        <div className="card" />
        <div className="text-wrapper-10">Tela Gradil</div>

        <FlipGradil 
          className="component"
          frameClassName="flip-gradil-instance"
        />
        <div className="text-wrapper-7">
          Fechamento Residencial
          <br />
          Fechamento Comercial
          <br />
          Segurança Área Pública
        </div>
        <button className="btn" onClick={handleClickGradilDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
}