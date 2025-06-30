import React from "react";
import { Button } from "../../components/Button";
import { ButtonDivider4 } from "../../components/ButtonDivider4";
import { Instagram1 } from "../../icons/Instagram1";
import { Whatsapplogo1 } from "../../icons/Whatsapplogo1";
import "./styleViveiro.css";
import { useNavigate } from "react-router-dom";


export function ViveiroDark() {

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
              text="Viveiro"
            />
          </div>
        </header>

        <div className="tela-viveiro">
          <img
            className="viveiro2"
            alt="Viveiro 2"
            src="src\components\images\viveiro2.svg"
          />

          <img
            className="viveiro1"
            alt="Viveiro 1"
            src="src\components\images\viveiro1.svg"
          />

          <img
            className="viveiro-detalhe"
            alt="viveiro detalhe"
            src="src\components\images\diagramaViveiro.svg"
          />

          <div className="overlap-group">
            <div className="text-wrapper-2">Tela Viveiro</div>

            <p className="a-tela-viveiro-uma">
              A tela viveiro é ideal para a criação de aves ornamentais, animais de pequeno porte e espaços que exigem uma estrutura delicada, segura e durável. Produzida com arames galvanizados ou revestidos, essa tela possui malhas pequenas e acabamento uniforme, garantindo conforto, proteção e boa ventilação para os animais, além de excelente visibilidade para os criadores.
              <br />
              <br />
              <br />
              <ul>
                <li>Ambientes Seguros para Aves Ornamentais: Projetada especialmente para pássaros e aves mais delicadas, a tela viveiro protege contra predadores sem causar ferimentos aos animais.</li>
                <li>Criação de Pequenos Animais: Além de aves, pode ser usada para coelhos, hamsters e outros animais de pequeno porte, garantindo segurança e conforto no dia a dia.</li>
                <li>Resistência e Durabilidade: Com tratamento contra corrosão, a tela resiste bem à umidade e ao tempo, sendo ideal para ambientes internos e externos.</li>
                <li>Ventilação e Visibilidade: A malha permite boa circulação de ar e excelente visibilidade, o que favorece o bem-estar dos animais e facilita a observação por parte do criador.</li>
                <li>Facilidade de Instalação e Manutenção: Leve e maleável, a tela viveiro é fácil de aplicar em estruturas de madeira ou metal, e sua limpeza é prática, contribuindo para a saúde do ambiente.</li>
              </ul>
            </p>
          </div>

          <img
            className="tabela-viveiro"
            alt="Tabela viveiro tabela"
            src="src\components\images\tabelaViveiro.svg"
          />
        </div>
      </div>
    </div>
  );
};
