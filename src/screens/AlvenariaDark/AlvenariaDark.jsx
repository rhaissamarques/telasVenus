import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleAlvenaria.css";
import { useNavigate } from "react-router-dom";

export function AlvenariaDark() {

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
                  onClick={handleClickTelasDark}
                />
                <ButtonDivider4 className="button-divider" color="#BCBCBC" />
                <Button
                  className="button-instance"
                  divClassName="design-component-instance-node"
                  text="Alvenaria"
                />
              </div>
            </header>
    
            <div className="tela-alvenaria">
              <img
                className="diagrama-tela"
                alt="Uso tela alvenaria"
                src="src\components\images\alvenaria3.svg"
              />
    
              <img
                className="concreto-tabela"
                alt="Pilhas tela alvenaria"
                src="src\components\images\alvenaria2.svg"
              />
    
              <img
                className="alvenaria-detalhe"
                alt="Alvenaria"
                src="src\components\images\alvenaria1.svg"
              />
    
              <div className="overlap-group">
                <div className="text-wrapper-2">Tela Alvenaria</div>
    
                <p className="a-tela-alambrado-uma">
                  A tela de alvenaria, é um reforço essencial na construção civil, especialmente em estruturas de alvenaria. Fabricada com fios de aço galvanizado de bitola fina, ela é aplicada entre as fiadas de tijolos, contribuindo para a distribuição uniforme de tensões e aumentando a resistência da parede contra fissuras e movimentações estruturais.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> Reforço Estrutural em Alvenaria: Aplicada horizontalmente entre as fiadas de blocos ou tijolos, ajuda a evitar trincas e acomodações, promovendo maior estabilidade e durabilidade nas paredes.
                  <br /> Prevenção de Fissuras: Ideal para áreas com alta incidência de movimentações ou variações térmicas, a tela atua como reforço, prevenindo rachaduras causadas por retração do concreto ou dilatações.
                  <br />
                  Facilidade de Aplicação: Leve e flexível, pode ser cortada e moldada facilmente, acompanhando curvas e ângulos sem perder resistência, agilizando o trabalho na obra.
                  <br />
                  Compatível com Diversos Materiais: Pode ser usada tanto com blocos de concreto quanto com tijolos cerâmicos, adaptando-se a diferentes tipos de construção com eficiência.
                </p>
              </div>

            </div>
          </div>
        </div>
  )
}