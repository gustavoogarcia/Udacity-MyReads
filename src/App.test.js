import React from 'react'
import { shallow, mount } from 'enzyme';
import App from './App'

describe('[Component] App', () => {
    global.localStorage = {
      token: '12345678'
    }

    it('Shallow renders correctly', () => {
        expect(shallow(<App />));
    });

});