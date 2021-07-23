import StyledLink from "./styled";

export const Link = ({ to, children, ...props }) => {
  if (!to) {
    return <span {...props}>{children}</span>;
  } else if (/^https?:\/\//.test(to)) {
    return (
      <StyledLink as="a" target="_blank" href={to} {...props}>
        {children}
      </StyledLink>
    );
  } else {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }
};
