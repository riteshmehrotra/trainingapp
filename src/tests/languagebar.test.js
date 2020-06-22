import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageBar from '../languagebar';

describe("Navigation bar with language options", () => {

    it("Test that bar displays language options", () => {
        let lang = ["EN", "ES"];
        let { getByText } = render(<LanguageBar languages={lang}></LanguageBar>);
        expect(getByText("EN")).toBeInTheDocument();
        expect(getByText("EN")).toHaveClass("badge-primary");
        expect(getByText("ES")).toBeInTheDocument();
        expect(getByText("ES")).toHaveClass("badge-secondary");

    })


    it("Tests that language options can be toggled on click", () => {
        let lang = ["EN", "ES"];
        let onChangeEvent=jest.fn();
        let { getByText } = render(<LanguageBar languages={lang} onChange={onChangeEvent}></LanguageBar>);
        fireEvent.click(getByText("ES"));
        expect(getByText("ES")).toHaveClass("badge-primary");
        expect(getByText("EN")).toHaveClass("badge-secondary");
        expect(onChangeEvent).toHaveBeenCalled();
    })
})