import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map( task => (
      <li
        key={task.id}
        className=
        {`tasks__item${ task.done && hideDoneTasks ? " tasks__item--hidden" : ""}`}
        >
        <button className="tasks__button tasks__button--toggleDone js-toggleDone">
            {task.done ? "✓" : ""}
          </button>
          <span className=
            {`tasks__singleTask${ task.done ? " tasks__singleTask--done" : ""}`}>
            {task.content} 
          </span>
          <button className="tasks__button js-removeButton">
            🗑
          </button>
      </li>
    ))}
  </ul>
);

export default Tasks 