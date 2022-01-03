import React, { useState } from 'react';
import Form from "../Components/Form";
import "../assets/scss/layouts/footer.scss";
import logo from "../assets/img/Logo-HR-Bleu.svg"

import Button from '../Components/Button';


const Footer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openForm = () => {
        setIsOpen(true)
    }


    const closeForm = () => {
        setIsOpen(false)
    }

   
  
    return (
        <footer className="Footer" id="contact">
            <div className="footer-container container-md">
                <h3>Réservez vite votre Daddy Pool</h3>
                <p>Le premier LMNP récupérable en résidence secondaire</p>

                {isOpen ? (
                    <Form className="form" close={closeForm} />

                ) : (
                    <Button type="button" onClick={openForm} className="show">Prenez contact</Button>                    
                )}

            </div>
            <span className="brand-footer">Powered by <img src={logo} alt="terrésens-logo"/> Terrésens</span>
        </footer>
    )
}

export default Footer;