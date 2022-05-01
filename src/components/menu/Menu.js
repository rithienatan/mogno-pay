import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./style.css";
import logo from "../../assets/logo.png"
import menuImage from "../../assets/enter-button.png"

const Menu = () => {

    return (
        <div className="menu">
            <img src={logo} id="logo" />
            <ul>
                <li>
                    <Link to={'/receipt'}>
                        Fatura
                    </Link>
                </li>
                <li>
                    <Link to={'/cashback'}>
                        Cashback
                    </Link>
                </li>
                <li>
                    <Link to={'/store'}>
                        Lojas Parceiras
                    </Link>
                </li>
            </ul>
            <img src={menuImage} />

        </div >
    )
}

export default Menu;