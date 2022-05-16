import React, { useState } from 'react';
import agenda from "../static/img/agenda.png";
function Book(props) {
    return (
        <div className={props.show ? "book_card show" : "book_card"}>
            <div className="book_header">
                <img className="book_img" src={agenda} />
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