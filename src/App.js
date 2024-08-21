import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/karla';
import '@fontsource-variable/markazi-text';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
    </BrowserRouter>
  );
}

export default App;
