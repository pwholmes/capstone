import Footer from "./Footer";

function Reservations() {
    return (
        <>
            <section id="reservations" className="reservations">
                <h1 className="resTitle">Reservations</h1>
                <section className="resInputGroup">
                    <h2 className="resSubheading">Reservation Info</h2>
                    <label className="resText resLabel" for="resDateInput">Date*</label>
                    <input className="resText resInput" id="resDateInput" type="date"/><br/>
                    <label className="resText resLabel" for="timeInput">Time*</label>
                    <input className="resText resInput" id="resTimeInput" type="time"/><br/>
                    <label className="resText resLabel" for="resNumDinersInput">Number of diners*</label>
                    <input className="resText resInput" id="resNumDinersInput" type="number"/><br/>
                    <label className="resText resLabel" for="resEventInput">Type of event</label>
                    <select className="resText resInput" id="resEventInput">
                        <option value="none">Nothing special!</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </section>

                <section className="resInputGroup">
                    <h2 className="resSubheading">Payment Info</h2>
                    <label className="resText resLabel" for="resName">Name*</label>
                    <input className="resText resInput" id="resName" type="text"/><br/>
                    <label className="resText resLabel" for="resEmail">Email*</label>
                    <input className="resText resInput" id="resEmail" type="email"/><br/>
                    <label className="resText resLabel" for="resCreditCardNum">Credit card number*</label>
                    <input className="resText resInput" id="resCreditCardNum" type="text" /><br/>
                </section>
            </section>

            <Footer />
        </>
    )
}

export default Reservations;