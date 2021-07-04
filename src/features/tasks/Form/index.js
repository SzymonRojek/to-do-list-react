import { useState, useRef  } from 'react';
import {
  FormWrapper,
  Input,
  Button
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
    <FormWrapper onSubmit={onFormSubmit}>
      <Input 
        ref={inputRef}
        value={newTaskContent}
        placeholder="What you have to do?" 
        autoFocus 
        onChange={ ({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={handleFocus}>
        Add task
      </Button>
    </FormWrapper>
  ); 
};