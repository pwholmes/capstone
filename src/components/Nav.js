import { Routes, Route, Link } from 'react-router-dom';
import { useReducer } from 'react';
import logo from '../assets/Logo.svg';
import Homepage from './Homepage';
import BookingPage from '../components/BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};


const defaultAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", ];

const updateTimes = (prevAvailableTimes, date) => {
    return fetchAPI(new Date(date));
}

const initializeTimes = (initialTimes) => {
    const today = new Date();
    return fetchAPI(today);
}

const submitForm = (formData) => {
    return submitAPI(formData);
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
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatcher={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </>
    );
}

export default Nav;
export { initializeTimes, updateTimes, defaultAvailableTimes, submitForm };