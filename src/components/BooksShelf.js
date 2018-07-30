import React from 'react';
import PropTypes from 'prop-types'
import BookItem from './BookItem';
import If from '../helpers/If'

const BooksShelf = ({ name, label, changeShelf, books }) => (
    <div className="BooksShelf">
        <h2 className="BooksShelf-title">{label}</h2>
        <div className="BooksShelf-books">
            <ol className="books-grid">
                {books && books.map((book) => (
                    <If key={book.title} test={book.shelf === name}>
                        <BookItem changeShelf={changeShelf} book={book} />
                    </If>
                ))}
            </ol>
        </div>
    </div>
);

BooksShelf.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired 
};

export default BooksShelf;