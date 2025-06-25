import { useNavigate } from "react-router-dom"
import { FlipSoldada } from "../FlipSoldada/FlipSoldada";

export const CardSoldada = () => {
  const SoldadaDark = useNavigate();

  const handleClickSoldadaDark = () => {
    SoldadaDark("/soldada-dark")
  }
  return (
    <div className="tela-soldada">
      <div className="overlap-5">
        <div className="card" />
        <div className="text-wrapper-10">Tela Soldada</div>
        <FlipSoldada 
          className="component"
          frameClassName="flip-soldada-instance"
        />
        <div className="text-wrapper-7">
          Gaiola para Concreto
          <br />
          Muros de Contenção
          <br />
          Reforço em Lajes
        </div>
        <button className="btn" onClick={handleClickSoldadaDark}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  )
}