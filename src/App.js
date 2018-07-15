import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch';
import BooksList from './BooksList';

class BooksApp extends React.Component {
	state = {
		books: [],
		searchedBooks: [],
		query: ""
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	changeShelf = (e, book) => {
		let shelf = e.target.value
		let { books } = this.state
		books = books.filter (b => b.title !== book.title).concat({
			...book,
			shelf: shelf
		})
		this.setState({ books })
		BooksAPI.update(book, e.target.value)
		
	}

	updateQuery = (newQuery) => {
		this.setState({ query: newQuery })
		BooksAPI.search(newQuery).then((searchedBooks) => {
			this.setState({ searchedBooks })
		})
	}

	clearQuery = () => {
		this.setState({ query: '' })
	}


	render() {
		const { state, changeShelf, clearQuery, updateQuery } = this
		const { books, searchedBooks, query } = state
		return (
			<div className="app">
				<Route path="/" exact render={() => (
					<BooksList changeShelf={changeShelf} books={books}/>
				)} />
				<Route path="/search" render={() => (
					<BooksSearch query={query} updateQuery={updateQuery} clearQuery={clearQuery} changeShelf={changeShelf} searchedBooks={searchedBooks}/>
				)} />
			</div>
		)
	}
}
export default BooksApp