import Menu from '../Menu';
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
                </div>
            </div>
        </div>
    )
}

export default Receipt;