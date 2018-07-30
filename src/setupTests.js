import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter()})

global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
        resolve({
            ok: true, 
            json: function() { 
                return {books: [
                    { id: 1, title: "Titulo Teste", authors: "Autor Teste", imageLinks: { smallThumbnail: "url test" }, shelf: "read"  },
                    { id: 2, title: "Titulo2 Teste", authors: "Autor2 Teste", imageLinks: { smallThumbnail: "url2 test"}, shelf: "toRead"},
                    { id: 3, title: "Titulo3 Teste", authors: "Autor3 Teste", imageLinks: { smallThumbnail: "url3 test" }, shelf: "toRead"},
                ],}
            }
        });
    });

    return p;
});

global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
