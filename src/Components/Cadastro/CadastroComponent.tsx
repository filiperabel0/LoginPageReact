import React from "react";
import styled from "styled-components";

const Cadastro: React.FC = () => {
  return (
    <div className="{className}">
      <div className="card-cadastro">
        <h1>Best Points</h1>
        <input type="text" className="input-user" placeholder="User" />
        <input type="text" className="input-email" placeholder="Email"/>
        <input
          type="password"
          className="input-password"
          placeholder="Password"
        />
        <input type="password"
        className="input-password"
        placeholder="Confirm Password"/>
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

export default Cadastro;