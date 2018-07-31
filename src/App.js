import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './components/BooksSearch';
import BooksList from './components/BooksList';

class App extends React.Component {
	state = {
		books: [],
		searchedBooks: [],
		query: ""
	}

	componentDidMount() {
		return BooksAPI.getAll().then((books) => {
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

	updateQuery = (query) => {
		this.setState({ query })
		query === "" ? this.setState({ searchedBooks: [] }) : 
			BooksAPI.search(query).then((searchedBooks) => {
				this.setState({ searchedBooks })
			})
	}

	clearQuery = () => {
		return this.updateQuery("")
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
					<BooksSearch query={query} updateQuery={updateQuery} clearQuery={clearQuery} changeShelf={changeShelf} books={books} searchedBooks={searchedBooks}/>
				)} />
			</div>
		)
	}
}

export default App