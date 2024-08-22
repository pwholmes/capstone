import { Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Homepage from './Homepage';
import BookingPage from '../components/BookingPage';

function Nav() {
    return (
        <>
            <nav id="navbar" className="navbar">
                <img src={logo} width="256" alt="Little Lemon logo" />
                <Link to="/" className="nav-item">Home</Link>
                <a href="#navbar">About</a>
                <a href="#navbar">Menu</a>
                <Link to="/booking" className="nav-item">Reservations</Link>
                <a href="#navbar">Order Online</a>
                <a href="#navbar">Login</a>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage/>} />
            </Routes>
        </>
    );
}

export default Nav;
