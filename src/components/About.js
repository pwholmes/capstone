import aboutImage1 from '../assets/Mario-and-Adrian.jpg';
import aboutImage2 from '../assets/restaurant.jpg';

function About() {
    return (
        <section id="about" className="about">
            <section className="aboutContainer">
                <article className="aboutText">
                    <h1 className="aboutTitle">Little Lemon</h1>
                    <h2 className="aboutLocation">Chicago</h2>
                    <p className="aboutDescription">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                    <p className="aboutDescription">The restaurant features a locally-sourced menu with daily specials.</p>
                </article>
                <article className="aboutImages">
                    <img className="aboutImage1" src={aboutImage1} alt="Mario and Adrian" />
                    <img className="aboutImage2" src={aboutImage2} alt="The Little Lemon Restaurant" />
                </article>
            </section>
        </section>
    );
}

export default About;
