import React from 'react'
import "../static/css/aside.css";
function AsideInfo(props) {
    return (
        <div className="aside_info">
            <h1 className="title" style={{ marginBottom: "10px" }}>Личный кабинет</h1>
            <div className="user_info">
                {props.errorMsg !== ""
                    ? <p style={{ color: "red" }}>{props.errorMsg}</p>
                    : <div></div>
                }
                <p style={{ marginTop: "0" }}>Ваш баланс: {props.balance}</p>
                {props.cart.length !== 0
                    ? <div>
                        <p>Количество книг: {props.count}</p>
                        <p>Итоговая стоимость: {props.price}</p>
                        {/* {props.cart.map((book) =>
                            <p key={book.id}>{book.name} ---- {book.buyCnt}</p>)} */}
                    </div>
                    : <p>Вы ничего не купили</p>
                }
            </div>
        </div>
    )
}

export default AsideInfo