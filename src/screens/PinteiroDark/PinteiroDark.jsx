import React from "react";
import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./stylePinteiro.css";
import { useNavigate } from "react-router-dom";


export function PinteiroDark() {

  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate('/')
  }
  return (
    <div className="detail-tela" data-model-id="218:799">
      <div className="div">
        <header className="header">
          <Whatsapplogo1 className="whatsapp-logo" />
          <Instagram1 className="instagram-1" />
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
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Pinteiro"
            />
          </div>
        </header>

        <div className="tela-pinteiro">
          <img
            className="diagrama-tela"
            alt="Alambrado quadra"
            src="src\components\images\pinteiro2.svg"
          />

          <img
            className="pinteiro-tabela"
            alt="Alambrado campo"
            src="src\components\images\pinteiro1.svg"
          />

          <img
            className="pinteiro-detalhe"
            alt="Pinteiro Diagrama"
            src="src\components\images\diagramaTelaPinteiro.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Pinteiro</div>

            <p className="a-tela-alambrado-uma">
              A tela pinteiro é especialmente desenvolvida para a criação de aves, oferecendo segurança, ventilação e visibilidade ideais para galinheiros, viveiros e criadouros. Produzida com arame galvanizado, ela é resistente à corrosão e ao desgaste do tempo, garantindo uma longa vida útil mesmo em ambientes externos. Sua malha uniforme evita fugas e protege as aves contra predadores, mantendo o equilíbrio entre proteção e bem-estar animal.
              <br />
              <br />
              <br /> Cercas de Segurança: Perfeita para proteger propriedades residenciais, comerciais e rurais, evitando a entrada de intrusos e garantindo a tranquilidade dos moradores.
              <br /> Jardinagem: Utilizada para cercar jardins, hortas e canteiros, a tela pinteiro protege suas plantas de animais indesejados, além de oferecer suporte para trepadeiras e outras plantas.
              <br />
              Áreas Recreativas: Comum em parques, áreas de lazer e quadras esportivas, a tela pinteiro ajuda a manter a segurança de crianças e usuários, delimitando espaços de forma eficiente.
              <br />
              Cercas para Animais: Ideal para criar áreas seguras para animais de estimação, como cães e gatos, ou para cercar pequenos animais em propriedades rurais, garantindo que eles permaneçam em um espaço seguro.
            </p>
          </div>

          <img
            className="tabela-alambrado"
            alt="Tabela alambrado"
            src="src\components\images\tabelaPinteiro.svg"
          />
        </div>
      </div>
    </div>
  );
};
