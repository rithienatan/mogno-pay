import { Grid, TextField, Typography, Button, Link } from '@mui/material';

function SignIn() {
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
              Faça o login da sua conta
            </Typography>
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" />
            <Button color="primary" variant="contained" href="#contained-buttons">
              Login
            </Button>
            <div style={{ display: 'flex', flexDirection: "column", gap: 10 }}>
              <Link color="black" href="#" underline="none">
                Esqueci a minha senha
              </Link>
              <Link color="black" href="#" underline="none">
                Ainda não sou cliente
              </Link>
            </div>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn;