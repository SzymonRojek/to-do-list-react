import { useState, useRef  } from 'react';
import {
  StyledForm,
  StyledInput,
  StyledButton
} from './styled';

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = event => {
    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

      if (!trimmedNewTaskContent) {
        return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput  
        ref={inputRef}
        value={newTaskContent}
        placeholder="What you have to do?" 
        autoFocus 
        onChange={ ({ target }) => setNewTaskContent(target.value)}
      />
      <StyledButton onClick={handleFocus}>
        Add task
      </StyledButton>
    </StyledForm>
  ); 
};