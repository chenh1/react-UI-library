import React from 'react';
import Button from '../src/components/Button/Button';
import { storiesOf } from '@kadira/storybook';

storiesOf('Buttons', module)
    .add('one', () => {
        return <Button type='one'/>;
    });