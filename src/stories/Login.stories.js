import React from 'react';
import Login from '../login';
import { action } from '@storybook/addon-actions';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';



export default {
    title:"User Info",
  decorators: [withTests({ results })],

}

export const LoginComponent = ()=><Login  onSubmit={action("Name submitted")} ></Login>


LoginComponent.story = {
    parameters: {
      jest: ['login.test.js'],
    },
  }; 
  