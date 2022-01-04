import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from "../Components/Button";
import '../assets/scss/components/form.scss';
import 'animate.css';




const FormContact = (props) => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeMail = e => {
        setEmail(e.target.value);
    }

    const handleChangePhone = e => {
        setPhone(e.target.value);
    }


    return (
        <div className="form-container container-fluid animate__animated animate__fadeInDownBig">
            {/* <form className={props.className}> */}
            {/* <Form.Control size="lg" type="text" onChange={props.change} placeholder="Large text" />
                <br />
                <Form.Control type="text" onChange={props.change} placeholder="Normal text" />
                <br />
                <Form.Control size="sm" onChange={props.change} type="text" placeholder="Small text" />
                <Button type="submit" onSubmit={props.onSubmit}>Soumettre</Button> */}
            {/* </form> */}
            <form
                action='https://forms.zohopublic.com/terresens/form/Test/formperma/wOR9rkk3tE9Wy1SQW4TmprO4B49mcEHnaC-l38DQUVE/htmlRecords/submit'
                name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />
                <h2>Formulaire</h2>
                <p></p>

                <label>Prénom</label>
                <input type="text" maxlength="255" name="Name_First" fieldType="7" />

                <label>Nom de famille</label>
                <input type="text" maxlength="255" name="Name_Last" fieldType="7" />

                <label for="exampleForm.ControlInput1">E-mail</label>
                <input
                    id="exampleForm.ControlInput1"
                    placeholder="smith@example.com"
                    type="email"
                    maxlength="255"
                    name="Email"
                    value={email}
                    fieldType="9 "
                    onChange={handleChangeMail}
                />

                <label>Numéro de téléphone</label>
                <input
                    type="text"
                    compname="PhoneNumber"
                    name="PhoneNumber_countrycode"
                    phoneFormat="1"
                    sCountryCodeEnabled="false"
                    maxlength="20"
                    value={phone}
                    fieldType="11"
                    id="international_PhoneNumber_countrycode"
                    onChange={handleChangePhone}
                />
                <Button type="submit" className="submit"><em>Soumettre</em></Button>
            </form>
            <Button type="button" onClick={props.close} className="show">Fermer</Button>
        </div>
    )
}

export default FormContact;