import { HStack } from '@chakra-ui/react';
import logo from '../assets/Logo.svg';
import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
    return (
        <nav id="navbar" className="navbar">
            <HStack>
                <img  src={logo} width="256" alt="Little Lemon logo" />
                <p><a href="#navbar">Home</a></p>
                <a href="#navbar">About</a>
                <a href="#navbar">Menu</a>
                <a href="#navbar">Reservations</a>
                <a href="#navbar">Order Online</a>
                <a href="#navbar">Login</a>
            </HStack>
        </nav>
    );
}

export default Nav;
