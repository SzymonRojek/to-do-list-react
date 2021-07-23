import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.links.color};
  user-select: none;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.links.hover};
  }

  &:active {
    color: ${({ theme }) => theme.links.active};
  }
`;
