import React from "react";
import { Link } from "react-router-dom";

import { DynamicButton } from "./stylesButton";

type DynamicButtonProps = {
  children: string;
  href: string;
  // deixar type dynamic
};

const Button = ({ href, children }: DynamicButtonProps) => {
  return (
    <DynamicButton>
      <div className="div-btns">
        <Link to={href}>
          <button type="submit" className="btnSubmit">
            {children}
          </button>
        </Link>
      </div>
    </DynamicButton>
  );
};

export default Button;
