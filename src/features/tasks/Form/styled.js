import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.accent.borderLight};
  outline: none;
  border-radius: 3px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.accent.borderDark};
  }
`;

export const Button = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.addButton.color};
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.addButton.backgroundColor};
  cursor: pointer;
  transition: transform .3s, background-color .3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.addButton.hover};

    @media (min-width: ${({ theme }) => theme.breakpoint.iPad}px) {
      transform: scale(1.1);
    }
  }

  &:active {
    outline: 1px solid ${({ theme }) => theme.accent.outline};
    background-color: ${({ theme }) => theme.addButton.active};
  }
`;