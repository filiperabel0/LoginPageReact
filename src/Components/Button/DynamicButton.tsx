import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { DynamicButton } from "./stylesButton";

type DynamicButtonProps = {
  children: string;
  href: string;
  widthProps?: string;
  // deixar type dynamic
};

const Button = ({ href, children, widthProps }: DynamicButtonProps) => {
  return (
    <DynamicButton>
      <Link to={href}>
        <button type="submit" className="btnSubmit">
          {children}
        </button>
      </Link>
    </DynamicButton>
  );
};

export default styled(Button)``;
