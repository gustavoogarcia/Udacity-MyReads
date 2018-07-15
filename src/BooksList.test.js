import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksList from './BooksList';

const props = {
    books: [
        { title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: 'read'  },
        { title: "Titulo2 Teste", authors: "Autor2 Teste", imageLinks: { smallThumbnail: "url2 test" }, shelf: 'read'  },
    ],
    changeShelf: jest.fn()
}

jest.mock('react-router-dom')

describe('[Component] BooksList', () => {
    it('Shallow renders correctly', () => {

        expect(shallow(<BooksList {...props} />));
    });

    it('Maps through the shelfs', () => {
        const wrapper = mount(
            <BooksList {...props}/>
        );
        expect(wrapper.find('li')).toHaveLength(2);
    })
});