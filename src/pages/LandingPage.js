import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import BenefitsMogno from "../components/landing-page/BenefitsMogno";
import InformationsMogno from "../components/landing-page/InformationsMogno";
import MognoApresentation from "../components/landing-page/MognoApresentation";


const LandingPage = () => {

    return (
        <div>
            <Header />
            <MognoApresentation />
            <InformationsMogno />
            <BenefitsMogno />
            <Footer />
        </div>
    )
}

export default LandingPage;