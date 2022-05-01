// import { createTheme } from "@mui/system";
import { createTheme } from '@material-ui/styles';
import colorMui from './colorMui';

const stylesMui = createTheme({
  palette: {
    primary: {
      main: colorMui,
    }
  }
});

export default stylesMui;