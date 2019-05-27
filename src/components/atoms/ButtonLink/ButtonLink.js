import styled from 'styled-components';

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  background: none;
  border: 1px solid black;
  border-radius: 7px;
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: lowercase;
`;

export default ButtonLink;
