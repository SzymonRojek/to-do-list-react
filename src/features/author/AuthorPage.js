import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';
import { Link } from '../../common/Link'

export const AuthorPage = () => (
  <Container> 
    <Header title="About me" />
    <Section 
      title="Hello! I'm Szymon 👋" 
      body={
        <>
          <p>I learn programming and I <strong>love</strong>IT! 💖</p>
          <p>My goal is to become a front-end developer 	💫</p>
          <br />
          <p>Would you like to get to know more about me?</p>
          <p><strong>Please</strong>, have a check my github profile:</p>
          <Link to="https://github.com/SzymonRojek">GitHub</Link>
        </>
      }
    />
  </Container>
);
