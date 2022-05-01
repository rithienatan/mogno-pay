import flowerImage from "../../assets/Flor-png.png"
import "../landing-page/style.css"

const InformationsMogno = () => {
    return(
        <div className="information" id="about">
            <div id="text-information">
                <h1>Conheça a MoGno</h1>
                <p>Surgimos com a missão de fazer diferente. Buscando soluções práticas, sustentáveis e efientes para combater as mudanças climáticas.</p>
                  <p>  Uma das nossas inspirações, a árvore de madeira nobre, Mogno, nativa da Amazõnia que está ameaçada em extinção.</p>
            </div>
            <div id="image">
                <img  src={flowerImage}/>
            </div>
        </div>

    )
}

export default InformationsMogno;