import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	changeShelf = (e, book) => {
		let shelf = e.target.value
		let { books } = this.state;
		books = books.filter (b => b.title !== book.title).concat({
			...book,
			shelf: shelf
		});
		this.setState({ books });
		BooksAPI.update(book, shelf)
		
	}

	render() {
		const { books } = this.state
		const { changeShelf } = this
		return (
			<div className="app">
				<Route path="/" exact render={() => (
					<ListBooks changeShelf={changeShelf} books={books}/>
				)} />
				<Route path="/search" render={() => (
					<SearchBooks/>
				)} />
			</div>
		)
	}
}
export default BooksApp