import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  {id: 1, content: 'start to learn React.js', done: true},
  {id: 2, content: 'buy strings', done: false},
];

const hideDone = false;

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
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
}

export default App;
