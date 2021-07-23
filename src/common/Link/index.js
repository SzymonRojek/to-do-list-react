import StyledLink from "./styled";

export const Link = ({ to, children, ...otherProps }) => {
  if (!to) {
    return <span {...otherProps}>{children}</span>;
  }

  if (/^https?:\/\//.test(to)) {
    return (
      <StyledLink as="a" target="_blank" href={to} {...otherProps}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink to={to} {...otherProps}>
      {children}
    </StyledLink>
  );
};
