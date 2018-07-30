import React from 'react';
import { shallow } from 'enzyme';
import BookItem from '../../components/BookItem';

const props1 = {
    book: { title: "Titulo Teste1", authors: "Autor Teste1", imageLinks: { smallThumbnail: "url test1" }, shelf: 'read'  },
    changeShelf: jest.fn()
}

const props2 = {
    book: { title: "Titulo Teste2", authors: "Autor Teste2"  },
    changeShelf: jest.fn()
}

describe('[Component] BookItem', () => {
    it('Shallow renders correctly', () => {
        expect(shallow(<BookItem {...props1} />));
    });

    it('If book has imageLinks, backgroundImage is imageLinks.smallThumbnail', () => {
        const wrapper = shallow(<BookItem {...props1}/>);
        expect(wrapper.find('.book-cover').prop("style")).not.toHaveProperty('backgroundImage', "url(\"\")");
        
    });

    it('If book has not imageLinks, backgroundImage is "url(\"\")"', () => {
        const wrapper = shallow(<BookItem {...props2}/>);
        expect(wrapper.find('.book-cover').prop("style")).toHaveProperty('backgroundImage', "url(\"\")");
        
    });

    it('If book has shelf, shelf is book.shelf', () => {
        const wrapper = shallow(<BookItem {...props1}/>);
        expect(wrapper.find('select').prop("value")).toBe(props1.book.shelf);
        
    });

    it('If book has not shelf, shelf is "none"', () => {
        const wrapper = shallow(<BookItem {...props2}/>);
        expect(wrapper.find('select').prop("value")).toBe("none");
        
    });

    it('Calls changeShelf on select change', () => {
        const wrapper = shallow(<BookItem {...props1}/>);
        wrapper.find('select').simulate('change');
        expect(props1.changeShelf).toHaveBeenCalledTimes(1);
    })
});
