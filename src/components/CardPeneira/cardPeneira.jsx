import { FlipPeneira } from "../FlipPeneira";
import { useNavigate } from "react-router-dom";

export const CardPeneira = () => {
  const PeneiraDark = useNavigate();

  const handleClickPeneiraDark = () => {
    PeneiraDark("/peneira-dark");
  };
  return (
    <div className="tela-peneira">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-10">Tela Peneira</div>

        <FlipPeneira 
          className="component"
          frameClassName="flip-peneira-instance"
        />
        <div className="text-wrapper-7">
          Filtragem de Materiais
          <br />
          Cernimento de Alimentos
          <br />
          Ventilação de equipamentos
        </div>

        <button className="btn" onClick={handleClickPeneiraDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
