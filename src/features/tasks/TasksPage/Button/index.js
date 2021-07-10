import styled from "styled-components";

export const Button = styled.button`
  margin: 0 20px 0 0;
  color: ${({ theme }) => theme.hideAndFinishButtons.color};
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.hideAndFinishButtons.hover};
  }

  &:active {
    color: ${({ theme }) => theme.hideAndFinishButtons.active};
  }

  &:disabled {
    color: ${({ theme }) => theme.hideAndFinishButtons.disabled};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;