import styled from 'styled-components';

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 20px;
  background: none;
  border: 1px solid white;
  border-radius: 7px;
  padding: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  text-transform: lowercase;
`;

export default ButtonLink;
