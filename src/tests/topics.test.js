import { render, queryAllByText, fireEvent } from "@testing-library/react";
import Topics from '../topics';
import React from 'react';
import TopicProvider from '../topicProvider';

describe("Topics for training session", () => {

    let topics = [];
    beforeAll(() => {
        let provider = new TopicProvider();
        provider.getTopics().then((response) => { return response }).then((data) => topics = data);
    })

    test("Test topics are visible", () => {
        let { getByText } = render(<Topics list={topics}></Topics>);
        setTimeout(()=>{
            expect(getByText("TDD")).toBeInTheDocument();
            expect(getByText("React")).toBeInTheDocument();

        },6000);
    });



})
