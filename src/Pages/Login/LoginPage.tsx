import React from "react";
import DynamicInput from "../../Components/Input/DynamicInput";
import DynamicButton from "../../Components/Button/DynamicButton"


const Login: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Best Points</h1>
        <DynamicInput placeholder="Email" type="email"/>
        <DynamicInput placeholder="Password" type="password"/>
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

export default Login;