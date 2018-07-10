import React from 'react';
import BookShelf from './BookShelf';

class ListBooks extends React.Component {
    render() {
        const shelfs = [
            { name: 'Currently Reading' },
            { name: 'Want to Read' },
            { name: 'Read' },
        ]

        const { books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfs.map(shelf => (
                            <BookShelf name={shelf.name} books={books} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
};

export default ListBooks