import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from "@mui/system";
import stylesMui from '../src/constants/stylesMui';


function App() {
  return (
    <div>
      <ThemeProvider theme={stylesMui}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;