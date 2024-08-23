import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// Set the date ranges allowed for reservations.  We allow then up to 2 months in advance
const now = new Date();
const nowDate = now.toISOString().substring(0, 10);
now.setMonth(now.getMonth() + 2);
const laterDate = now.toISOString().substring(0, 10);

function BookingForm(props) {
    const defaultFormData = {date: "", time: "", numGuests: 1, event: "none", name: "", email: "", ccNum: ""};
    const [formData, setFormData] = useState(defaultFormData);
    const navigate = useNavigate();

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
                    <input className="bookText bookInput" id="bookDateInput" type="date" value={formData.date} min={nowDate} max={laterDate}
                        onChange={(e) => {
                            props.dispatcher(e.target.value);
                            return setFormData(prevState => ({...prevState, date: e.target.value, time: ""}))
                        }}/><br/>

                    <label className="bookText bookLabel" htmlFor="bookTimeInput">Time*</label>
                    <select className="bookText bookInput" id="bookTimeInput" value={formData.time}
                            onChange={(e) => setFormData(prevState => ({...prevState, time: e.target.value}))}>
                        <option value="">--select--</option>
                        {props.availableTimes.map((time,i) => <option key={i} value={time}>{time}</option>)}
                    </select><br/>

                    <label className="bookText bookLabel" htmlFor="bookNumGuestsInput">Number of guests*</label>
                    <input className="bookText bookInput" id="bookNumGuestsInput" type="number" placeholder="1" min="1" max="10" value={formData.numGuests}
                        onChange={(e) => setFormData(prevState => ({...prevState, numGuests: e.target.value}))} /><br/>

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
                    <p>* indicates required field</p>
                </section>

                <section className="bookInputGroup">
                    <h2 className="bookSubheading">Personal Info</h2>

                    <label className="bookText bookLabel" htmlFor="bookName">Name*</label>
                    <input className="bookText bookInput" id="bookName" type="text"  placeholder="Name" value={formData.name}
                        onChange={(e) => setFormData(prevState => ({...prevState, name: e.target.value}))} /><br/>

                    <label className="bookText bookLabel" htmlFor="bookEmail">Email Address*</label>
                    <input className="bookText bookInput" id="bookEmail" type="email" placeholder="Email Address" value={formData.email}
                        onChange={(e) => setFormData(prevState => ({...prevState, email: e.target.value}))} /><br/>

                    <label className="bookText bookLabel" htmlFor="bookCreditCardNum">Credit Card Number*</label>
                    <input className="bookText bookInput" id="bookCreditCardNum" type="string" placeholder="Credit Card Number" value={formData.ccNum}
                        onChange={(e) => setFormData(prevState => ({...prevState, ccNum: e.target.value}))} /><br/>

                    <p>* indicates required field</p>
                    </section>

                <section className="bookButtonContainer">
                    <button className="button bookConfirmButton" type="submit"
                        disabled={(!formData.date || !formData.time || !formData.name || !formData.email || !formData.ccNum)}>Confirm</button>
                </section>
            </form>
        </section>
    );
}

export default BookingForm;