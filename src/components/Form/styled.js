import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 3px;

  &:focus {
    border: 1px solid hsl(0, 1%, 17%);
  }
`;

export const Button = styled.button`
  padding: 10px;
  color: #fff;
  border: 1px solid transparent;
  background-color: hsl(180, 100%, 25%);
  cursor: pointer;
  transition: transform .3s, background-color .3s ease-in;

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }

  @media (min-width: 767px) {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    outline: 1px solid hsl(0, 2%, 20%);
    background-color: hsl(180, 100%, 35%);
  }
`;