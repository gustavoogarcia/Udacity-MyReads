import React from 'react';
import BookItem from './BookItem';

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookItem />
                        <BookItem />
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf