import React from 'react'
import Book from './Book'
import "../static/css/book.css";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
function BooksList(props) {
    return (
        <div className="available_books">
            <h1 className="list_title" >Доступные книги</h1>
            <div className='book_list'>
                <TransitionGroup>
                    {
                        props.books.map((book) => {
                            if (book.amount > 0) {
                                return (
                                    <CSSTransition
                                        key={book.id}
                                        timeout={500}
                                        classNames="book">
                                        <Book book={book} onClickButtonFunc={props.onClickButtonFunc} />
                                    </CSSTransition>)
                            }
                        }
                        )
                    }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default BooksList