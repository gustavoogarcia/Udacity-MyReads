import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksShelf from '../../components/BooksShelf';

const props = {
    books: [
        { title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: 'read'  },
        { title: "Titulo2 Teste", authors: "Autor2 Teste", imageLinks: { smallThumbnail: "url2 test" }, shelf: 'read'  },
        { title: "Titulo3 Teste", authors: "Autor3 Teste", imageLinks: { smallThumbnail: "url3 test" }, shelf: 'toRead'  },
    ],
    name: "read",
    label: "Read",
    changeShelf: jest.fn()

}

describe('[Component] BooksShelf', () => {
    it('Shallow renders correctly', () => {

        expect(shallow(<BooksShelf {...props} />));
    });

    it('Maps through the books', () => {
        const wrapper = mount(
            <BooksShelf {...props}/>
        );
        expect(wrapper.find('li')).toHaveLength(2);
    })
});