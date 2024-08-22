import Footer from "./Footer";

function BookingPage(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatcher={props.dispatcher}/>
            <Footer />
        </>
    )
}

export default BookingPage;