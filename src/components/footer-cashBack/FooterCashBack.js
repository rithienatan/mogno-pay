import "./style.css"
import carbon from '../../assets/Carbon.png';
import moss from '../../assets/Moss.png';

const FooterCashBack = () => {
    return (
        <div className="footerCashBack">
            <div>
                <h1>Como você ajuda a neutralizar as emissões de CO2 com Mogno Pay</h1>
                <ul>
                    <li>Utilize o cartão de crédito, o cashback gerado em sua fatura será acumulado com demais clientes MoGno.
                    </li>
                    <li>Esse valor será convertido em crédito de carbono, projetos que combatem as mudanças climáticas e promovem desenvolvimento sustentável. </li>
                </ul>
                <h1>Empresas parceiras na transação</h1>
                <div className="images-div">
                    <img src={carbon} alt="Corbon" />
                    <img src={moss} alt="Moss" />
                </div>
            </div>
        </div>
    )
}

export default FooterCashBack;