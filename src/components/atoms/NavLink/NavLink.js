import styled, { css } from 'styled-components';

const NavLink = styled.li`
  display: inline-block;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: lowercase;

  &:hover {
    border-bottom: 5px solid black;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.light};

      &:hover {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        border: none;
      }
    `}
`;

export default NavLink;
