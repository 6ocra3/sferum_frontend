import React from 'react'
import "../static/css/aside.css";
import profile from "../static/img/profile.png"
import cart from "../static/img/cart.png"
import dollar from "../static/img/dollar.png"
import ImgText from './ImgText';
function AsideInfo(props) {
    return (
        <div className="aside_info">
            <h1 className="title profile">Личный кабинет</h1>
            <div className="user_info">
                {props.errorMsg !== ""
                    ? <p className="paragraph error info_message">{props.errorMsg}</p>
                    : <div></div>
                }
                <p className="paragraph info_message balance">Ваш баланс: {props.balance}</p>
                {props.count !== 0
                    ? <div>
                        <ImgText img={cart} text={`Количество книг: ${props.count}`} />
                        <ImgText img={dollar} text={`Итоговая стоимость ${props.price}`} />
                    </div>
                    : <p className="paragraph info_message">Вы ничего не купили</p>
                }
            </div>
        </div>
    )
}

export default AsideInfo