import Footer from "./Footer";
import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatcher={props.dispatcher} submitForm={props.submitForm} />
            <Footer />
        </>
    )
}

export default BookingPage;