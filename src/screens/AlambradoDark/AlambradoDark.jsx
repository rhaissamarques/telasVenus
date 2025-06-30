import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleAlambrado.css";
import { useNavigate } from "react-router-dom";


export function AlambradoDark() {

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
              text="Alambrado"
            />
          </div>
        </header>

        <div className="tela-alambrado">
          <img
            className="alambrado-quadra"
            alt="Alambrado quadra"
            src="https://c.animaapp.com/qn44tgT7/img/alambradoquadra@2x.png"
          />

          <img
            className="alambrado-campo"
            alt="Alambrado campo"
            src="https://c.animaapp.com/qn44tgT7/img/alambradocampo@2x.png"
          />

          <img
            className="alambrado-detalhe"
            alt="Alambrado detalhe"
            src="https://c.animaapp.com/qn44tgT7/img/alambradodetalhe@2x.png"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Alambrado</div>

            <p className="a-tela-alambrado-uma">
              A tela alambrado é uma solução versátil e eficiente para cercar e
              proteger áreas diversas, oferecendo segurança e visibilidade.
              Fabricada com fios de aço de alta qualidade, essa tela é projetada
              para resistir a condições climáticas adversas, garantindo
              durabilidade e resistência ao longo do tempo. Com uma malha
              entrelaçada, a tela alambrado proporciona uma barreira eficaz, sem
              comprometer a visibilidade do espaço cercado.
              <br />
              <br />
              <br />
              <br />
              <br /> Cercas de Segurança: Ideal para proteger propriedades
              residenciais, comerciais e industriais, evitando a entrada de
              intrusos.
              <br /> Jardinagem: Utilizada para cercar jardins, hortas e
              canteiros, protegendo plantas de animais e proporcionando suporte
              para trepadeiras.
              <br />
              Áreas Recreativas: Comum em parques, playgrounds e quadras
              esportivas, garantindo a segurança de crianças e usuários.
              <br />
              Cercas para Animais: Perfeita para delimitar áreas para animais de
              estimação, como cães e gatos, ou para cercar pequenos animais em
              propriedades rurais.
              <br />
              Divisórias: Pode ser usada como divisória em ambientes internos ou
              externos, criando espaços definidos sem bloquear a visão.
            </p>
          </div>

          <img
            className="tabela-alambrado"
            alt="Tabela alambrado"
            src="https://c.animaapp.com/qn44tgT7/img/tabelaalambrado.png"
          />
        </div>
      </div>
    </div>
  );
};
