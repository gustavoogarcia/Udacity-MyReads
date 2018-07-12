import React from 'react';
import BookItem from './BookItem';
import If from './helpers/If'

const BookShelf = props => {
    const { name, label, changeShelf, books } = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{label}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <If key={book.title} test={book.shelf === name}>
                            <BookItem changeShelf={changeShelf} book={book} />
                        </If>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf