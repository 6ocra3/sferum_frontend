import React from 'react'
import Book from './Book'
import "../static/css/book.css";
function BooksList(props) {
    return (
        <div className="books_list">
            {
                props.books.map((book) => {
                    if (book.amount > 0) {
                        return (<Book key={book.id} book={book} onClickButtonFunc={props.onClickButtonFunc} />)
                    }
                }
                )
            }
        </div>
    )
}

export default BooksList