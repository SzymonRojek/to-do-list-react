import { List, Item, StyledNavLink } from './styled';
 
export const Navigation = () => (
  <nav>
    <List>
      <Item left>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </Item>
      <Item right>
        <StyledNavLink to="/author">About me</StyledNavLink>
      </Item>
    </List>
  </nav>
);