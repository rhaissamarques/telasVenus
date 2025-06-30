import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleConcreto.css";
import { useNavigate } from "react-router-dom";

export function ConcretoDark() {

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
                  text="Concreto"
                />
              </div>
            </header>
    
            <div className="tela-concreto">
              <img
                className="diagrama-tela"
                alt="Uso tela concreto"
                src="src\components\images\concreto3.svg"
              />
    
              <img
                className="concreto-tabela"
                alt="Pilhas tela concreto"
                src="src\components\images\concreto2.svg"
              />
    
              <img
                className="concreto-detalhe"
                alt="Concreto"
                src="src\components\images\concreto1.svg"
              />
    
              <div className="overlap-group">
                <div className="text-wrapper-2">Tela Concreto</div>
    
                <p className="a-tela-alambrado-uma">
                  A tela soldada para concreto é um elemento estrutural fundamental em obras que exigem alta resistência e durabilidade. Produzida com fios de aço CA-60 dispostos em malha quadrada ou retangular e unidos por soldagem, essa tela é amplamente utilizada no reforço de pisos, lajes, fundações e pavimentos, proporcionando estabilidade e controle de fissuração ao concreto armado.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> Reforço de Lajes: Instalada entre as camadas de concreto, a tela distribui as tensões de forma uniforme, prevenindo trincas e deformações em lajes convencionais, nervuradas e pré-moldadas.
                  <br /> Estruturação de Pisos Industriais e Residenciais: Garante maior resistência à compressão e à tração, sendo ideal para pisos com alta carga, como galpões, garagens e áreas de grande circulação.
                  <br />
                  Fundação e Radiers: Utilizada em fundações tipo radier e em sapatas, melhora a resistência estrutural da base da construção, suportando cargas com segurança.
                  <br />
                  Controle de Fissuras: A tela reduz o surgimento de fissuras provocadas por retração do concreto, variações térmicas e esforços mecânicos, aumentando a vida útil da estrutura.
                </p>
              </div>

            </div>
          </div>
        </div>
  )
}