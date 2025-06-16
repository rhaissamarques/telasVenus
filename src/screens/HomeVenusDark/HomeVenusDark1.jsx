import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import { Instagram1 } from "../../icons/Instagram1";
import "./styleHome.css";
import { FlipFachadeiro } from "../../components/FlipFachadeiro";

export const HomeVenusDark = () => {
  return (
    <div className="home-venus-dark">
      <div className="div-2">
        <header className="header">
          <Whatsapplogo1 className="whatsapp-logo" />
          <Instagram1 className="instagram-1" />
          <img
            className="logotipo-branco"
            src="src\components\images\logoBranco.svg"
            alt="Logotipo branco"
          />
          <img
            className="mode"
            src="src\components\images\sun.svg"
            alt="Mode clear sun"
          />
        </header>

        <div className="overlap">
          <div className="content">
            <div className="grid-arames">
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper"></div>
                </div>
              </div>
            </div>

            <div className="grid-telas">
              <div className="tela-fachadeiro">
                <div className="overlap-5">
                  <div className="card">
                    <div className="text-wrapper-10">Tela Fachadeiro</div>
                    <FlipFachadeiro
                      className="component"
                      frameClassName="flip-fachadeiro-instance"
                    />
                    <p className="prote-o-de-queda-de">
                      Proteção de queda de resíduos
                      <br />
                      Proteção de trabalhadores
                      <br />
                      Proteção de pedestres
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="top-section">
              <div className="alambrado">
                <img
                  src="src\components\images\superiorImageRight.svg"
                  alt="tela alambrado"
                />
              </div>
              <div className="ondulada">
                <img
                  src="src\components\images\superiorImageLeft.svg"
                  alt="tela ondulada"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
