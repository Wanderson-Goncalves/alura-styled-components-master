import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const BtnCabecalho = styled.a`
  border: 2px solid white;
  border-radius: 3px;
  font-weight: 600;
  margin: 0 10px;
  padding: 5px 20px;
  text-align: center;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
`;


const StyleHeader = styled.nav`
  align-items: center;
  background-color: ${corPrimaria};
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0 15vw;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyleHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyleHeader>
  );
};

export default Cabecalho;
