import "../landing-page/style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const MognoApresentation = () => {
    return(
        <div className="apresentation">
            <div id="gifMogno" >
                <>
                <h1>imagine mogno (gif)</h1>
                <p>lLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </>
                
            </div>
            <div id="getCpf">
                    <h1>lLorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p>CPF</p>
                    <div id="createAccount">
                        <TextField variant="outlined" size="small" fullWidth/>
                        <Button variant="contained" fullWidth>
                            Criar Conta
                        </Button>
                    </div>
                   
            </div>
        </div>

    )
}

export default MognoApresentation;