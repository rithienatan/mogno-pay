import FooterCashBack from '../../footer-cashBack/FooterCashBack';
import Table from '../../table/Table';
import Menu from '../Menu';
import "./style.css"

const Cashback = () => {
    return (
        <div className="cash">
            <Menu />
            <div className="page-cash">
                <h3 id="text-relatorio">Relatório Segunda Verde</h3>
                <div className="contribution">
                    <article id="frame-one">
                        <p>Sua contribuição foi de</p>
                        <h1>R$ 16,88</h1>
                        <p>Nos últimos 7 dias</p>
                    </article>
                    <article id="frame-two">
                        <p>Juntos somos mais fortes.</p>
                        <h1>9 toneladas</h1>
                        <p>de emissões de CO2 neutralizadas com a sua ajuda</p>
                    </article>
                </div>
                <div id="details">
                    <h3 id="text-table">Detalhamento do cashback</h3>
                    <div>
                        <Table/>
                    </div>
                 
                </div> 
                <FooterCashBack/>

            </div>           
        </div>

    )
}

export default Cashback;