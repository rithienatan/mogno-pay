import "../landing-page/style.css" 
import imageTree from "../../assets/Rectangle 43.png"


const BenefitsMogno = () => {
    return(
        <div className="benefits">
            <div id="text-information">
                <h1>título lorem ipsum</h1>
                <p>lLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue justo, venenatis sit amet rhoncus id, finibus efficitur arcu. Ut ut turpis orci. Aliquam aliquam turpis vel ante consectetur, sed hendrerit sem aliquam. Quisque sollicitudin porttitor magna. </p>
            </div>
            <div id="image">
                <img src={imageTree}/>
            </div>
        </div>

    )
}

export default BenefitsMogno;