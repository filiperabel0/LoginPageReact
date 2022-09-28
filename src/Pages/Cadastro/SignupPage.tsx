import React from "react";
import DynamicInput from "../../Components/Input/DynamicInput";
import DynamicButton from "../../Components/Button/DynamicButton"

const Cadastro: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Cadastro</h1>
        <DynamicInput placeholder="Nome" type="text"/>
        <DynamicInput placeholder="Usuário" type="text"/>
        <DynamicInput placeholder="Email" type="email"/>
        <DynamicInput placeholder="Senha" type="password"/>
        <DynamicButton />
      </div>
    </div>
  );
};

export default Cadastro;