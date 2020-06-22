import React from 'react';
import {render} from '@testing-library/react';
import Welcome from "../welcome";

describe("Header displays welcome message and name correctly",()=>{

    test(": In English",()=>{
        const {getByText} = render(<Welcome language="EN">Ritesh</Welcome>);
        expect(getByText("Hello! Ritesh")).toBeInTheDocument();
    });

    test(": In Spanish",()=>{
        const {getByText} = render(<Welcome language="ES">Ritesh</Welcome>);
        expect(getByText("Hola! Ritesh")).toBeInTheDocument();
    });

    test(": Without a language preference",()=>{
        const {getByText} = render(<Welcome>Ritesh</Welcome>);
        expect(getByText("Hello! Ritesh")).toBeInTheDocument();
    });
})
