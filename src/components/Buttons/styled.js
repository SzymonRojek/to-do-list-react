import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 0 20px 0 0;
  color: teal;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .2s ease-in;

  &:hover {
    color: hsl(180, 100%, 40%);
  }

  &:active {
    color: hsl(180, 100%, 15%);
  }

  &:disabled {
    background: rgb(255, 255, 255);
    color: rgb(201, 194, 194);
    cursor: not-allowed;
  }

  @media(max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;