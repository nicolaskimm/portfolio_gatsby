import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 1.2px;
`;

export default Paragraph;
