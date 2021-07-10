import { List, Item, StyledNavLink } from './styled';
 
export const Navigation = () => (
  <nav>
    <List>
      <Item left>
        <StyledNavLink to="/zadania">Tasks</StyledNavLink>
      </Item>
      <Item right>
        <StyledNavLink to="/author">About</StyledNavLink>
      </Item>
    </List>
  </nav>
);