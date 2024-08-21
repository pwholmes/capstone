import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource-variable/karla';
import '@fontsource-variable/markazi-text';

function App() {
  return (
    <>
    <ChakraProvider>
      <Nav/>
      <Main />
      <Footer />
    </ChakraProvider>
    </>
  );
}

export default App;
