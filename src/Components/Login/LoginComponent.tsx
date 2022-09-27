import React from "react";
import styled from "styled-components";
import DynamicInput from "./Input/DynamicInput";
import DynamicButton from "./Button/DynamicButton"

const Login: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-login">
        <h1>Best Points</h1>
        <DynamicInput />
        <DynamicButton />
      </div>
    </div>
  );
};

export default Login;