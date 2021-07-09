import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 20px;

  background-color: ${({ theme }) => theme.navigation.backgroundColor};
`;

export const Item = styled.li``;