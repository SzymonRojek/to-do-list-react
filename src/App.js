import { useState, useEffect } from 'react';
import { Form } from './Form';
import { Tasks } from './Tasks';
import { Buttons } from './Buttons';
import { Section } from './Section';
import { Header } from './Header';
import { Container } from './Container';

export function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = id => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, 
      done: true,
    })));
  };

  const addNewTask = newTaskContent => {
    setTasks(tasks => [
      ...tasks, 
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }]);
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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