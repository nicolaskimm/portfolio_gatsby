import styled from 'styled-components';

const SubHeading = styled.h2`
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  position: relative;
`;

export default SubHeading;
