import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.section.backgroundColor};
  box-shadow: 0 0 5px ${({ theme }) => theme.accent.shadow};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.accent.borderLight};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const BodyWrapper = styled.div`
  padding: 20px;
`;