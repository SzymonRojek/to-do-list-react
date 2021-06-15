import './style.css';

export const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map( task => (
      <li
        key={task.id}
        className=
        {`tasks__item${ task.done && hideDone ? " tasks__item--hidden" : ""}`}
        >
        <button 
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
          <span className=
            {`tasks__singleTask${ task.done ? " tasks__singleTask--done" : ""}`}>
            {task.content} 
          </span>
        <button 
          className="tasks__button"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);