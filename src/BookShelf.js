import React from 'react';
import BookItem from './BookItem';

const BookShelf = props => {
    const { name, books } = props
    return (
        <div key={name} className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        const { title, author, shelf, style } = book
                        if (shelf === name) {
                            return (
                                <BookItem title={title} author={author} shelf={shelf} style={style} />
                            )
                        } else {
                            return (
                                <div key={name}>Nenhum livro na prateleira</div>
                            )
                        }
                    })}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf