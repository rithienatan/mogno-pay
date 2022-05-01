import { useState } from 'react';
import { Link } from "react-router-dom";
import enterButtom from "../../assets/enter-button.png";
import SignIn from '../modal-signIn';
import "../header/style.css";

const Header = () => {
    const [openModalSignIn, setOpenModalSignIn] = useState(false);
    const handleOpenModalSignIn = () => setOpenModalSignIn(true);
    const handleCloseModalSignIn = () => setOpenModalSignIn(false);

    return (
        <div className="header">
            {/* <img src={logo}/> */}
            <p>LOGO</p>
            <img id="enter-buttom" onClick={handleOpenModalSignIn} src={enterButtom} />
            <SignIn
                openModalSignIn={openModalSignIn}
                handleCloseModal={handleCloseModalSignIn}
            />
        </div>
    )
}

export default Header;