import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";
import logo from "../../assets/logo.png"
import menuImage from "../../assets/enter-button.png"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Menu = () => {

    return (
        <div className="menu">
            <div id="list-menu">
            <img src={logo} id="logo" />
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
            <div id="menu-icon">
                <MenuRoundedIcon/>
                <h3>menu</h3>
            </div>
           
            
        </div >
    )
}

export default Menu;