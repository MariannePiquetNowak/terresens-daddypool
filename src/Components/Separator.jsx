import React from 'react';
import "../assets/scss/components/separator.scss";

const Separator = (props) => {
    return (
        <div className="Separator">
            <div className="Separator__top"></div>
            <div className="Separator__bottom"></div>
            <div className="Separator__text">{props.children}</div>
        </div>
    )
}

export default Separator;