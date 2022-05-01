import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png"
import menuImage from "../../assets/enter-button.png"

const Menu = () => {
    return(
        <div className="menu">
                <img src={logo} id="logo"/>
                <ul>
                    <li>
                        <button>fatura</button>
                    </li>
                    <li>
                        <button>cashback</button>
                    </li>
                    <li>
                        <button>lojas parceiras</button>
                    </li>
                </ul>
                <img src={menuImage}/>

        </div>
    )
}

export default Menu;