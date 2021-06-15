import './style.css';

export const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
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
            onClick={setAllDone}
            className="buttons__button" 
            disabled={tasks.every( ({ done }) => done)} 
          >
            Mark all done
          </button>
        </> 
      )} 
    </div>
);