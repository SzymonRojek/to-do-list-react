import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { 
  toggleTaskDone, 
  removeTask, 
  selectHidedone, 
  selectTasksByQuery
} from '../../tasksSlice';
import searchQueryParamName from '../searchQueryParamName';
import {
  List,
  Item,
  StyledLink,
  Button,
  Content
} from './styled';
 

export const TasksList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHidedone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        > 
        <Button 
          toggleDone 
          onClick={() => dispatch(toggleTaskDone(task.id))}
        >
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>
          <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
        </Content>
        <Button
          remove  
          onClick={() => dispatch(removeTask(task.id))}
        >
          🗑
        </Button >
        </Item>
      ))}
    </List>
  );
}; 