import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();

    const date = new Date(location.state.date);
    const dateOptions = { weekday: "long", month: "long", day: "numeric" }
    const formattedDate = Intl.DateTimeFormat(undefined, dateOptions).format(date)

    return (
            <section className="confirmed">
                <article className="confContainer">
                    <p className="confText">Your booking for {location.state.numGuests} guests at {location.state.time} on {formattedDate} has been confirmed, {location.state.name}!</p>
                </article>
            </section>
    );
}

export default ConfirmedBooking;