import Menu from '../Menu';
import { Button } from '@mui/material';
import Table from '../../table/Table';
import "./style.css";

const Receipt = () => {
    return (
        <div className="receipt">
            <Menu />
            <div className='receipt-container'>
                <div className='receipt-months'>
                    <div className='month'>
                        <span>dez/22</span>
                        <span>R$ 65,88</span>
                    </div>
                    <div className='month'>
                        <span>dez/22</span>
                        <span>R$ 65,88</span>
                    </div>
                    <div className='month'>
                        <span>dez/22</span>
                        <span>R$ 65,88</span>
                    </div>
                    <div className='month'>
                        <span>dez/22</span>
                        <span>R$ 65,88</span>
                    </div>
                    <div className='month moonth-green'>
                        <span>dez/22</span>
                        <span>R$ 65,88</span>
                    </div>
                </div>
                <hr />
                <div className="receipt-content">
                    <div className="receipt-left">
                        <span className='receipt-content-title'>Fatura ABR 22</span>
                        <article id="frame">
                            <h1>R$ 650,88</h1>
                            <span>vencimento 04 MAI</span>
                            <p>fechamento em 28 ABR</p>
                        </article>
                        <div className="spending-month">
                            <span>Gastos do Mês</span>
                            <span>R$ 650,88</span>
                        </div>
                        <hr className='left-hr' />
                        <Button id='green-button-sidebar' fullWidth variant="contained">
                            Gerar Boleto
                        </Button>
                    </div>
                    <div className='right'>
                        <div className='right-title'>
                            <span>De 27 MAR até 28 ABR</span>
                            <span>Valor em R$</span>
                        </div>
                        <Table />
                        <div className="total">
                            <span className='total-title'>Total</span>
                            <span className='total-value'>65,98</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Receipt;