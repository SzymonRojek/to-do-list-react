import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 0 20px 0 0;
  color: ${({ theme }) => theme.color.hideMarkButtons};
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color .2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.hover.hideMarkButtons};
  }

  &:active {
    color: ${({ theme }) => theme.active.hideMarkButtons};
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled.hideDoneButton};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;