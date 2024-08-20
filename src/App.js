import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'

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
