import { Wrapper, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleHideDone } from '../tasksSlice';

export const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button 
            onClick={() => dispatch(toggleHideDone())}
            disabled={tasks.every( ({ done }) => !done)} 
          >
            {hideDone ? 'Show' : 'Hide'} done
          </Button>
          <Button 
            onClick={setAllDone} 
            disabled={tasks.every( ({ done }) => done)} 
          >
            Finish all
          </Button>
        </> 
      )} 
    </Wrapper>
  );
};