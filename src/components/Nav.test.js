import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import { initializeTimes, updateTimes, defaultAvailableTimes } from './Nav';

test("Test initializeTimes reducer function", () => {
    const availableTimes = initializeTimes();
    expect(availableTimes.length > 0);
})

test("Test updateTimes reducer function", () => {
    const prevAvailableTimes = [];
    const date = "2024-08-22";
    const availableTimes = updateTimes(prevAvailableTimes, date);
    expect(availableTimes.length > 0);
})
