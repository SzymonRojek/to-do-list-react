import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Container } from '../../../common/Container';
import { Header } from '../../../common/Header';
import { Section } from '../../../common/Section';
import { getTaskById } from '../tasksSlice';

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container> 
      <Header title="Task details:" />
      <Section 
        title={task ? task.content : "Task has not been found 😢"}
        body={
        <><strong>Finshed:</strong> {task.done ? "Yes" : "No"}</>} 
      />
    </Container>
  );
};  