import React from "react";
import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleFachadeiro.css";
import { useNavigate } from "react-router-dom";


export function FachadeiroDark() {

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
              text="Fachadeiro"
            />
          </div>
        </header>

        <div className="tela-fachadeiro">
          <img
            className="fachadeiro3"
            alt="Alambrado quadra"
            src="src\components\images\Fachadeiro3.svg"
          />

          <img
            className="fachadeiro2"
            alt="Alambrado campo"
            src="src\components\images\Fachadeiro2.svg"
          />

          <img
            className="fachadeiro1"
            alt="Alambrado detalhe"
            src="src\components\images\Fachadeiro1.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Fachadeiro</div>

            <p className="a-tela-fachadeiro-uma">
              Fabricada em  polipropileno, essa tela oferece excelente capacidade de retenção de detritos e até mesmo pessoas, minimizando riscos de acidentes. Leve e de fácil instalação, ela adapta‑se a diferentes tipos de andaimes e estruturas temporárias.
              <br />
              <br />
              <br />
              <br />
              <br /> Proteção de Pedestres e Transeuntes: Instalada na borda de lajes e sacadas, a tela impede que objetos ou pequenas ferramentas caiam sobre pessoas que circulam abaixo, reduzindo o risco de acidentes.
              <br />
              Segurança dos Trabalhadores: Utilizada ao redor de andaimes e plataformas, oferece uma barreira que evita quedas de operários e materiais, contribuindo para um ambiente de trabalho mais seguro.
              <br />
              Contenção de Resíduos de Obra: Retém entulhos, restos de concreto e pequenas partículas, evitando sujeira excessiva nas ruas e imóveis vizinhos, além de facilitar a limpeza e o descarte correto dos resíduos.
              <br />
              Montagem e Desmontagem Rápida: Disponível em rolos leves e de fácil manuseio, pode ser fixada com abraçadeiras ou ganchos metálicos, acelerando o processo de instalação e retirada conforme o andamento da obra.
            </p>
          </div>

          <img
            className="tabela-fachadeiro"
            alt="Tabela alambrado"
            src="src\components\images\tabelaFachadeiro.svg"
          />
        </div>
      </div>
    </div>
  );
};
