import { 
  Wrapper, 
  Header, 
  Heading, 
  BodyWrapper 
} from './styled';

export const Section = ({ title, button, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Heading>
        {title}
      </Heading>
        {button}
        {extraHeaderContent}
    </Header>
    <BodyWrapper>
      {body}
    </BodyWrapper>
  </Wrapper>  
);