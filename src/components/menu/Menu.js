import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, Switch } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import notButton from '../../assets/notification-button.svg';
import "./style.css";

const Menu = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(!openModal);
    // const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <div className="menu">
                <div id="list-menu">
                    {/* <img src={logo} id="logo" /> */}
                    <span id="logo">MoGno</span>
                    <ul>
                        <li>
                            <Link to={'/receipt'} id="link">
                                Fatura
                            </Link>
                        </li>
                        <li>
                            <Link to={'/cashback'} id="link">
                                Cashback
                            </Link>
                        </li>
                        <li>
                            <Link to={'/store'} id="link">
                                Lojas Parceiras
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="menu-icon" onClick={handleOpenModal}>
                    <MenuRoundedIcon />
                    <h3>menu</h3>
                </div>
            </div >
            {openModal &&
                <div className="sidebar">
                    <Link to={'/data'} style={{ textDecoration: 'none', width: '100%' }}>
                        <span className="myData" onClick={handleOpenModal}>meus dados</span>
                    </Link>
                    <hr />
                    <div className="notification">
                        <span className="myData">notificações</span>
                        <Switch />
                    </div>
                    <hr />
                    <div className="lastBuy">
                        <span className="lastBuy-1">última compra</span>
                        <span className="lastBuy-2">22 ABR</span>
                        <span className="lastBuy-3">R$ 26,55</span>
                    </div>
                    <hr />
                    <span className="exit">sair</span>
                    <hr />
                    <Button id='green-button-sidebar' fullWidth variant="contained">
                        Bloquear Cartão
                    </Button>
                </div>
            }
        </>
    )
}

export default Menu;