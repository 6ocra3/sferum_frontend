import React from 'react'
import Book from './Book'
import "../static/css/book.css";

function BooksList(props) {
    return (
        <div className="available_books">
            <h1 className="list_title" >Доступные книги</h1>
            <div className='book_list'>
                {
                    props.books.map((book) => {
                        return (
                            <Book key={book.id} book={book} onClickButtonFunc={props.onClickButtonFunc} show={book.amount > 0} />)
                    }
                    )
                }
            </div>
        </div>
    )
}

export default BooksList