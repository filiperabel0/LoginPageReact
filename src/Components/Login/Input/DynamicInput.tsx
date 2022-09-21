import React, { Component } from "react";

import {DynamicInput} from "./stylesInput";

const Content: React.FC = () => {
  return (
    <DynamicInput>
      <input type="text" className="input-user" placeholder="User" />
      <input
        type="password"
        className="input-password"
        placeholder="Password"
      />
    </DynamicInput>
  );
};

export default Content;
