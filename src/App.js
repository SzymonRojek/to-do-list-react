import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  {id: 1, content: 'start to learn React.js', done: true},
  {id: 2, content: 'buy strings', done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="List of tasks" />
      <Section 
        title="Add new task" 
        body={<Form />} 
      />
      <Section
        title="List of to do"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
