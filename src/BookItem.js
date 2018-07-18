import React from 'react';
import PropTypes from 'prop-types'

const BookItem = ({ book, changeShelf }) => {
    const { title, authors, imageLinks, shelf } = book
    const style = {
        width: 128,
        height: 193,
        backgroundImage: `url("${imageLinks ? imageLinks.smallThumbnail : ""}")`,
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={ style }></div>
                    <div className="book-shelf-changer">
                        <select value={ shelf ? shelf : "none" } onChange={ (e) => changeShelf(e, book) }>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors }</div>
            </div>
        </li>
    )
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired 
}

export default BookItem