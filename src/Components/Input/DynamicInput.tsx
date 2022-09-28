import React from "react";
import { DynamicInput } from "./stylesInput";

type DynamicInputProps = {
  placeholder?: string;
  type?: string;
};

const Content = ({ placeholder, type }: DynamicInputProps) => {
  return (
    <DynamicInput>
      <div className="div-input">
        <input
          className="input-password"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </DynamicInput>
  );
};

export default Content;
