import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import "./styleMosquiteiro.css";
import { useNavigate } from "react-router-dom";


export function MosquiteiroDark() {

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
              text="Mosquiteiro"
            />
          </div>
        </header>

        <div className="tela-mosquiteiro">
          <img
            className="mosquiteiro3"
            alt="Alambrado quadra"
            src="src\components\images\Mosquiteiro3.svg"
          />

          <img
            className="mosquiteiro2"
            alt="Alambrado campo"
            src="src\components\images\Mosquiteiro2.svg"
          />

          <img
            className="mosquiteiro1"
            alt="Alambrado detalhe"
            src="src\components\images\Mosquiteiro1.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Mosquiteiro</div>

            <p className="a-tela-mosquiteiro-uma">
              A tela mosquiteiro é a solução ideal para quem busca proteção contra insetos sem abrir mão da ventilação e da luminosidade. Fabricada com materiais resistentes, como alumínio, PVC ou fibra de vidro, ela impede a entrada de mosquitos, pernilongos e outros insetos, promovendo mais conforto e bem-estar nos ambientes internos. Com instalação simples e discreta, a tela mosquiteiro é perfeita para residências, comércios e espaços rurais.
              <br />
              <br />
              <br />
              <br /> Proteção Contra Insetos: Evita a entrada de mosquitos e outros insetos, reduzindo o risco de doenças como dengue, zika e chikungunya, e garantindo noites mais tranquilas.
              <br /> Ventilação Natural: Permite a circulação de ar fresco nos ambientes, sem comprometer a segurança ou a higiene dos espaços.
              <br />
              Aplicações Diversas: Pode ser instalada em janelas, portas, basculantes, estufas e até em vãos de ventilação, se adaptando a diferentes projetos e necessidades.
              <br />
              Durabilidade e Facilidade de Limpeza: Feita com materiais resistentes à oxidação e ao desgaste, a tela mosquiteiro tem longa vida útil e é fácil de limpar, mantendo a boa aparência com pouco esforço.
              <br />
              Uso Residencial e Comercial: Indicada tanto para casas quanto para escritórios, clínicas, escolas e hotéis, contribuindo para ambientes mais saudáveis e confortáveis.
            </p>
          </div>

          <img
            className="tabela-mosquiteiro"
            alt="Tabela alambrado"
            src="src\components\images\tabelaMosquiteiro.svg"
          />
        </div>
      </div>
    </div>
  );
};
