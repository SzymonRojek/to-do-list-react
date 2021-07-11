import { StyledInternalLink, StyledExternalLink } from "./styled";

export const Link = ({ to, children, ...props }) => {
  if (!to) {
    return <span {...props}>{children}</span>
  } else if (/^https?:\/\//.test(to)) {
    return <StyledExternalLink as="a" href={to} {...props}>{children}</StyledExternalLink>;
  } else { 
  return <StyledInternalLink to={to} {...props}>{children}</StyledInternalLink>;
  };
};