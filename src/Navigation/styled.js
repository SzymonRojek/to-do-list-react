import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 25px;
  background-color: ${({ theme }) => theme.navigation.backgroundColor};
`;

export const Item = styled.li`
  padding: 5px 0 5px 0;
  margin: 0 10px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.9px;
    user-select: none;
    background-color: ${({ theme }) => theme.navigation.hover};
    transform: scale(0, 1);
    transition: transform 0.3s ease;

    ${({ left }) =>
      left &&
      css`
        transform-origin: 0% 100%;
      `}

    ${({ right }) =>
      right &&
      css`
        transform-origin: 100% 0%;
      `}
  }

  &:hover::after {
    transform: scale(1, 1);
  }
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  font-size: 18px;
  color: ${({ theme }) => theme.navigation.color};
  letter-spacing: 1px;
  text-decoration: none;
  user-select: none;
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.navigation.hover};
  }

  &.${activeClassName} {
    font-weight: bold;
  }
`;
