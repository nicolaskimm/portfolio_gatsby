import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from './ListItem';

storiesOf('Atoms/ListItem', module).add('Js', () => (
  <ul>
    <ListItem>HTML5</ListItem>
    <ListItem>CSS3</ListItem>
    <ListItem>javascript</ListItem>
    <ListItem>react</ListItem>
  </ul>
));
