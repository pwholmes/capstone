import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';

test("Check if Booking Form loads", () => {
    const availableTimes = ["12:00"];
    const dispatcher = jest.fn();
    const submitForm = jest.fn();
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitForm={submitForm} />
        </BrowserRouter>
    );

    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
})

// There are three possible ways to enter invalid form data:
// - the date is out of range (before the current date, or more than 2 months in the future)
// - the number of guests is <1 or >10
// - the email address is invalid (it doesn't include a @)
// We have to ensure that if the fields are provided with invalid data, the Confirm button is
// disabled and the submitForm() API is NOT getting called if they try to click it.

test("Check if invalid dates are detected", () => {
    const availableTimes = ["17:00"];
    const dispatcher = jest.fn();
    const submitForm = jest.fn();
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Fill the input fields
    // This time the date field gets an invalid value: yesterday (you can't reserve a table in the past!)
    // Fill other required fields with valid data
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const dateStr = date.toISOString().substring(0, 10);
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: dateStr }});

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "17:00" }});

    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, { target: { value: "2" }});

    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, { target: { value: "Bob" }});

    // Click the Confirm button and verify that the submitForm function is NOT called
    const confirmButton = screen.getByRole("button");
    fireEvent.click(confirmButton);
    expect(submitForm).not.toHaveBeenCalled();
})


test("Check if invalid number of guests is detected", () => {
    const availableTimes = ["17:00"];
    const dispatcher = jest.fn();
    const submitForm = jest.fn();
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Fill fields
    // This time the number of guests field gets an invalid value (-1)
    // Fill other required fields with valid data
    const date = new Date();
    const dateStr = date.toISOString().substring(0, 10);
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: dateStr }});

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "17:00" }});

    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, { target: { value: "-1" }});

    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, { target: { value: "Bob" }});

    // Click the Confirm button and verify that the submitForm function is NOT called
    const confirmButton = screen.getByRole("button");
    fireEvent.click(confirmButton);
    expect(submitForm).not.toHaveBeenCalled();
})


test("Check if invalid email address is detected", () => {
    const availableTimes = ["17:00"];
    const dispatcher = jest.fn();
    const submitForm = jest.fn();
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Fill fields
    // This time the email field gets in invalid value.
    // It's not a required field but it still has to have a valid value if we do fill it out!
    // Fill other required fields with valid data
    const date = new Date();
    const dateStr = date.toISOString().substring(0, 10);
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: dateStr }});

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "17:00" }});

    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, { target: { value: "2" }});

    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, { target: { value: "Bob" }});

    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, { target: { value: "xxx" }});

    // Click the Confirm button and verify that the submitForm function is NOT called
    const confirmButton = screen.getByRole("button");
    fireEvent.click(confirmButton);
    expect(submitForm).not.toHaveBeenCalled();
})


test("Check if form can be submitted if all fields are valid", () => {
    const availableTimes = ["17:00"];
    const dispatcher = jest.fn();
    const submitForm = jest.fn();
    render(
        <BrowserRouter>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitForm={submitForm} />
        </BrowserRouter>
    );

    // Fill fields
    // This time the email field gets in invalid value.
    // It's not a required field but it still has to have a valiad value if we do fill it out!
    // Fill other required fields with valid data
    const date = new Date();
    const dateStr = date.toISOString().substring(0, 10);
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: dateStr }});

    const timeInput = screen.getByLabelText(/Time/);
    fireEvent.change(timeInput, { target: { value: "17:00" }});

    const guestsInput = screen.getByLabelText(/guests/);
    fireEvent.change(guestsInput, { target: { value: "2" }});

    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, { target: { value: "Bob" }});

    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, { target: { value: "xxx@gmail.com" }});

    // Click the Confirm button and verify that the submitForm function is called
    const confirmButton = screen.getByRole("button");
    fireEvent.click(confirmButton);
    expect(submitForm).toHaveBeenCalled();
})
