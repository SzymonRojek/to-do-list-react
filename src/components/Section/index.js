import { 
  SectionWrapper, 
  StyledHeader, 
  StyledHeading, 
  BodyWrapper 
} from './styled';

export const Section = ({ title, body, extraHeaderContent }) => (
  <SectionWrapper>
    <StyledHeader>
      <StyledHeading>{title}</StyledHeading>
      {extraHeaderContent}
    </StyledHeader>
    <BodyWrapper>
      {body}
    </BodyWrapper>
  </SectionWrapper>  
);