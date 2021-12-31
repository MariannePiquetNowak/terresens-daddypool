import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';
import Button from "../Components/Button";
import '../assets/scss/components/form.scss';



const FormContact = (props) => {

    return (
        <form className="form">
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control type="text" placeholder="Normal text" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Small text" />
            <Button type="submit" onClick={props.close}>Fermer</Button>
        </form>
    )
}

export default FormContact;