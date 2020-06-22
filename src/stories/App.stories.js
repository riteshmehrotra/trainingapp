import React from 'react';
import App from '../App';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';


export default {
  title: 'App',
  decorators: [withTests({ results })],
};


export const AppComponent = () => <App/>;

AppComponent.story = {
  parameters: {
    jest: ['App.test.js'],
  },
}; 

