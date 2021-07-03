import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import { Buttons } from './components/Buttons';
import { useTasks } from './useTasks';

export function App() {
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
          <Tasks 
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