import "../header/style.css"
import logo from "../../assets/Rectangle 43.png"

const Header = () => {
    return(
        <div className="header">
            <img src={logo}/>
            <button>LOGIN</button>

        </div>
    )
}

export default Header;