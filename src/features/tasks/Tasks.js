import { useState } from 'react';
import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { Form } from './Form';
import { TasksList } from './TasksList';
import { Buttons } from './Buttons';
import { useTasks } from '../../useTasks';

export const Tasks = () => {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
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
            tasks={tasks} 
            hideDone={hideDone} 
            removeTask={removeTask} 
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons 
            tasks={tasks} 
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone} 
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
};