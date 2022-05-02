import { Grid, TextField, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import undoButton from '../../assets/undo-small.svg';

function SignIn() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        
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
          <Link to="/" style={{ width: 100, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', color: '#000000' }}>
            <img src={undoButton} width={20} alt="Checked" />
            <Typography component="span">
              Voltar
            </Typography>
          </Link>
          <div style={{ display: 'flex', flexDirection: "column", width: 620, gap: 30 }}>
            <Typography variant="h4" component="div">
              Faça o login da sua conta
            </Typography>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
            <Button color="primary" variant="contained" href="#contained-buttons">
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
        </Grid >
      </Grid >
    </div >
  )
}

export default SignIn;