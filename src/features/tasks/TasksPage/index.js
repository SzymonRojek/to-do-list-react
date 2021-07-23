import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { Form } from "../../../features/tasks/TasksPage/Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { DownloadExapleTasksButton } from "./DownloadExampleTasksButton";
import { Search } from "./Search";

export const TasksPage = () => (
  <Container>
    <Header title="List of tasks" />
    <Section
      title="Add new task"
      body={<Form />}
      extraHeaderContent={<DownloadExapleTasksButton />}
    />
    <Section title="Search tasks" body={<Search />} />
    <Section
      title="List of to do"
      body={<TasksList />}
      extraHeaderContent={<Buttons />}
    />
  </Container>
);
