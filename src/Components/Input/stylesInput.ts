import styled from "styled-components";

export const DynamicInput = styled.div`
  width: 100%;

  .div-input {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  & input {
    font-family: "Poppins", sans-serif;
    padding: 10px;
    border-color: transparent;
    border-radius: 5px;

    width: auto;

    margin-top: 15px;

    transition: all 0.25s;

    background-color: #1a1a1a;
    color: #646cff;

    &:hover {
      border-color: #646cff;
    }

    &:focus,
    &:focus-visible {
      outline: none;
      /* outline: 4px auto -webkit-focus-ring-color;
    outline-color: #646cff; */
    }
  }
`;
