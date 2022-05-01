import './App.css';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from "@material-ui/core";
import Theme from "../src/constants/stylesMui";


function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;