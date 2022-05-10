import React from 'react'
import "../static/css/aside.css";
import profile from "../static/img/profile.png"
import cart from "../static/img/cart.png"
import dollar from "../static/img/dollar.png"
function AsideInfo(props) {
    return (
        <div className="aside_info">
            <div style={{ display: "flex" }}>
                <h1 className="title" style={{ marginBottom: "10px" }}>Личный кабинет</h1>
                <img src={profile} width="32px" height="32px" style={{ marginTop: "auto", marginBottom: "22px", marginLeft: "5px" }} />
            </div>
            <div className="user_info">
                {props.errorMsg !== ""
                    ? <p style={{ color: "red" }}>{props.errorMsg}</p>
                    : <div></div>
                }
                <p style={{ marginTop: "0" }}>Ваш баланс: {props.balance}</p>
                {props.cart.length !== 0
                    ? <div>
                        <div style={{ display: "flex" }}>
                            <img src={cart} width="25px" height="25px" style={{ marginRight: "5px" }} />
                            <p className="paragraph">Количество книг: {props.count}</p>
                        </div>
                        <div style={{ display: "flex", marginTop: "15px" }}>
                            <img src={dollar} width="25px" height="25px" style={{ marginRight: "5px" }} />
                            <p className="paragraph">Итоговая стоимость: {props.price}</p>
                        </div>
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