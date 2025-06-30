import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
// import { Instagram1 } from "../../icons/Instagram1";
// import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleSoldada.css";
import { useNavigate } from "react-router-dom";

export function SoldadaDark() {

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
                  text="Soldada"
                />
              </div>
            </header>
    
            <div className="tela-soldada">
              <img
                className="diagrama-tela"
                alt="Uso tela soldada"
                src="src\components\images\soldada3.svg"
              />
    
              <img
                className="soldada-tabela"
                alt="Pilhas tela soldada"
                src="src\components\images\soldada2.svg"
              />
    
              <img
                className="soldada-detalhe"
                alt="Soldada"
                src="src\components\images\soldada1.svg"
              />
    
              <div className="overlap-group">
                <div className="text-wrapper-2">Tela Soldada</div>
    
                <p className="a-tela-alambrado-uma">
                  Versátil, resistente e prática, a tela soldada galvanizada é amplamente utilizada em diversos setores, como construção civil, agropecuária, indústria e até mesmo na decoração. Produzida com arame galvanizado de alta qualidade, ela conta com malhas regulares — quadradas ou retangulares — unidas por pontos de solda, oferecendo estabilidade, durabilidade e facilidade na instalação.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> Construção Civil: Utilizada em reforços estruturais, contenção de argamassa, lajes, muros e pisos, a tela soldada garante segurança, controle de fissuras e aumento da vida útil da obra.
                  <br /> Agropecuária: Ideal para cercas, divisórias de currais, viveiros, galinheiros e proteção de lavouras. Resiste à exposição ao tempo e ao contato com animais, sendo uma solução eficiente no campo.
                  <br />
                  Indústria: Aplicada na fabricação de estruturas metálicas, suportes, grades de ventilação, expositores e proteções de máquinas, oferecendo funcionalidade e resistência em ambientes industriais.
                  <br />
                  Durabilidade e Facilidade de Manuseio: Graças à galvanização, a tela é resistente à corrosão, podendo ser usada em ambientes internos e externos. Leve e fácil de cortar, adapta-se a diferentes projetos com rapidez e eficiência.
                </p>
              </div>

            </div>
          </div>
        </div>
  )
}