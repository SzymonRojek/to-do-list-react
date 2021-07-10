import { Container } from '../../common/Container';
import { Header } from '../../common/Header';
import { Section } from '../../common/Section';

export const AuthorPage = () => (
  <Container> 
    <Header title="About me" />
    <Section 
      title="Hello! I'm Szymon 👋" 
      body={
        <>
          <p>I learn programming and I <strong>really</strong> love it! 💖</p>
          <p>Hopefully I will become a front-end developer 	💫</p>
          <p>If you want to get to know my skills, please have a check my github profile.</p>
        </>
      }
    />
  </Container>
);
