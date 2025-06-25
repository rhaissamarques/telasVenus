import { FlipMineracao } from "../FlipMineracao/FlipMineracao"
import { useNavigate } from "react-router-dom"

export const CardMineracao = () => {
  const MineracaoDark = useNavigate();

  const handleClickMineracaoDark = () => {
    MineracaoDark("/mineracao-dark");
  };
  return (
    <div className="tela-mineracao">
      <div className="overlap-5">
        <div className="card" />
        <div className="text-wrapper-10">Tela Mineração</div>
        <FlipMineracao 
          className="component"
          frameClassName="flip-mineracao-instance"
        />
        <div className="text-wrapper-7">
          Classificação de Minério
          <br />
          Filtragem de Materiais
          <br />
          Proteção de Equipamentos
        </div>
        
        <button className="btn" onClick={handleClickMineracaoDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  )
}
