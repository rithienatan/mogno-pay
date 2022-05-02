import Menu from '../Menu';
import "./style.css"
import natura from "../../../assets/natura.png"
import samia from "../../../assets/by samia.png"
import muzz from "../../../assets/muzzicycle.png"
import insect from "../../../assets/insecta.png"
import mulher from "../../../assets/mulher.png"
import georganics from "../../../assets/georganics.png"
import Button from '@mui/material/Button';


const Store = () => {
    return (
        <div>
            <Menu />
            <div className="grid-image">
                <h2>Novas parcerias</h2>
                <div className="cardContainer">
                    <div>
                         <img src={natura}/>
                        <div id="button-container">
                            <h3>Natura</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div>
                    </div>
                    <div>
                         <img src={samia}/>
                        <div id="button-container">
                            <h3>By Samia</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div>
                    </div>
                    <div>
                        <img src={muzz}/>
                         <div id="button-container">
                            <h3>Muzzicycle</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div>
                    </div>
                    <div>
                        <img src={insect}/>
                         <div id="button-container">
                            <h3>Insecta Shoes</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div>
                    </div>
                    <div>
                        <img src={mulher}/>
                        <div id="button-container">
                            <h3>Mulher de Saturno</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div> 
                    </div>
                    <div>
                        <img src={georganics}/>
                        <div id="button-container">
                            <h3>Georganics</h3>
                            <Button id='green-button-sidebar' variant="outlined">ver ofertas</Button>
                        </div>
                    </div>               
                </div>
            
            </div>
        </div>

    )
}

export default Store;