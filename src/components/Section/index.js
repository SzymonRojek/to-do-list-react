import { 
  Wrapper, 
  Header, 
  Heading, 
  BodyWrapper 
} from './styled';

export const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Heading>{title}</Heading>
      {extraHeaderContent}
    </Header>
    <BodyWrapper>
      {body}
    </BodyWrapper>
  </Wrapper>  
);