import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
      {tasks.length > 0 && (
        <React.Fragment>
          <button 
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
        </React.Fragment> 
      )} 
    </div>
);

export default Buttons;