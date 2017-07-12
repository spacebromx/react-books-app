import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions';

class BookList extends React.Component {
    renderBookList() {
        return this.props.books.map(book => {
            return <li key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
        })
    }

    render () {
        return (
            <div>
                <h1>Book List</h1>
                <hr/>
                <ul className="book-list">
                    {this.renderBookList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // This makes books available under this.props.books
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    /*
        This makes selectBook() available under this.props.selectBook()
        selectBook is a reference to the function selectBook implemented in
        the actions file
    */
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);