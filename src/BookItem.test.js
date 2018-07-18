import React from 'react';
import { shallow, mount } from 'enzyme';
import BookItem from './BookItem';

const props = {
    book: { title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: 'read'  },
    changeShelf: jest.fn()
}

describe('[Component] BookItem', () => {
    it('Shallow renders correctly', () => {
        expect(shallow(<BookItem {...props} />));
    });

    it('If book has imageLinks, backgroundImage is imageLinks.smallThumbnail', () => {
        const wrapper = mount(
            <BookItem {...props}/>
        );
    });

    it('Calls changeShelf on select change', () => {
        const wrapper = mount(
            <BookItem {...props}/>
        );
        wrapper.find('select').simulate('change');
        expect(props.changeShelf).toHaveBeenCalledTimes(1);
    })
});