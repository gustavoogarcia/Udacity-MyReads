import React from 'react'
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme';
import App from '../App'

describe('[Component] App', () => {


    it('Shallow renders correctly', () => {
        expect(shallow(<App />));
    });

    it('Mount renders correctly', () => {
        expect(mount(<MemoryRouter><App /></MemoryRouter>));
    });

    it('BooksAPI return books when componentDidMount', async () => {
        const wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
        expect(wrapper.find(App).instance().state.books.length).toEqual(0);
        await wrapper.find(App).instance().componentDidMount()
        expect(wrapper.find(App).instance().state.books.length).toEqual(3);
    });

    it('When call changeSelf book.shelf = target.value', async () => {
        const wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}><App /></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        expect(wrapper.find(App).instance().state.books[0]["shelf"]).toBe("read");
        expect(wrapper.find(BooksList).length).toBe(1);

    });
});