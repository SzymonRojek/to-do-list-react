import { ButtonsWrapper, StyledButton } from './styled';

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsWrapper>
    {tasks.length > 0 && (
      <>
        <StyledButton 
          onClick={toggleHideDone}
          disabled={tasks.every( ({ done }) => !done)} 
        >
          {hideDone ? 'Show' : 'Hide'} done
        </StyledButton>
        <StyledButton 
          onClick={setAllDone} 
          disabled={tasks.every( ({ done }) => done)} 
        >
          Mark all done
        </StyledButton>
      </> 
    )} 
  </ButtonsWrapper>
);