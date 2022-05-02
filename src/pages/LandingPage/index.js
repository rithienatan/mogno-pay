import SignIn from '../../components/modal-signIn';
import { useState } from 'react';
import { Carousel } from '../../components/landing-page/Carousel.js';


function LandingPage() {
  const [openModalSignIn, setOpenModalSignIn] = useState(true);
  const handleOpenModalSignIn = () => setOpenModalSignIn(true);
  const handleCloseModalSignIn = () => setOpenModalSignIn(false);

  return (
    <div>
      <button onClick={handleOpenModalSignIn}>Teste</button>
      <SignIn
        openModalSignIn={openModalSignIn}
        handleCloseModal={handleCloseModalSignIn}
      />
    </div>
  )
}

export default LandingPage;