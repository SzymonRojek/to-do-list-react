import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { Form } from './Form';
import { TasksList } from './TasksList';
import { Buttons } from '../../common/Buttons';
import { DownloadButton } from '../../common/Section/DownloadButton';

export const Tasks = () => (
  <Container> 
    <Header title="List of tasks" />
    <Section 
      button={<DownloadButton />}
      title="Add new task" 
      body={<Form />} 
    />
    <Section
      title="List of to do"
      body={<TasksList />}
      extraHeaderContent={<Buttons />}
    />
  </Container>
); 