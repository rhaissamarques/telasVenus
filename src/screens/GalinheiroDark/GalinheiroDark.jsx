import React from "react";
import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleGalinheiro.css";
import { useNavigate } from "react-router-dom";


export function GalinheiroDark() {

  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate('/')
  }
  return (
    <div className="detail-tela" data-model-id="218:799">
      <div className="div">
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
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Galinheiro"
            />
          </div>
        </header>

        <div className="tela-galinheiro">
          <img
            className="galinheiro2"
            alt="Galinheiro 2"
            src="src\components\images\galinheiro2.svg"
          />

          <img
            className="galinheiro1"
            alt="Galinheiro 1"
            src="src\components\images\galinheiro1.svg"
          />

          <img
            className="galinheiro-detalhe"
            alt="Alambrado detalhe"
            src="src\components\images\galinheiroDetalhe.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Galinheiro</div>

            <p className="a-tela-galinheiro-uma">
              A tela galinheiro é a escolha perfeita para quem deseja criar um ambiente seguro e confortável para aves. Fabricada com fios de aço galvanizado de alta qualidade, essa tela é projetada para resistir a intempéries, garantindo durabilidade e proteção ao longo do tempo. Com uma malha adequada, a tela galinheiro proporciona uma barreira eficaz contra predadores, mantendo suas aves seguras e saudáveis.
              <br />
              <br />
              <br />
              <br /> Cercas de Proteção: Ideal para proteger galinheiros, a tela evita a entrada de animais predadores, garantindo a segurança das aves e a tranquilidade dos criadores.
              <br /> Ambientes Abertos: Perfeita para cercar áreas externas, como pátios e quintais, permitindo que as aves desfrutem de um espaço ao ar livre, enquanto permanecem protegidas.
              <br />
              Facilidade de Manutenção: A tela galinheiro é fácil de limpar e manter, contribuindo para um ambiente saudável e livre de parasitas.
              <br />
              Versatilidade: Além de ser utilizada em galinheiros, pode ser aplicada em cercas para coelhos, patos e outros pequenos animais, oferecendo segurança e conforto.
              <br />
              Divisórias: Pode ser utilizada como divisória em espaços de criação, permitindo a organização de diferentes espécies ou grupos de aves sem comprometer a segurança.
            </p>
          </div>

          <img
            className="tabela-galinheiro"
            alt="Tabela galinheiro"
            src="src\components\images\tabelaGalinheiro.svg"
          />
        </div>
      </div>
    </div>
  );
};
