import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import "./styleOndulada.css";
import { useNavigate } from "react-router-dom";

export const OnduladaDark = () => {

    const navigate = useNavigate();

  const handleClickHomeDark = () => {
    navigate('/telasVenus')
  }
  return (
    <div className="detail-tela-ondulada" data-model-id="251:309">
      <div className="div">
        <header className="header">
          <img
            className="logotipo-branco"
            alt="Logotipo branco"
            src="https://c.animaapp.com/IA7IW1dA/img/logotipo-branco-1.svg"
          />

          <img
            className="mode"
            alt="Mode"
            src="https://c.animaapp.com/IA7IW1dA/img/mode@2x.png"
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
              text="Ondulada"
            />
          </div>
        </header>

        <div className="tela-ondulada">
          <img
            className="telas-quadriculadas"
            alt="Telas quadriculadas"
            src="https://c.animaapp.com/IA7IW1dA/img/telas-quadriculadas-onduladas-1@2x.png"
          />

          <img
            className="tela-ondulada-portao"
            alt="Tela ondulada portao"
            src="https://c.animaapp.com/IA7IW1dA/img/telaonduladaportao@2x.png"
          />

          <img
            className="image"
            alt="Image"
            src="https://c.animaapp.com/IA7IW1dA/img/image@2x.png"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Ondulada</div>

            <p className="a-tela-ondulada-s-o">
              A tela ondulada são uma opção popular para diversas aplicações
              devido à sua durabilidade e versatilidade. São feitas de aço
              inoxidável e apresentam uma superfície ondulada em forma de
              quadrados ou retângulos. Ela tem maior resistência à corrosão e ao
              desgaste, melhor estabilidade e rigidez.
              <br />
              <br />
              <br />
              <br />
              <br /> Construção civil: São usadas como elementos decorativos em
              fachadas, paredes, divisórias e coberturas.
              <br /> Paisagismo: São empregadas em projetos de paisagismo para
              criar elementos decorativos e funcionais.
              <br />
              Indústrias: São usadas em ambientes industriais para proteger
              equipamentos e máquinas.
              <br />
              Móveis e decoração: São usadas na fabricação de móveis e objetos
              decorativos, como mesas, cadeiras e luminárias.
              <br />
              Divisórias: Pode ser usada como divisória em ambientes internos ou
              externos, criando espaços definidos sem bloquear a visão.
            </p>
          </div>

          <img
            className="img"
            alt="Image"
            src="https://c.animaapp.com/IA7IW1dA/img/image-1.png"
          />
        </div>
      </div>
    </div>
  );
};
