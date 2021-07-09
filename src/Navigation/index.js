import { Link } from 'react-router-dom';
import { List, Item } from './styled';
 
export const Navigation = () => (
  <nav>
    <List>
      <Item>
        <Link to="/zadania">Zadania</Link>
      </Item>
      <Item>
        <Link to="/author">Author</Link>
      </Item>
    </List>
  </nav>
);