import { useNavigate } from "react-router-dom"
import { FlipAlvenaria } from "../FlipAlvenaria/FlipAlvenaria";

export const CardAlvenaria = () => {
  const AlvenariaDark = useNavigate();

  const handleClickAlvenariaDark = () => {
    AlvenariaDark("/alvenaria-dark");
  }
  return (
    <div className="tela-alvenaria">
      <div className="overlap-5">
        <div className="card" />
        <div className="text-wrapper-10">Tela Alvenaria</div>

        <FlipAlvenaria 
          className="component"
          frameClassName="flip-alvenaria-instance"
        />
        <div className="text-wrapper-7">
          Reforço entre fiadas
          <br />
          Amarração de Paredes
          <br />
          Prevenção de Fissuras
        </div>
        <button className="btn" onClick={handleClickAlvenariaDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
}