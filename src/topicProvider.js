const topics = [{
    name: "TDD",
    description: "Test-driven development is a set of techniques that any software engineer can follow, which encourages simple designs and test suites that inspire confidence",
    link: "https://www.agilealliance.org/glossary/tdd/"

}, {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    link: "https://reactjs.org/"
},
    , {
    name: "Jest",
    description: "JavaScript test runner that lets you access the DOM via jsdom. Fast execution with parallel processing of tests, and ability to mock and wait",
    link: "https://jestjs.io/en/"
},
    , {
    name: "Testing-library",
    description: "Set of helpers that let you test React components without relying on their implementation details",
    link: "https://testing-library.com/"
},
    , {
    name: "Storybook",
    description: "Open source tool for developing UI components in isolation",
    link: "https://storybook.js.org/"
}
]

class TopicProvider {
    constructor() {
    }
    getTopics() {

        return new Promise((res, rej) => {
            setTimeout(() => {
                res(topics);
            }, 3000);
        })
    }
}

export default TopicProvider;