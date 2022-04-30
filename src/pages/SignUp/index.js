import { useState } from 'react';
import { Grid, TextField, Typography, Button, Link, Checkbox, ListItem, Modal, Box } from '@mui/material';
import checkCircle from '../../assets/check-circle.svg';
import undoButton from '../../assets/undo-small.svg';
import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  textAlign: 'center',
  boxShadow: 24,
  p: 4,
};

function SignUp() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.pexels.com/photos/4870468/pexels-photo-4870468.jpeg?cs=srgb&dl=pexels-clement-percheron-4870468.jpg&fm=jpg"
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            alt="Login Image" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div style={{ display: 'flex', flexDirection: "column", width: 620, gap: 30 }}>
            <Typography variant="h4" component="div">
              Cadastre-se
            </Typography>
            <TextField id="outlined-basic" label="CPF" variant="outlined" />
            <TextField id="outlined-basic" label="Nome Completo" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Confirmação de e-mail" variant="outlined" />
            <ListItem alignItems="center">
              <Checkbox
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Typography variant="p">
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta Política de Privacidade.
              </Typography>
            </ListItem>
            <Button onClick={handleOpenModal} color="primary" variant="contained" href="#">
              Enviar
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Link color="black" href="#" underline="none" onClick={handleCloseModal} style={{ width: 100, display: 'flex', alignItems: "center", gap: 5 }}>
            <img src={undoButton} width={20} alt="Checked" />
            <Typography component="span">
              Voltar
            </Typography>
          </Link>
          <div>
            <img src={checkCircle} width={150} alt="Shipping Confirmation" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Informações Enviadas!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Seu pedido será analisado e, se tudo estiver certo, uma resposta vai ser enviada para o seu e-mail cadastrado.
            </Typography>
            <Button style={{ marginTop: 20 }} onClick={handleCloseModal} color="primary" variant="contained" href="#">
              Ir Para Login
            </Button>
          </div>
        </Box>
      </Modal>
    </div >
  )
}

export default SignUp;