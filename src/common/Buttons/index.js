import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Button } from './styled';

import { 
  toggleHideDone, 
  setAllDone, 
  selectAreTasksEmpty, 
  selectIsEveryTaskDone, 
  selectHidedone 
} from '../../features/tasks/tasksSlice';

export const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHidedone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button 
            onClick={() => dispatch(toggleHideDone())}
            disabled={isEveryTaskDone} 
          >
            {hideDone ? 'Show' : 'Hide'} done
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())} 
            disabled={isEveryTaskDone} 
          >
            Finish all
          </Button>
        </> 
      )} 
    </Wrapper>
  );
};