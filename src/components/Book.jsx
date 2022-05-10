import React, { useState } from 'react';

function Book(props) {
    return (
        <div className="book_card">
            <div className="book_info">
                <h3>{props.book.name}</h3>
                <p className="price">Цена: {props.book.price}</p>
            </div>
            <button onClick={() => props.onClickButtonFunc(props.book)} className="buy_btn">Купить</button>
        </div>
    )
}

export default Book