import React from 'react'
import Book from './Book'
import "../static/css/book.css";
function BooksList(props) {
    return (
        <div className="books_list">
            <h1 className="title" style={{ marginLeft: "10px" }}>Доступные книги</h1>
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