import React from 'react';
import Input from '../src/components/Input/Input';
import { storiesOf } from '@kadira/storybook';

storiesOf('Inputs', module)
    .add('one', () => {
        return <Input type='one' label='Placeholder'/>;
    }).add('two', () => {
        return <Input type='two' label='Placeholder'/>;
    });