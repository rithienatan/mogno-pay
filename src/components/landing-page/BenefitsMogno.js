import "../landing-page/style.css" 
import imageCo2 from "../../assets/image-CO2.png"


const BenefitsMogno = () => {
    return(
        <div className="benefits" id="beneficts">
            <div id="text-information">
                <h1>Segunda Verde</h1>
                <p>
                O cashback gerado em combas do dia a dia, convertido em ações que reduzem a emissão do principal gás responsável pelo efeito estufa.</p> <p>Acesse o impacto positivo gerado com poucos cliques em sua fatura de cartão de crédito. 
                </p>
                <p id="text-green">Acompanhe nossas ações</p>
            </div>
            <div id="image">
                <img src={imageCo2}/>
            </div>
        </div>

    )
}

export default BenefitsMogno;