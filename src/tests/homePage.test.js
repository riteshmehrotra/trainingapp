import React from 'react';
import HomePage from '../homePage';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import renderer from 'react-test-renderer';

jest.mock('../topicProvider');


describe("Home page with language selection bar and welcome note", () => {

    test("Test that home page displayed with correct welcome note", async () => {
        let { getByText } = render(<HomePage user="David"></HomePage>);
        await waitForDomChange(() => getByText("Hello! David"));

        expect(getByText("Hello! David")).toBeInTheDocument();
    });


    test("Test that home page displayed with language bar, welcome note and topics", () => {
        const tree = renderer.create(<HomePage user="David"></HomePage>);
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });


    test("Test that welcome note changes on change of language preference", async () => {
        let { getByText } = render(<HomePage user="Simon"></HomePage>);
        await waitForDomChange(() => getByText("Hello! Simon"));
        expect(getByText("Hello! Simon")).toBeInTheDocument();
        fireEvent.click(getByText("ES"));

        expect(getByText("Hola! Simon")).toBeInTheDocument();
    })



    test("Test that topics are listed on home page", async () => {
        let { queryByText, getByText } = render(<HomePage user="Simon"></HomePage>);
        await waitForDomChange(() => getByText("Fake 2"));

        expect(queryByText("Fake 3")).not.toBeInTheDocument();
        expect(getByText("Fake 1")).toBeInTheDocument();
        expect(getByText("Fake 2")).toBeInTheDocument();

    })


})