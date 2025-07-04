import { useNavigate } from "react-router-dom";
import { CardAlambrado } from "../../components/CardAlambrado/cardAlambrado";
import { CardEstuque } from "../../components/CardEstuque/cardEstuque";
import { CardFachadeiro } from "../../components/CardFachadeiro/cardFachadeiro";
import { CardGalinheiro } from "../../components/CardGalinheiro/cardGalinheiro";
import { CardMosquiteiro } from "../../components/CardMosquiteiro/cardMosquiteiro";
import { CardOndulada } from "../../components/CardOndulada/cardOndulada";
import { CardPinteiro } from "../../components/CardPinteiro/cardPinteiro";
import { CardViveiro } from "../../components/CardViveiro/cardViveiro";
import "./styleHome.css";
import { Button } from "../../components/Button";

export const HomeVenusDark = () => {
  const TelasDark = useNavigate();

  const handleClickTelas = () => {
    TelasDark("/telas-dark");
  };

  return (
    <div className="home-venus-dark" data-model-id="101:6082">
      <div className="div-2">
        <div className="overlap">
          <div className="content">
            <div className="grid-arames">
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper">Arame BWG 18</div>

                  <img
                    className="bwg"
                    alt="Bwg"
                    src="https://c.animaapp.com/VEoDEv2v/img/bwg18@2x.png"
                  />

                  <p className="p">
                    Amarração e fixação
                    <br />
                    Artesanato e modelagem
                    <br />
                    Cercas de malha fina
                  </p>

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="text-wrapper-3">Arame BWG 16</div>

                  <div className="overlap-3">
                    <img
                      className="tela-viveiro"
                      alt="Tela viveiro"
                      src="https://c.animaapp.com/VEoDEv2v/img/telaviveiro-2@2x.png"
                    />

                    <img
                      className="element-arame-galvanizado"
                      alt="Element arame galvanizado"
                      src="https://c.animaapp.com/VEoDEv2v/img/03-arame-galvanizado-bwg-12-2-77mm-21-metros-vonder-1@2x.png"
                    />
                  </div>

                  <p className="fabrica-o-de-gaiolas">
                    Fabricação de gaiolas
                    <br />
                    Estrutura de suporte leve
                    <br />
                    Fabricação de filtros
                  </p>

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="overlap-wrapper-2">
                <div className="overlap-2">
                  <div className="text-wrapper-4">Arame BWG 14</div>

                  <img
                    className="bwg-2"
                    alt="Bwg"
                    src="https://c.animaapp.com/VEoDEv2v/img/bwg14@2x.png"
                  />

                  <p className="armadura-de-concreto">
                    Armadura de concreto
                    <br />
                    Jardinagem
                    <br />
                    Fabricação de móveis
                  </p>

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="overlap-wrapper-3">
                <div className="overlap-2">
                  <div className="text-wrapper-3">Arame BWG 12</div>

                  <p className="text-wrapper-5">
                    Amarração de tela
                    <br />
                    Armaduras e grades
                    <br />
                    Jardinagem
                  </p>

                  <img
                    className="bwg-3"
                    alt="Bwg"
                    src="https://c.animaapp.com/VEoDEv2v/img/bwg12@2x.png"
                  />

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="overlap-wrapper-4">
                <div className="overlap-2">
                  <div className="text-wrapper-6">Arame BWG 10</div>

                  <img
                    className="bwg-3"
                    alt="Bwg"
                    src="https://c.animaapp.com/VEoDEv2v/img/bwg10@2x.png"
                  />

                  <p className="text-wrapper-7">
                    Tirante de forro
                    <br />
                    Armadura de concreto
                    <br />
                    Parreiras
                  </p>

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="overlap-wrapper-5">
                <div className="overlap-2">
                  <div className="text-wrapper-8">Arame BWG 8</div>

                  <div className="agricultura-ind">
                    Agricultura
                    <br />
                    Indústria
                    <br />
                    Construção civil
                  </div>

                  <img
                    className="bwg-4"
                    alt="Bwg"
                    src="https://c.animaapp.com/VEoDEv2v/img/bwg8@2x.png"
                  />

                  <button className="btn">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2">Saiba Mais</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="type-arames">
              <div className="overlap-4">
                <div className="text-wrapper-9">Arames</div>

                <img
                  className="plus"
                  alt="Plus"
                  src="https://c.animaapp.com/VEoDEv2v/img/plus.svg"
                />
              </div>
            </div>

            <div className="grid-telas">
              <CardAlambrado />
              <CardOndulada />
              <CardPinteiro />
              <CardGalinheiro />
              <CardViveiro />
              <CardMosquiteiro />
              <CardEstuque />
              <CardFachadeiro />
            </div>

            {/* <div className="type-telas">
              <div className="text-wrapper-14">Telas</div>
            </div> */}

            <div className="type-telas">
              <Button
                className="text-wrapper-14"
                divClassName="design-component-instance-node"
                text="Telas"
                onClick={handleClickTelas}
              />
            </div>

            <div className="top-section">
              <div className="alambrado" />
              <img
                src="src\components\images\superiorImageLeft.svg"
                alt="tela alambrado"
              />

              <div className="ondulada" />
              <img
                src="src\components\images\superiorImageRight.svg"
                alt="tela ondulada"
              />
            </div>
          </div>

          <img
            className="vector"
            alt="Vector"
            src="src\components\images\plusSign.svg"
            onClick={handleClickTelas}
          />
        </div>

        <header className="header">

          <img
            className="logotipo-branco"
            alt="Logotipo branco"
            src="https://c.animaapp.com/qn44tgT7/img/logotipo-branco-1.svg"
          />

          <img
            className="mode"
            alt="Mode"
            src="https://c.animaapp.com/qn44tgT7/img/mode@2x.png"
          />
        </header>
      </div>
    </div>
  );
};
