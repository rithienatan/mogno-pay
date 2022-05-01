
import "../landing-page/style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom"

const MognoApresentation = () => {
    return (
        <div className="apresentation" id="initial">
            <div id="gifMogno" >
                <>
                    <h1>MoGno</h1>
                    <p>Juntos somos mais fortes</p>
                </>

            </div>
            <div id="getCpf">
                <h1>Peça o seu cartão da Mogno Pay</h1>
                <div id="createAccount">
                    <TextField variant="outlined" label="CPF" size="mediun" fullWidth />
                    <Link to="/up" style={{ textDecoration: 'none'}}  id="style-button">
                        <Button  variant="contained" fullWidth size="large" id='green-button-signIn'>
                            Criar Conta
                        </Button>
                    </Link>
                 
                </div>

            </div>
        </div>

    )
}

export default MognoApresentation;