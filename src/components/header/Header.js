import { useState } from 'react';
import { Link } from "react-router-dom";
import enterButtom from "../../assets/enter-button.png";
import SignIn from '../modal-signIn';
import "../header/style.css";
import logo from "../../assets/logo.png"

const Header = () => {
    const [openModalSignIn, setOpenModalSignIn] = useState(false);
    const handleOpenModalSignIn = () => setOpenModalSignIn(true);
    const handleCloseModalSignIn = () => setOpenModalSignIn(false);

    return (
        <div className="header">
            <h1>MoGno.</h1>
            <ul>
                <li>
                    <a href="#initial">Início</a>
                </li>
                <li>
                    <a href="#about">Quem somos</a>
                </li>
                <li>
                    <a href="#beneficts">Benefícios</a>
                </li>
            </ul>
            <img id="enter-buttom" onClick={handleOpenModalSignIn} src={enterButtom} />
            <SignIn
                openModalSignIn={openModalSignIn}
                handleCloseModal={handleCloseModalSignIn}
            />
        </div>
    )
}

export default Header;