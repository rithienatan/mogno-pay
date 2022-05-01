import { createTheme } from '@material-ui/core/styles';
import {primaryColor} from './colorMui';

const Theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    }
  }
});

export default Theme;