import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TaskPage } from './features/tasks/TaskPage';
import { TasksPage } from './features/tasks/TasksPage/index';
import { AuthorPage } from './features/author/AuthorPage';
import { Navigation } from './Navigation';

export const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

