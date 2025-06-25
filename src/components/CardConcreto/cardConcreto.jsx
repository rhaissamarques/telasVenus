import { FlipConcreto } from "../FlipConcreto"
import { useNavigate } from "react-router-dom"

export const CardConcreto = () => {
  const ConcretoDark = useNavigate();

  const handleClickConcretoDark = () => {
    ConcretoDark("/concreto-dark");
  };
  return (
    <div className="tela-concreto">
      <div className="overlap-5">
        <div className="card" />
        <div className="text-wrapper-10">Tela Concreto</div>

        <FlipConcreto 
          className="component"
          frameClassName="flip-concreto-instance"
        />
        <div className="text-wrapper-7">
          Reforço de lajes
          <br />
          Reforço de pisos
          <br />
          Estrutura Pré Moldada
        </div>
        <button className="btn" onClick={handleClickConcretoDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  )
};
