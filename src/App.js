import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [
      { 
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
        shelf: 'Read',
        style: { 
          width: 128, 
          height: 193, 
          backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' 
        }
      }
    ]
  }



  render() {
    const { showSearchPage, books } = this.state
    return (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks />
        ) : (
          <ListBooks books={books}/>
        )}
      </div>
    )
  }
}
export default BooksApp