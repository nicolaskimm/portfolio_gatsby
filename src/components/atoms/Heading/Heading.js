import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xxl : theme.fontSize.xl};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeight.bold : theme.fontWeight.light};
`;

export default Heading;
