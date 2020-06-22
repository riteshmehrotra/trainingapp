import React from 'react';
import { render, fireEvent, getByPlaceholderText, getByText } from '@testing-library/react';
import Login from '../login';
import renderer from 'react-test-renderer';


describe("Login details capture: ", () => {

    let mockCallBack;
    let component;

    beforeEach(() => {
        mockCallBack = jest.fn();
        let { container } = render(<Login onSubmit={mockCallBack} ></Login>);
        component = container;
    })

    afterEach(() => {
        mockCallBack = null;
        component = null;
    })

    test("Test that login is successfully submitted when name is provided", () => {
        let input = getByPlaceholderText(component, 'Enter your name');
        fireEvent.change(input, { target: { value: 'Ritesh' } });
        expect(input.value).toBe("Ritesh");
        let button = getByText(component, 'Enter').closest('button');
        expect(button).not.toBeDisabled();
        fireEvent.submit(button);
        expect(mockCallBack).toHaveBeenCalledWith("Ritesh");
    });


    test("Test that user cannot submit form when name is not prov ided", () => {
        expect(getByText(component, 'Enter').closest('button')).toBeDisabled();
        let button = getByText(component, 'Enter').closest('button');
        fireEvent.submit(button);
        expect(mockCallBack).not.toHaveBeenCalled();
    })


    test("Test that user cannot submit form when name is provided with empty string", () => {
        let input = getByPlaceholderText(component, 'Enter your name');
        fireEvent.change(input, { target: { value: '                        ' } });
        let button = getByText(component, 'Enter').closest('button')
        expect(button).toBeDisabled();
        fireEvent.submit(button);
        expect(mockCallBack).not.toHaveBeenCalled();
    })


    test("Test snapshot of login form",()=>{
        const tree = renderer.create(<Login onSubmit={mockCallBack}></Login>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})