import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';


class ListBooks extends React.Component {
    render() {
        const shelfs = [
            { name: 'currentlyReading', label: 'Currently Reading' },
            { name: 'wantToRead', label: 'Want to Read' },
            { name: 'read', label: "Read"},
        ]

        const { changeShelf, books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfs.map(shelf => (
                            <BookShelf key={shelf.name} name={shelf.name} label={shelf.label} changeShelf={changeShelf} books={books} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
};

export default ListBooks