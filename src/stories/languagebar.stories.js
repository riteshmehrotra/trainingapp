import React from 'react';
import LanguageBar from '../languagebar';
import results from '../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
    title: "Language Bar",
    decorators: [withTests({ results })]
};


export const LanguageBarComponent = () => <LanguageBar languages={["EN", "ES"]}></LanguageBar>

LanguageBarComponent.story = {
    parameters: {
        jest: ['languagebar.test.js'],
    },
}; 