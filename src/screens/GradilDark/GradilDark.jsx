import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import "./styleGradil.css";
import { useNavigate } from "react-router-dom";

export function GradilDark() {
  const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate("/");
  };

  const handleClickTelasDark = () => {
    navigate("/telas-dark");
  };

  return (
    <div className="detail-tela" data-model-id="218:799">
      <div className="div">
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
              text="Gradil"
            />
          </div>
        </header>

        <div className="tela-gradil">
          <img
            className="diagrama-tela"
            alt="Uso tela gradil"
            src="src\components\images\gradil3.svg"
          />

          <img
            className="gradil-tabela"
            alt="Rolo tela gradil"
            src="src\components\images\gradil2.svg"
          />

          <img
            className="gradil-detalhe"
            alt="Gradil"
            src="src\components\images\gradil1.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Gradil</div>

            <p className="a-tela-alambrado-uma">
              A tela soldada tipo gradil é uma solução moderna, robusta e elegante para cercamentos que exigem segurança e visual limpo. Fabricada com arames de aço galvanizado soldados entre si, e muitas vezes com pintura eletrostática (como na versão Fortinet da Belgo), ela oferece alta resistência à corrosão, durabilidade e ótimo acabamento. Seu design confere rigidez estrutural e excelente integração com ambientes urbanos e industriais.
              <br />
              <br />
              <br />
              <br />
              <br /> Cercamentos de Condomínios e Residenciais: Ideal para delimitar áreas de forma segura e discreta, a tela gradil garante proteção sem comprometer a estética do ambiente.
              <br /> Segurança em Áreas Industriais e Comerciais: Utilizada em fábricas, centros logísticos, pátios e estacionamentos, protege o perímetro com resistência e durabilidade, inclusive contra tentativas de invasão.
              <br />
              Instalações Públicas e Esportivas: Frequentemente aplicada em escolas, praças, parques e quadras esportivas, proporcionando segurança e controle de acesso com visual limpo e moderno.
              <br />
              Fácil Instalação e Modularidade: Os painéis são fáceis de instalar e permitem integração com portões, sistemas de vigilância e projetos personalizados de cercamento.
            </p>
          </div>
          <img
            className="tabela-gradil"
            alt="Tabela alambrado"
            src="src\components\images\gradil4.svg"
          />
        </div>
      </div>
    </div>
  );
}
