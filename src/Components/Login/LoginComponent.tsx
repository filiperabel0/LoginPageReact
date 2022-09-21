import React from "react";
import styled from "styled-components";
import DynamicInput from "./Input/DynamicInput";

const Login: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Best Points</h1>
        <DynamicInput />
        <div className="div-btns">
          <button type="submit" className="btnSubmit">
            Login
          </button>
          <button type="submit" className="btnSubmit">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
