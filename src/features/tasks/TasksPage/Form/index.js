import { useState, useRef  } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FormWrapper, Button } from './styled';
import { addTask } from '../../tasksSlice';
import Input from '../Input';

export const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

      if (!trimmedNewTaskContent) {
        return;
      }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input 
        ref={inputRef}
        value={newTaskContent}
        placeholder="What you have to do?" 
        autoFocus 
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={handleFocus}>
        Add task
      </Button>
    </FormWrapper>
  ); 
};