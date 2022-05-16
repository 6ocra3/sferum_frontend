import React from 'react'
import "../static/css/aside.css";
function ImgText(props) {
    return (
        <div className="img_container">
            <img className="img_size" src={props.img} />
            <p className="paragraph">{props.text}</p>
        </div>
    )
}

export default ImgText