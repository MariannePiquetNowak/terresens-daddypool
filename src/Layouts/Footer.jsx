import React from 'react';
import { useModal } from 'react-hooks-use-modal';
import Form from "../Components/Form";
import "../assets/scss/layouts/footer.scss";
import logo from "../assets/img/Logo-HR-Bleu.svg"

import Button from '../Components/Button';



const Footer = () => {

    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: false,
        closeOnOverlayClick: true,
    });

    return (
        <footer className="Footer" id="contact">
            <div className="footer-container container-md">
                <h3>Réservez vite votre Daddy Pool</h3>
                <p>Le premier LMNP récupérable en résidence secondaire</p>
                <Button type="button" onClick={open} className="button">Prenez contact</Button>
                <Modal>
                    <Form className="form" type="submit" close={close} />
                </Modal>
            </div>
            <span className="brand-footer">Powered by <img src={logo} alt="terrésens-logo" /> Terrésens</span>
        </footer>
    )
}

export default Footer;