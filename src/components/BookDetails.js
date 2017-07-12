import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component {
    render() {
        const { title, pages } = this.props.selectedBook;

        return Object.keys(this.props.selectedBook).length > 0 ? (
            <div>
                <h3>Details for {title}</h3>
                <hr/>
                <ul>
                    <li>Title: {title}</li>
                    <li>Pages: {pages}</li>
                </ul>
            </div>
        ) : (
            <div>
                Selecciona un libro para ver sus detalles
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedBook: state.selectedBook
    };
}

export default connect(mapStateToProps, null)(BookDetails);