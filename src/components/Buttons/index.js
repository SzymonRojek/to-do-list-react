import { Wrapper, Button } from './styled';

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Wrapper>
    {tasks.length > 0 && (
      <>
        <Button 
          onClick={toggleHideDone}
          disabled={tasks.every( ({ done }) => !done)} 
        >
          {hideDone ? 'Show' : 'Hide'} done
        </Button>
        <Button 
          onClick={setAllDone} 
          disabled={tasks.every( ({ done }) => done)} 
        >
          Mark all done
        </Button>
      </> 
    )} 
  </Wrapper>
);