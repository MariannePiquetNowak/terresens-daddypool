import React from 'react';
import '../assets/scss/components/button.scss';

const Button = (props) => {
    return (
        <button className={props.className} type={props.type} onClick={props.onClick} onSubmit={props.onSubmit}>{props.children}</button>
    )
}

export default Button;