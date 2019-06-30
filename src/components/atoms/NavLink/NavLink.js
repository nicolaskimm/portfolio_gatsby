import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = styled(Link)`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: lowercase;
  text-decoration: none;

  &:hover {
    border-bottom: 5px solid white;
  }
`;

export default NavLink;
