import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
      {tasks.length > 0 && (
        <>
          <button 
            onClick={toggleHideDone}
            className="buttons__button"
            disabled={tasks.every( ({ done }) => !done)} 
          >
            {hideDone ? 'Show' : 'Hide'} done
          </button>
          <button 
            className="buttons__button" 
            disabled={tasks.every( ({ done }) => done)} 
          >
            Mark all done
          </button>
        </> 
      )} 
    </div>
);

export default Buttons;