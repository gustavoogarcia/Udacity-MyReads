import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import If from '../helpers/If'
import BookItem from './BookItem';

const BooksSearch = ({ query, updateQuery, clearQuery, changeShelf, searchedBooks, books }) => {
    
    let showSearchedBooks = ()=>{}
    
    if (searchedBooks instanceof Array) {
        for (let searchedBook of searchedBooks) {
            for (let book of books) {
                if (book.id === searchedBook.id) {
                    searchedBook.shelf = book.shelf
                };
            };
        };

        showSearchedBooks = () => {
            return (
                searchedBooks.map((book) => (
                    <BookItem key={book.id} changeShelf={changeShelf} book={book} />
                ))
            )
        }
    } 

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => updateQuery(e.target.value)}/>
                </div>
            </div>
            <If test={searchedBooks.length > 0}>
                <div className="search-info">
                    <div>Now showing {searchedBooks.length} Books on your search!</div>
                    <button onClick={clearQuery}>Clear search</button>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { showSearchedBooks() }
                    </ol>
                </div>
            </If>
        </div>
    );
};

BooksSearch.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array,
};

export default BooksSearch;