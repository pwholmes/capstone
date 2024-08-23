import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm(props) {
    const defaultFormData = {date: "", dateTouched: false, 
                             time: "", timeTouched: false,
                             numGuests: 1, numGuestsTouched: false,
                             event: "none", 
                             name: "", nameTouched: false,
                             email: "", emailTouched: false};
    const [formData, setFormData] = useState(defaultFormData);
    const navigate = useNavigate();

    // Set the date ranges allowed for reservations: between today, and two months from today.
    // I know this code is janky, but it's the only way I could make the dates compare correctly.
    // Even using setHours(0,0,0,0) didn't work because of the time zone adjustments, and rather than
    // deal with the nightmare of time zones, I just stringified the dates, chopped off the time portions,
    // and re-converted them into dates.
    const rawNow = new Date();
    const nowString = rawNow.toISOString().substring(0, 10);
    const now = new Date(nowString);

    const rawLater = new Date();
    rawLater.setMonth(rawLater.getMonth() + 2);
    const laterString = rawLater.toISOString().substring(0, 10);
    const later = new Date(laterString);

    // Validate each field
    let dateIsValid = false;
    if (formData.date !== "") {
        const rawFormDate = new Date(formData.date);
        const rawFormDateString = rawFormDate.toISOString().substring(0, 10);
        const formDate = new Date(rawFormDateString);
        dateIsValid = formDate.getTime() >= now.getTime() && formDate.getTime() <= later.getTime();
    }
    const timeIsValid = (formData.time !== "");
    const numGuestsIsValid = (formData.numGuests >= 1 && formData.numGuests <= 10);
    const nameIsValid = (formData.name !== "");
    const emailIsValid = (formData.email === "" || formData.email.includes("@"));
    const isConfirmDisabled = !dateIsValid || !timeIsValid || !numGuestsIsValid || !nameIsValid || !emailIsValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.submitForm(formData)) {
            navigate("/confirmed", {state: formData});
        }
    }

    return (
        <section className="bookPage">
        <h1 className="bookTitle">Reservations</h1>
            <form className="bookForm" onSubmit={handleSubmit}>
                <section className="bookInputGroup">
                    <h2 className="bookSubheading">Reservation Info</h2>

                    <label className="bookText bookLabel" htmlFor="bookDateInput">Date*</label>
                    <input className="bookText bookInput" id="bookDateInput" type="date" value={formData.date} min={nowString} max={laterString}
                        onBlur={(e) => setFormData(prevState => ({...prevState, dateTouched: true})) }
                        onChange={(e) => {
                            props.dispatcher(e.target.value);
                            return setFormData(prevState => ({...prevState, date: e.target.value, time: ""}))
                        }}/><br/>
                    { (formData.dateTouched && !dateIsValid) ? <p className="bookInputError">The Date must be between today and two months from today.</p> : ""}

                    <label className="bookText bookLabel" htmlFor="bookTimeInput">Time*</label>
                    <select className="bookText bookInput" id="bookTimeInput" value={formData.time}
                        onBlur={(e) => setFormData(prevState => ({...prevState, timeTouched: true})) }
                        onChange={(e) => setFormData(prevState => ({...prevState, time: e.target.value}))}>
                        <option value="">--select--</option>
                        {props.availableTimes.map((time,i) => <option key={i} value={time}>{time}</option>)}
                    </select><br/>
                    { (formData.timeTouched && !timeIsValid) ? <p className="bookInputError">Time is required.</p> : ""}

                    <label className="bookText bookLabel" htmlFor="bookNumGuestsInput">Number of guests*</label>
                    <input className="bookText bookInput" id="bookNumGuestsInput" type="number" placeholder="1" min="1" max="10" value={formData.numGuests}
                        onBlur={(e) => setFormData(prevState => ({...prevState, numGuestsTouched: true})) }
                        onChange={(e) => setFormData(prevState => ({...prevState, numGuests: e.target.value}))} /><br/>
                    { (formData.numGuestsTouched && !numGuestsIsValid) ? <p className="bookInputError">The number of guests must be between 1 and 10.</p> : ""}

                    <label className="bookText bookLabel" htmlFor="bookEventInput">Type of event</label>
                    <select className="bookText bookInput" id="bookEventInput" value={formData.event}
                        onChange={(e) => setFormData(prevState => ({...prevState, event: e.target.value}))}>
                    <option value="none">Nothing special!</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="reuniom">Reunion</option>
                        <option value="other">Other</option>
                    </select>
                    <p className="bookRequired">* indicates required field</p>
                </section>

                <section className="bookInputGroup">
                    <h2 className="bookSubheading">Personal Info</h2>

                    <label className="bookText bookLabel" htmlFor="bookName">Name*</label>
                    <input className="bookText bookInput" id="bookName" type="text"  placeholder="Name" value={formData.name}
                        onBlur={(e) => setFormData(prevState => ({...prevState, nameTouched: true})) }
                        onChange={(e) => setFormData(prevState => ({...prevState, name: e.target.value}))} /><br/>
                    { (formData.nameTouched && !nameIsValid) ? <p className="bookInputError">A Name is required.</p> : ""}

                    <label className="bookText bookLabel" htmlFor="bookEmail">Email Address</label>
                    <input className="bookText bookInput" id="bookEmail" type="email" placeholder="Email Address" value={formData.email}
                        onBlur={(e) => setFormData(prevState => ({...prevState, emailTouched: true})) }
                        onChange={(e) => setFormData(prevState => ({...prevState, email: e.target.value}))} /><br/>
                    { (formData.emailTouched && !emailIsValid) ? <p className="bookInputError">Email Address is optional, but if provided it must contain a @.</p> : ""}

                    {/*
                    <label className="bookText bookLabel" htmlFor="bookCreditCardNum">Credit Card Number*</label>
                    <input className="bookText bookInput" id="bookCreditCardNum" type="string" placeholder="Credit Card Number" value={formData.ccNum}
                        onChange={(e) => setFormData(prevState => ({...prevState, ccNum: e.target.value}))} /><br/>
                    */}

                    <p className="bookEmail">If you provide an email address, we will send you a reminder the day before your reservation.  The email address is not used for any other purpose.</p>
                    <p className="bookRequired">* indicates required field</p>
                    </section>

                <section className="bookButtonContainer">
                    <button className="button bookConfirmButton" type="submit"
                        disabled={isConfirmDisabled}>Confirm</button>
                </section>
            </form>
        </section>
    );
}

export default BookingForm;