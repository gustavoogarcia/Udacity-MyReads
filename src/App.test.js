import React from 'react'
import { shallow, mount } from 'enzyme';
import App from './App'

describe('[Component] App', () => {

    xit('Shallow renders correctly', () => {
        expect(shallow(<App {...props} />));
    });

});