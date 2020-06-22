import React from 'react';
import PropTypes from 'prop-types';
import { greetingProvider, DEFAULT_LANGUAGE } from "./languageProvider";

const Welcome = (parameters) => {
    let { language, children } = parameters;
    let greeting = greetingProvider(language);
    return <div>
            <h3>{greeting}! {children}</h3>
            <h4>Welcome to TDD with React training</h4>
    </div>
}

Welcome.defaultProps = {
    language: DEFAULT_LANGUAGE
};






export default Welcome;
