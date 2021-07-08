import { HashRouter, Link, Switch, Route  } from 'react-router-dom';
import { Tasks } from './features/tasks/Tasks';
import { Author } from './features/author/Author';

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/author">Author</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);