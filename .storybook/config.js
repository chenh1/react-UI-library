import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import App from '../src/components/App/App';

// Dynamically load all stories from stories directory
const req = require.context('../stories/', true, /.js$/);

addDecorator((story) => (
  <App>
    {story()}
  </App>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);