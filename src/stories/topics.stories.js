import React from 'react';
import Topics from '../topics';


export default {
    title: 'Topics'
}

const topicStub = [{name:"TDD", description:"Some description about TDD",link: "https://www.agilealliance.org/glossary/tdd/"}, 
{name:"React", description:"Some description about React", link="https://reactjs.org/"}];
export const TopicsComponent = ()=> <Topics list={topicStub}></Topics>;

