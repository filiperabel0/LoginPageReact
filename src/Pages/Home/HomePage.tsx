import React from "react";
import DynamicInput from "../../Components/Input/DynamicInput";
import DynamicButton from "../../Components/Button/DynamicButton"

const Cadastro: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h2>Faça login ou <br/> Cadastre-se já!</h2>
        <div className="div-btns">
        <DynamicButton href="/Login">
          Login {/* children */}
        </DynamicButton>
        <DynamicButton href="/SignUp">
          Cadastrar {/* children */}
        </DynamicButton>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;