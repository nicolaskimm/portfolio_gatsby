import styled, { css } from 'styled-components';

const Subheading = styled.h2`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  position: relative;

  ${({ primary }) =>
    primary &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 19px;
        width: 70%;
        top: 60%;
        left: 0;
        background-color: ${({ theme }) => theme.color.green};
        z-index: -9999999;
      }
    `}
`;

export default Subheading;
