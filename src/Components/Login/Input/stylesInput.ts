import styled from "styled-components";

export const DynamicInput = styled.div`
  div-input {
    margin-left: "15px";
  }

  input {
    font-family: "Poppins", sans-serif;
    padding: 10px;
    border-color: transparent;
    border-radius: 5px;

    margin-top: 15px;

    transition: all 0.25s;

    background-color: #1a1a1a;
    color: #646cff;
  }
  input:hover {
    border-color: #646cff;
  }
  input:focus,
  input:focus-visible {
    outline: none;
    /* outline: 4px auto -webkit-focus-ring-color;
    outline-color: #646cff; */
  }
`;
