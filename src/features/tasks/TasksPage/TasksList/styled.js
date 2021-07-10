import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.accent.borderLight};

  ${({ hidden }) => hidden && css`display: none;`}
;`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.links.color};
  transition: color .2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.links.hover}
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
  color: ${({ theme }) => theme.doneButton.color};
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: background-color .3s ease-in;

  ${({ remove }) => remove && css`
    background-color: ${({ theme }) => theme.removeButton.backgroundColor};

    &:hover {
      background-color: ${({ theme }) => theme.removeButton.hover};
    }
  `}
  
  ${({ toggleDone }) => toggleDone && css`
    background-color: ${({ theme }) => theme.doneButton.backgroundColor};
    
    &:hover {
    background-color: ${({ theme }) => theme.doneButton.hover};
  `}

  &:active {
    outline: 1px solid ${({ theme }) => theme.accent.outline};
  }
`;

export const Content = styled.span`
  word-break: break-word;

  ${({ done }) => done && css`text-decoration: line-through;`}
`;