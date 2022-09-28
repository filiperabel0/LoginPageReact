import React from "react";
import DynamicInput from "../../Components/Input/DynamicInput";
import DynamicButton from "../../Components/Button/DynamicButton"

const Cadastro: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Home</h1>
        <DynamicButton href="/Login">
          Login {/* children */}
        </DynamicButton>
        <DynamicButton href="/SignUp">
          Cadastrar {/* children */}
        </DynamicButton>
      </div>
    </div>
  );
};

export default Cadastro;