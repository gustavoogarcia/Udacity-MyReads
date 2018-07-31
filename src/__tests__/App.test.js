import React from 'react'
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme';
import App from '../App'

describe('[Component] App', () => {
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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

    it('When call changeSelf, book.shelf = target.value', async () => {
        const wrapper = mount(<MemoryRouter ><App/></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        wrapper.update()
        expect(wrapper.find(App).instance().state.books[0]["shelf"]).toBe("read");
        wrapper.find('select').first().simulate('change', {target: { value : 'toRead'}});
        expect(wrapper.find(App).instance().state.books[0]["shelf"]).toBe("toRead");
    });

    it('When call updateQuery, query = target.value', async () => {
        const wrapper = mount(<MemoryRouter initialEntries={[ '/search' ]}><App /></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        wrapper.update()
        expect(wrapper.find(App).instance().state.query).toBe("");
        wrapper.find('input').simulate('change', {target: { value : 'query test'}});
        expect(wrapper.find(App).instance().state.query).toBe('query test');
    });

    it('When call updateQuery, searchedBooks has books', async () => {
        const wrapper = mount(<MemoryRouter initialEntries={[ '/search' ]}><App /></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        wrapper.update()
        await wrapper.find('input').simulate('change', {target: { value : 'query test'}});
        await sleep(1000)
        wrapper.update()
        expect(wrapper.find(App).instance().state.searchedBooks.length).toBe(3);
    });

    it('When call updateQuery, and BooksAPI dont return books, searchedBooks is []', async () => {
        const wrapper = mount(<MemoryRouter initialEntries={[ '/search' ]}><App /></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        wrapper.update()
        await wrapper.find('input').simulate('change', {target: { value : 'query test'}});
        await sleep(1000)
        wrapper.update()
        expect(wrapper.find(App).instance().state.searchedBooks.length).toBe(3);
    });

    it('When call clearQuery, query = ""', async () => {
        const wrapper = mount(<MemoryRouter initialEntries={[ '/search' ]}><App /></MemoryRouter>);
        await wrapper.find(App).instance().componentDidMount()
        wrapper.update()
        await wrapper.find('input').simulate('change', {target: { value : 'query test'}});
        await sleep(1000)
        wrapper.update()
        await wrapper.find("button").simulate('click');
        wrapper.update()
        expect(wrapper.find(App).instance().state.query).toBe("");
    });
});