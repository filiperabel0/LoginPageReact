import React from "react";

import { DynamicInput } from "./stylesInput";

const Content: React.FC = () => {
  return (
    <DynamicInput>
      <div className="div-input">
        <input type="text" className="input-user" placeholder="User" />
        <input
          type="password"
          className="input-password"
          placeholder="Password"
        />
      </div>
    </DynamicInput>
  );
};

export default Content;
