import { FlipAlambrado } from "../FlipAlambrado";
import { useNavigate } from "react-router-dom";


export const CardAlambrado = () => {
  const AlambradoDark = useNavigate();

  const handleClickAlambradoDark = () => {
    AlambradoDark('/alambrado-dark')
  }

  return (
    <div className="overlap-wrapper-5">
      <div className="overlap-5">
        <div className="card" />

        <FlipAlambrado className="flip-alambrado-instance" />
        <button className="btn" onClick={handleClickAlambradoDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>

        <div className="text-wrapper-13">Tela Alambrado</div>

        <div className="cercamento">
          Cercamento
          <br />
          Fechamentos
          <br />
          Proteção
        </div>
      </div>
    </div>
  );
};
