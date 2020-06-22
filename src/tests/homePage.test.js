import React from 'react';
import HomePage from '../homePage';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';


describe("Home page with language selection bar and welcome note", () => {

    test("Test that home page displayed with correct welcome note", () => {
        let { getByText } = render(<HomePage user="David"></HomePage>);
        expect(getByText("Hello! David")).toBeInTheDocument();
    });


    test("Test that home page displayed with language bar", () => {
        const tree = renderer.create(<HomePage user="David"></HomePage>).toJSON();
        expect(tree).toMatchSnapshot();
    });


    test("Test that welcome note changes on change of language preference", ()=>{
        let {getByText} = render(<HomePage user="Simon"></HomePage>);
        expect(getByText("Hello! Simon")).toBeInTheDocument();
        fireEvent.click(getByText("ES"));
        expect(getByText("Hola! Simon")).toBeInTheDocument();
    })


})