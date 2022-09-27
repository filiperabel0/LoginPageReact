import React from "react";

import {DynamicButton} from "./stylesButton";

const Button: React.FC = () => {
  return (
    <DynamicButton>
      <div className="div-btns">
        <button type="submit" className="btnSubmit">
          Login
        </button>
        <button type="submit" className="btnSubmit">
          Cadastrar
        </button>
      </div>
    </DynamicButton>
  );
};

export default Button;
