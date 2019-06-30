import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-transform: uppercase;
  position: relative;
  list-style-type: none;
  margin: 10px;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    width: 3px;
    background-color: black;
    position: absolute;
    top: 0;
    right: -10px;
  }
`;

export default ListItem;
