import React, { useState } from 'react';
import agenda from "../static/img/agenda.png";
function Book(props) {
    return (
        <div className="book_card">
            <div className="book_header" style={{ display: "flex" }}>
                <img src={agenda} width="26px" height="26px" style={{ marginTop: "auto", marginBottom: "auto", marginRight: "5px" }} />
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