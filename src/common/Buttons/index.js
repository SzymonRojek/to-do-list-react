import { Wrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleHideDone, setAllDone } from '../../features/tasks/tasksSlice';

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button 
            onClick={() => dispatch(toggleHideDone())}
            disabled={tasks.every(({ done }) => !done)} 
          >
            {hideDone ? 'Show' : 'Hide'} done
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())} 
            disabled={tasks.every(({ done }) => done)} 
          >
            Finish all
          </Button>
        </> 
      )} 
    </Wrapper>
  );
};