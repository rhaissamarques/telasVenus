import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import "./stylePeneira.css";
import { useNavigate } from "react-router-dom";

export function PeneiraDark() {

  const navigate = useNavigate();
  
  const handleClickHomeDark = () => {
    navigate('/telasVenus')
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
                  text="Peneira"
                />
              </div>
            </header>
    
            <div className="tela-peneira">
              <img
                className="diagrama-tela"
                alt="Uso tela peneira"
                src="src\components\images\peneira3.svg"
              />
    
              <img
                className="peneira-tabela"
                alt="Rolo tela peneira"
                src="src\components\images\peneira2.svg"
              />
    
              <img
                className="pinteiro-detalhe"
                alt="Pinteiro Diagrama"
                src="src\components\images\peneira1.svg"
              />
    
              <div className="overlap-group">
                <div className="text-wrapper-2">Tela Peneira</div>
    
                <p className="a-tela-alambrado-uma">
                  A tela peneira é uma ferramenta indispensável para processos de filtragem, classificação e separação de materiais em diversos setores, como construção civil, agricultura, mineração e indústria. Fabricada com fios metálicos entrelaçados ou chapas perfuradas, ela apresenta malhas de diferentes tamanhos para atender a cada tipo de aplicação com precisão e eficiência.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> Peneiramento de Areia e Pedriscos: Muito utilizada em obras, a tela peneira separa impurezas da areia e ajuda na classificação de pedriscos, garantindo um material mais puro e adequado para uso na construção.
                  <br /> Classificação de Grãos e Sementes: Na agricultura, é empregada para selecionar sementes e grãos conforme o tamanho, aumentando a eficiência do plantio e a qualidade da produção.
                  <br />
                  Filtragem de Resíduos em Processos Industriais: Auxilia na separação de partículas sólidas em processos industriais, contribuindo para a pureza do produto final e a manutenção dos equipamentos.
                  <br />
                  Produção de Argamassa e Concreto: Garante a homogeneidade dos materiais ao filtrar componentes indesejados, como pedras maiores ou resíduos orgânicos, melhorando a qualidade da mistura.
                </p>
              </div>

            </div>
          </div>
        </div>
  )
}