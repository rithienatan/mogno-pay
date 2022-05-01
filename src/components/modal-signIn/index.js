import { Grid, TextField, Typography, Button, Checkbox, ListItem, Modal, Box } from '@mui/material';
import { Link } from "react-router-dom";
import closeButton from '../../assets/close-button.svg';
import "./style.css";

function ModalLogIn({ openModalSignIn, handleCloseModal }) {
  return (
    <Modal
      open={openModalSignIn}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='modalStyle-signIn'>
        <img className='closeModal-signIn' onClick={handleCloseModal} src={closeButton} width={40} alt="Checked" />
        <div className='modal-content-signIn'>
          <Typography variant="h4" component="div">
            Faça o login da sua conta
          </Typography>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
          <Button
            id='green-button-signIn'
            variant="contained">
            Login
          </Button>
          <div style={{ display: 'flex', flexDirection: "column", gap: 10 }}>
            <Link to="/in" style={{ textDecoration: 'none', color: '#000000' }}>
              Esqueci a minha senha
            </Link>
            <Link to="/up" style={{ textDecoration: 'none', color: '#000000' }}>
              Ainda não sou cliente
            </Link>
          </div>
        </div>
        <div />
      </Box>
    </Modal >
  );
}

export default ModalLogIn;