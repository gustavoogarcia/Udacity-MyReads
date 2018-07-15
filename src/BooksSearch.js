import React from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'
import If from './helpers/If'
import BookItem from './BookItem';

class BooksSearch extends React.Component {
    render() {
        let { query, updateQuery, clearQuery, changeShelf, searchedBooks } = this.props
        
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(e) => updateQuery(e.target.value)}/>
                    </div>
                </div>
                <If test={searchedBooks}>
                    <div className="search-info">
                        <div>Now showing {searchedBooks.length} Books on your search!</div>
                        <button onClick={clearQuery}>Clean search</button>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {searchedBooks.map((book) => (
                                    <BookItem key={book.title} changeShelf={changeShelf} book={book} />
                                )
                            )}
                        </ol>
                    </div>
                </If>
            </div>
    
        )
    }
};

BooksSearch.propTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired,
    searchedBooks: PropTypes.array.isRequired,
}

export default BooksSearch