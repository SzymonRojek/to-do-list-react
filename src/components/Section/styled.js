import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export const BodyWrapper = styled.div`
  padding: 20px;
`;