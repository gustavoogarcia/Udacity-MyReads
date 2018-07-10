import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const BookItem = props => {
    const { title, author, style } = props

    return (
        <li key={title}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={style}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        </li>
    )
}

export default BookItem