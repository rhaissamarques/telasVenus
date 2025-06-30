import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleTapume.css";
import { useNavigate } from "react-router-dom";


export function TapumeDark() {

  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate('/')
  }

  const hancleClickTelasDark = () => {
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
            src="src\components\images\sun.svg"
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
              onClick={hancleClickTelasDark}
            />
            <ButtonDivider4 className="button-divider" color="#BCBCBC" />
            <Button
              className="button-instance"
              divClassName="design-component-instance-node"
              text="Tapume"
            />
          </div>
        </header>

        <div className="tela-tapume">
          <img
            className="tapume-quadra"
            alt="Tela tapume"
            src="src\components\images\Tapume3.svg"
          />

          <img
            className="tapume-campo"
            alt="Tela tapume 2"
            src="src\components\images\Tapume2.svg"
          />

          <img
            className="tapume-detalhe"
            alt="Tapume detalhe"
            src="src\components\images\Tapume1.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Tapume</div>

            <p className="a-tela-tapume-uma">
              A tela tapume, também conhecida como tela de sinalização, é uma solução prática e eficaz para o isolamento temporário de áreas em obras ou manutenção. Fabricada em polietileno de alta densidade (PEAD) na cor laranja vibrante, ela é leve, resistente e altamente visível, tornando-se indispensável para garantir a segurança em canteiros e vias públicas.
              <br />
              <br />
              <br />
              <br />
              <br /> Sinalização de Obras Viárias: Muito utilizada em rodovias, ruas e calçadas, a tela tapume serve como alerta visual para motoristas e pedestres sobre a presença de obras, prevenindo acidentes e organizando o fluxo no entorno.
              <br /> Delimitação de Áreas de Risco: Ideal para cercar áreas em manutenção, valas abertas, escavações ou locais com risco de queda, impedindo o acesso de pessoas não autorizadas.
              <br />
              Eventos e Espaços Públicos: Pode ser usada de forma temporária para organizar filas, isolar equipamentos ou delimitar áreas específicas durante eventos ao ar livre e feiras.
              <br />
              Fácil Instalação e Reutilização: Por ser leve e flexível, pode ser instalada com estacas ou amarras, e facilmente retirada ou reposicionada conforme a necessidade da obra.
              
            </p>
          </div>

          <img
            className="tabela-tapume"
            alt="Tabela tapume"
            src="src\components\images\Tapume4.svg"
          />
        </div>
      </div>
    </div>
  );
};
