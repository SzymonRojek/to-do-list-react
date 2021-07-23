import { List, Item, StyledNavLink } from "./styled";

export const Navigation = () => (
  <nav>
    <List>
      <Item left>
        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
      </Item>
      <Item right>
        <StyledNavLink to="/author">Author</StyledNavLink>
      </Item>
    </List>
  </nav>
);
