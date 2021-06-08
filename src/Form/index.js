import { useState, useRef  } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const textInput = useRef(null);

  const handleFocus = () => {
    textInput.current.focus();
  };

  const onFormSubmit = event => {
    event.preventDefault();
    
    if(!newTaskContent) {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form 
      className="form"
      onSubmit={onFormSubmit}
    >
      <input  
        ref={textInput}
        value={newTaskContent}
        className="form__input" 
        placeholder="What you have to do?" 
        autoFocus 
        onChange={ ({ target }) => setNewTaskContent(target.value)}
      />
      <button 
      onClick={handleFocus}
      className="form__button">
        Add task
      </button>
    </form>
  ); 
}

export default Form;