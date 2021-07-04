import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { Form } from './Form';
import { TasksList } from './TasksList';
import { Buttons } from './Buttons';
import { useTasks } from '../../useTasks';

export const Tasks = () => {

  const {
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container> 
      <Header title="List of tasks" />
      <Section 
        title="Add new task" 
        body={<Form addNewTask={addNewTask} />} 
      />
      <Section
        title="List of to do"
        body={
          <TasksList 
            removeTask={removeTask} 
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons 
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
};