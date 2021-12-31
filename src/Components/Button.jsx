import React from 'react';
import '../assets/scss/components/button.scss';

const Button = (props) => {
    return (
        <button className="button" type={props.type} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;