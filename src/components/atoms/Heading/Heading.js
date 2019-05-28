import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.xl)};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeight.bold : theme.fontWeight.regular)};
  position: relative;

  ${({ greenline }) =>
    greenline &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 50%;
        width: 75%;
        top: 65%;
        left: 0;
        background-color: ${({ theme }) => theme.color.green};
        z-index: -9999999;
      }
    `}
`;

export default Heading;
