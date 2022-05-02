import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import BenefitsMogno from "../components/landing-page/BenefitsMogno";
import InformationsMogno from "../components/landing-page/InformationsMogno"
import MognoApresentation from "../components/landing-page/MognoApresentation"
import { Carousel } from "../components/landing-page/Carousel.js";



const LandingPage = () => {
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
        //mudar imagens

        const callback = function(index){
            console.log("callback",index);
        }
    return (
        <div>
            <Header />
            <MognoApresentation />
            <InformationsMogno />
            <Carousel slides={slides} autoplay={true} interval={1000} onSlideChange={callback}/>
            <BenefitsMogno />
            <Footer />

        </div>
    )
}

export default LandingPage;