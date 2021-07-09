import { Container } from '../../../common/Container';
import { Header } from '../../../common/Header';
import { Section } from '../../../common/Section';
import { Form } from '../../../features/tasks/TasksPage/Form';
import { TasksList } from './TasksList';
import { Buttons } from '../../../common/Buttons';
import { DownloadButton } from './DownloadButton';
import { Search } from './Search';

export const TasksPage = () => (
  <Container> 
    <Header title="List of tasks" />
    <Section 
      button={<DownloadButton />}
      title="Add new task" 
      body={<Form />} 
    />
    <Section
      title="Search tasks"
      body={<Search />}
    />
    <Section
      title="List of to do"
      body={<TasksList />}
      extraHeaderContent={<Buttons />}
    />
</Container>
);