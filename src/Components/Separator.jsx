import React from 'react';
import "../assets/scss/components/separator.scss";

const Separator = (props) => {
    return (
        <div className="separator">
            <div className="separator__top"></div>
            <div className="separator__bottom"></div>
            <div className="separator__text">{props.children}</div>
        </div>
    )
}

export default Separator;