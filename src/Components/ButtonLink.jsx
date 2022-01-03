import React, { Fragment } from 'react';
import "../assets/scss/components/link.scss";

const ButtonLink = (props) => {
    return(
        <Fragment>
            <a className="button-link text-center" href={props.href}>{props.children}</a>
        </Fragment>
    )
}

export default ButtonLink;