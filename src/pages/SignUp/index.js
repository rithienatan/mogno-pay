import { useState } from 'react';
import { Grid, TextField, Typography, Button, Checkbox, ListItem, Modal, Box } from '@mui/material';
import { Link } from "react-router-dom";
import checkCircle from '../../assets/check-circle.svg';
import undoButton from '../../assets/undo-small.svg';
import closeButton from '../../assets/close-button.svg';
import mognoWallpaper from '../../assets/Rectangle 43.png';
import '../SignUp/style.css';

function SignUp() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img
            className='sideImage'
            src={mognoWallpaper}
            style={{ objectFit: "cover" }}
            alt="Mogno Wallpaper" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 50 }}
        >
          <Link to="/" className='undoButton'>
            <img src={undoButton} width={20} alt="Checked" />
            <Typography component="span">
              Voltar
            </Typography>
          </Link>
          <div />
          <div className='signUp-container'>
            <Typography className='signUp-title'>
              Crie sua conta
            </Typography>
            <TextField id="cpf" label="CPF" variant="outlined" />
            <TextField id="fullName" label="Nome Completo" variant="outlined" />
            <TextField id="birthDate" label="Data de Nascimento" variant="outlined" />
            <TextField id="email" label="E-mail" variant="outlined" />
            <TextField id="emailConfirm" label="Confirmação de e-mail" variant="outlined" />
            <ListItem alignItems="center">
              <Checkbox
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Typography variant="p">
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta <span className='checkbox-span'>Política de Privacidade</span>.
              </Typography>
            </ListItem>
            <Button className='green-button' onClick={handleOpenModal} variant="contained">
              Enviar Dados
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className='modalStyle'>
          <img className='closeModal' onClick={handleCloseModal} src={closeButton} width={40} alt="Checked" />
          <div className='modal-content'>
            <img src={checkCircle} width={69} alt="Shipping Confirmation" />
            <Typography id="modal-title" component="h2" sx={{ mt: 5 }}>
              Informações Enviadas!
            </Typography>
            <Typography id="modal-description" sx={{ mt: 1 }}>
              Seu pedido será analisado e, se tudo estiver certo, uma resposta vai ser enviada para o seu e-mail.
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button className="green-button" sx={{ mt: 5 }} onClick={handleCloseModal} variant="contained">
                Voltar Para Home
              </Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default SignUp;