import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test("Check if Booking Form loads", () => {
    const availableTimes = ["12:00"];
    const dispatcher = jest.fn();
    render(<BookingForm availableTimes={availableTimes} dispatcher={dispatcher}/>);

    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
})
