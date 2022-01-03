import React from 'react';
import { Form } from 'react-bootstrap';
import Button from "../Components/Button";
import '../assets/scss/components/form.scss';



const FormContact = (props) => {

    return (
        <div className="form-container container-fluid">
            <form className={props.className}>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
                <Button type="submit" onClick={props.close}>Soumettre</Button>
            </form>
        </div>
    )
}

export default FormContact;