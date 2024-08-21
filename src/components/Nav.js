//import { Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Nav() {
    return (
        <nav id="navbar" className="navbar">
            <img src={logo} width="256" alt="Little Lemon logo" />
            <a href="#navbar">Home</a>
            <a href="#about">About</a>
            <a href="#navbar">Menu</a>
            <a href="#reservations">Reservations</a>
            <a href="#navbar">Order Online</a>
            <a href="#navbar">Login</a>
        </nav>
    );
}

export default Nav;
