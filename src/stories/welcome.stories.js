import React from 'react';
import Welcome from '../welcome';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';


export default {
    title: "Welcome",
  decorators: [withTests({ results })]
};

export let DefaultWelcome = ()=><Welcome>Bill</Welcome>;

export let SpanishWelcome = ()=><Welcome language="ES">Bill</Welcome>;



DefaultWelcome.story = {
    parameters: {
      jest: ['welcome.test.js'],
    },
  }; 
