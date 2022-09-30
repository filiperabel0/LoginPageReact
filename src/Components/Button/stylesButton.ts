import styled from "styled-components";

export const DynamicButton = styled.div`
  width: auto;
  display: flex;
  justify-content: center;

  & button {
    border-radius: 5px;
    border-color: transparent;

    margin-top: 15px;

    width: 135px;

    padding: 10px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    color: #646cff;
    cursor: pointer;
    transition: all 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
