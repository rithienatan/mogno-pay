import Menu from '../Menu';
import Pencil from '../../../assets/pencil.svg';
import EyeClose from '../../../assets/eyeClose.svg';
import MognoCard from '../../../assets/mognoCard.png';
import { Button } from '@mui/material';
import "./style.css";

const MyData = () => {
    return (
        <div className="receipt">
            <Menu />
            <div className="myData-container">
                <div className="left-data">
                    <h1>Dados pessoais</h1>
                    <div className="left-field">
                        <span>E-mail</span>
                        <div className="edit-field">
                            <p>letinunes@email.com</p>
                            <img src={Pencil} alt="Lápis" />
                        </div>
                        <hr />
                    </div>
                    <div className="left-field">
                        <span>Telefone</span>
                        <div className="edit-field">
                            <p>(11) 93877-5924</p>
                            <img src={Pencil} alt="Lápis" />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="right-data">
                    <h1>Dados do Cartão</h1>
                    <img src={MognoCard} id='mognoCard' alt="Mogno Card" />
                    <div className='information-row'>
                        <span>Código de Seguraça</span>
                        <div className='span-img'>
                            <span>***</span>
                            <img src={EyeClose} alt="Pencil" />
                        </div>
                    </div>
                    <hr />
                    <div className='information-row'>
                        <span>Limite</span>
                        <div className='span-img'>
                            <span>R$ 150,00</span>
                            <img src={Pencil} alt="Pencil" />
                        </div>
                    </div>
                    <hr className='right-hr' />
                    <div className='information-row'>
                        <span>Vencimento</span>
                        <div className='span-img'>
                            <span>Dia 05</span>
                            <img src={Pencil} alt="Pencil" />
                        </div>
                    </div>
                    <hr className='right-hr' />
                    <Button id='green-button-myData' fullWidth variant="contained">
                        Bloquear Temporariamente
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyData;