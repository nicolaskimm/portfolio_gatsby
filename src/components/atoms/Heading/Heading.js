import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xxl : theme.fontSize.xl)};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme, bold }) => (bold ? theme.fontWeight.bold : theme.fontWeight.regular)};
`;

export default Heading;
