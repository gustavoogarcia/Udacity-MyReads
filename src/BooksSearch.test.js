import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksSearch from './BooksSearch';

const props = {
    books: [
        { title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: 'read'  },
        { title: "Titulo2 Teste", authors: "Autor2 Teste", imageLinks: { smallThumbnail: "url2 test" }, shelf: 'read'  },
        { title: "Titulo3 Teste", authors: "Autor3 Teste", imageLinks: { smallThumbnail: "url3 test" }, shelf: 'toRead'  },
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

    it('Maps through the queryed books', () => {
        const wrapper = mount(
            <BooksSearch {...props}/>
        );
        expect(wrapper.find('li')).toHaveLength(3);
    })

    it('Maps through the books', () => {
        const wrapper = mount(
            <BooksSearch query="3" {...props}/>
        );
        expect(wrapper.find('li')).toHaveLength(1);
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