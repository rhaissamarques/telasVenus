import { useNavigate } from "react-router-dom";
import { CardAlambrado } from "../../components/CardAlambrado/cardAlambrado";
import { CardEstuque } from "../../components/CardEstuque/cardEstuque";
import { CardFachadeiro } from "../../components/CardFachadeiro/cardFachadeiro";
import { CardGalinheiro } from "../../components/CardGalinheiro/cardGalinheiro";
import { CardMosquiteiro } from "../../components/CardMosquiteiro/cardMosquiteiro";
import { CardOndulada } from "../../components/CardOndulada/cardOndulada";
import { CardPinteiro } from "../../components/CardPinteiro/cardPinteiro";
import { CardViveiro } from "../../components/CardViveiro/cardViveiro";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleTelas.css";
import { Button } from "../../components/Button"
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { CardTapume } from "../../components/CardTapume/cardTapume";
import { CardPeneira } from "../../components/CardPeneira/cardPeneira";
import { CardConcreto } from "../../components/CardConcreto/cardConcreto";
import { CardSoldada } from "../../components/CardSoldada/cardSoldada";
import { CardMineracao } from "../../components/CardMineracao/cardMineracao";
import { CardAlvenaria } from "../../components/CardAlvenaria/cardAlvenaria";
import { CardGradil } from "../../components/CardGradil/cardGradil";

export const TelasDark = () => {
  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate("/");
  };
  return (
    <div className="telas-dark" data-model-id="101:6082">
      <div className="div-2">
        <header className="header">
          {/* <Whatsapplogo1 className="whatsapp-logo" />
          <Instagram1 className="instagram-1" /> */}

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

          <div className="breadcrumbs">
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Home"
              onClick={handleClickHomeDark}
            />
            <ButtonDivider4 className="button-divider" color="#BCBCBC" />
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Telas"
            />
            <ButtonDivider4 className="button-divider" color="#BCBCBC" />

          </div>
        </header>

        <div className="overlap">
          <div className="content">
            <div className="type-telas">
              <div className="text-wrapper-14">Telas</div>
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
              <CardTapume />
              <CardPeneira />
              <CardConcreto />
              <CardSoldada />
              <CardMineracao />
              <CardAlvenaria />
              <CardGradil />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
