import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
// import { Instagram1 } from "../../icons/Instagram1";
// import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleEstuque.css";
import { useNavigate } from "react-router-dom";


export function EstuqueDark() {

  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate('/')
  }

  const handleClickTelasDark = () => {
    navigate('/telas-dark')
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
              onClick={handleClickTelasDark}
            />
            <ButtonDivider4 className="button-divider" color="#BCBCBC" />
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Estuque"
            />
          </div>
        </header>

        <div className="tela-estuque">
          <img
            className="estuque3"
            alt="Tela Estuque 3"
            src="src\components\images\estuque3.svg"
          />

          <img
            className="estuque2"
            alt="Tela Estuque 2"
            src="src\components\images\estuque2.svg"
          />

          <img
            className="estuque1"
            alt="Tela Estuque"
            src="src\components\images\estuque1.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Estuque</div>

            <p className="a-tela-estuque-uma">
              A tela Estuque, também conhecida como tela Deployer, é uma excelente opção para aplicações que exigem resistência, aderência e praticidade. Produzida a partir de chapas de aço cortadas e repuxadas, ela forma uma malha losangular contínua, sem emendas, o que garante alta durabilidade e aderência a argamassas e rebocos. É amplamente utilizada na construção civil e em projetos de revestimento, oferecendo uma base firme e segura para acabamentos.
              <br />
              <br />
              <br />
              <br />
              <br /> Rebocos e revestimentos: Aplicada como suporte em paredes, tetos e fachadas para garantir melhor aderência da argamassa e prevenir trincas ou desplacamentos.
              <br />
              Isolamento térmico e acústico: Utilizada na fixação de mantas isolantes, a tela estuque ajuda na criação de sistemas com maior conforto térmico e sonoro em ambientes internos.
              <br />
              Reforço em estruturas metálicas: Funciona como base para revestimentos sobre estruturas metálicas, promovendo uma união eficaz entre o aço e o acabamento final.
              <br />
              Proteção de equipamentos e aberturas: Pode ser usada como barreira de proteção em equipamentos, aberturas de ventilação ou áreas que exigem segurança com ventilação.
            </p>
          </div>

          <img
            className="tabela-estuque"
            alt="Tabela estuque"
            src="src\components\images\tabelaEstuque.svg"
          />
        </div>
      </div>
    </div>
  );
};
