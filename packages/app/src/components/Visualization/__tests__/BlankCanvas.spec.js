import React from 'react';
import { shallow } from 'enzyme';
import { BlankCanvas } from '../BlankCanvas';

describe('BlankCanvas', () => {
    let props;
    let shallowBlankCanvas;
    const canvas = () => {
        if (!shallowBlankCanvas) {
            shallowBlankCanvas = shallow(<BlankCanvas {...props} />);
        }
        return shallowBlankCanvas;
    };

    beforeEach(() => {
        props = {
            loading: false,
            error: null,
        };
        shallowBlankCanvas = undefined;
    });

    it('renders a div', () => {
        expect(canvas().find('div').length).toBeGreaterThan(0);
    });

    it('renders a default message', () => {
        expect(
            canvas()
                .find('p')
                .text()
        ).toContain('new visualization');
    });

    it('renders the provided error message', () => {
        const theError = 'Error 718: I am not a teapot';
        props.error = theError;
        expect(
            canvas()
                .find('p')
                .last()
                .text()
        ).toEqual(theError);
    });
});
