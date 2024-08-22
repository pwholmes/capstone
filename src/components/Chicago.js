import chiImage1 from '../assets/Mario-and-Adrian.jpg';
import chiImage2 from '../assets/restaurant.jpg';

function Chicago() {
    return (
        <section id="chicago" className="chicago">
            <section className="chiContainer">
                <article className="chiText">
                    <h1 className="chiTitle">Little Lemon</h1>
                    <h2 className="chiLocation">Chicago</h2>
                    <p className="chiDescription">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                    <p className="chiDescription">The restaurant features a locally-sourced menu with daily specials.</p>
                </article>
                <article className="chiImages">
                    <img className="chiImage1" src={chiImage1} alt="Mario and Adrian" />
                    <img className="chiImage2" src={chiImage2} alt="The Little Lemon Restaurant" />
                </article>
            </section>
        </section>
    );
}

export default Chicago;
