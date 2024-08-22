import { Routes, Route, Link } from 'react-router-dom';
import { useReducer } from 'react';
import logo from '../assets/Logo.svg';
import Homepage from './Homepage';
import BookingPage from '../components/BookingPage';

const defaultAvailableTimes = ["11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00"];

const updateTimes = (prevAvailableTimes, date) => {
    // To test the reducer functionality: if the user selects the first day of the month in the date picker on the Bookings Form,
    // return only 12 noon as the available time.  Otherwise return the default times.
    let x = new Date(date).getUTCDate();
    if (x===1)
        return ["12:00"];
    else
        return defaultAvailableTimes;
}

const initializeTimes = (initialTimes) => {
    return defaultAvailableTimes;
}

function Nav() {
    const [availableTimes, dispatch] = useReducer(updateTimes, 0, initializeTimes);

    return (
        <>
            <nav id="navbar" className="navbar">
                <img src={logo} alt="Little Lemon logo" />
                <Link to="/" className="nav-item">Home</Link>
                <a href="#navbar">About</a>
                <a href="#navbar">Menu</a>
                <Link to="/booking" className="nav-item">Reservations</Link>
                <a href="#navbar">Order Online</a>
                <a href="#navbar">Login</a>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatcher={dispatch}/>} />
            </Routes>
        </>
    );
}

export default Nav;
export { initializeTimes, updateTimes, defaultAvailableTimes };