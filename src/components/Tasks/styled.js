import styled, { css } from 'styled-components';

export const TaskWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) => hidden && css` display: none;`}
`;

export const TasksButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
  color: #fff;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: background-color .3s ease-in;

  ${({ remove }) => remove && css`
    background-color: hsl(0, 83%, 47%);

    &:hover {
      background-color: hsl(0, 83%, 60%);
    }
  `}
  
  ${({ toggleDone }) => toggleDone && css`
    background-color: #1C8622;
    
    &:hover {
    background-color: #05af05;
  `}

  &:active {
    outline: 1px solid #222;
  }
`;

export const Content = styled.span`
  word-break: break-word;

  ${({ done }) => done && css`text-decoration: line-through;`}
`;