import { FlipTapume } from "../FlipTapume";
import { useNavigate } from "react-router-dom";

export const CardTapume = () => {
  const TapumeDark = useNavigate();

  const handleClickTapume = () => {
    TapumeDark('/tapume-dark')
  }
  return (
    <div className="tela-tapume">
      <div className="overlap-5">
        <div className="card" />

        <div className="text-wrapper-10">Tela Tapume</div>

        <FlipTapume
          className="component"
          frameClassName="flip-tapume-instance"
        />
        <p className="prote-o-de-queda-de">
          Cercamento de Obras
          <br />
          Divisórias Temporárias
          <br />
          Proteção e Privacidade
        </p>

        <button className="btn" onClick={handleClickTapume}>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Saiba Mais</div>
          </div>
        </button>
      </div>
    </div>
  );
};
