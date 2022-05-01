import "../header/style.css"
import logo from "../../assets/Rectangle 43.png"
import enterButtom from "../../assets/enter-button.png"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            {/* <img src={logo}/> */}
            <p>LOGO</p>
           <Link to="in">
                <img id="enter-buttom" src={enterButtom}/>   
           </Link>
        </div>
    )
}

export default Header;