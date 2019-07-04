import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  position: relative;
  list-style-type: none;
  margin: 10px;

  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    top: 25%;
    right: -15px;
  }
`;

export default ListItem;
