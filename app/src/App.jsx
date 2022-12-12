import './style/main.scss';
import { BrowserRouter } from 'react-router-dom';
import PrimaryRouter from './app/router/PrimaryRouter';

function App() {
  return (
    <BrowserRouter>
      <PrimaryRouter />
    </BrowserRouter>
  );
}

export default App;