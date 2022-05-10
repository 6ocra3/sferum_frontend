import React, { useState } from 'react';

function Book(props) {
    return (
        <div className="book_card">
            <div className="book_header">
                <h3>{props.book.name}</h3>
            </div>
            <div className="book_footer">
                <p className="price">Цена: {props.book.price}</p>
                <button onClick={() => props.onClickButtonFunc(props.book)} className="buy_btn">Купить</button>
            </div>
        </div>
    )
}

export default Book