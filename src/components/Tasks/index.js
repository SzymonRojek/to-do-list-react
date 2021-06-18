import {
  TaskWrapper,
  StyledItem,
  TasksButton,
  Content
} from './styled';

export const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TaskWrapper>
    {tasks.map( task => (
      <StyledItem
        key={task.id}
        hidden={task.done && hideDone}
        >
        <TasksButton 
          toggleDone 
          onClick={()=> toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </TasksButton>
          <Content done={task.done}>{task.content}</Content>
        <TasksButton
          remove  onClick={()=>removeTask(task.id)}
        >
          🗑
        </TasksButton>
      </StyledItem>
    ))}
  </TaskWrapper>
);