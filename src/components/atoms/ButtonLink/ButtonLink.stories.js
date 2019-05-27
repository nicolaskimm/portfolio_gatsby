import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonLink from './ButtonLink';

storiesOf('Atoms/ButtonLink', module)
  .add('Github', () => <ButtonLink>github</ButtonLink>)
  .add('Demo', () => <ButtonLink>Demo</ButtonLink>);
