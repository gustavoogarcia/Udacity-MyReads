import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BooksShelf from './BooksShelf';


const BooksList = ({ books, changeShelf }) => {
    const shelfs = [
        { name: 'currentlyReading', label: 'Currently Reading' },
        { name: 'wantToRead', label: 'Want to Read' },
        { name: 'read', label: "Read"}
    ];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfs.map(shelf => (
                        <BooksShelf key={shelf.name} name={shelf.name} label={shelf.label} changeShelf={changeShelf} books={books} />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
};

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired 
};

export default BooksList;