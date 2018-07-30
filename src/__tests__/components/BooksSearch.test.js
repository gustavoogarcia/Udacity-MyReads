import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksSearch from '../../components/BooksSearch';

const props = {
    searchedBooks: [
        { id: 1, title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }  },
        { id: 2, title: "Titulo2 Teste", authors: "Autor2 Teste", imageLinks: { smallThumbnail: "url2 test" } },
        { id: 3, title: "Titulo3 Teste", authors: "Autor3 Teste", imageLinks: { smallThumbnail: "url3 test" } },
    ],
    books: [
        { id: 1, title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: 'read'  },
    ],
    query: "",
    changeShelf: jest.fn(),
    updateQuery: jest.fn(),
    clearQuery: jest.fn(),
}

jest.mock('react-router-dom')

describe('[Component] BooksSearch', () => {
    it('Shallow renders correctly', () => {
        expect(shallow(<BooksSearch {...props} />));
    });

    it('searchedBook is on the books, searchedBook.shelf = book.shelf', () => {
        const wrapper = mount(<BooksSearch {...props}/>);
        expect(wrapper.find('BookItem').first().prop("book")).toHaveProperty('shelf');
    })

    it('searchedBook is not on the books, searchedBook does not have a shelf', () => {
        const wrapper = mount(<BooksSearch {...props}/>);
        expect(wrapper.find('BookItem').last().prop("book")).not.toHaveProperty('shelf');
    })

    it('Maps through the books', () => {
        const wrapper = mount(<BooksSearch {...props}/>);
        expect(wrapper.find('li')).toHaveLength(3);
    })

    it('Calls updateQuery on input change', () => {
        const wrapper = mount(
            <BooksSearch {...props}/>
        );

        wrapper.find('input').simulate('change');

        expect(props.updateQuery).toHaveBeenCalledTimes(1);
    })

    it('Calls clearQuery on button click', () => {
        const wrapper = mount(
            <BooksSearch {...props}/>
        );

        wrapper.find('button').simulate('click');

        expect(props.clearQuery).toHaveBeenCalledTimes(1);
    })
});