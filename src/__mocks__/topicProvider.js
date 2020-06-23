const topics = [{
    name: "Fake 1",
    description: "Test-driven development is a set of techniques that any software engineer can follow, which encourages simple designs and test suites that inspire confidence",
    link: "https://www.agilealliance.org/glossary/tdd/"

}, {
    name: "Fake 2",
    description: "A JavaScript library for building user interfaces",
    link: "https://reactjs.org/"
},

]

class TopicProvider {
    constructor() {
    }
    getTopics() {
        return new Promise((res, rej) => {
            // setTimeout(() => {
                res(topics);
            // }, 1000);
        })
    }
}

export default TopicProvider;