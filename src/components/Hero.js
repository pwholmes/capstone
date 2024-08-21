import { Link } from 'react-router-dom';
import heroImage from '../assets/restaurant-food.jpg';

function Hero() {
    return (
        <section id="hero" className="hero">
            <section className="heroContainer">
                <article className="heroArticle">
                    <h1 className="heroTitle">Little Lemon</h1>
                    <h2 className="heroLocation">Chicago</h2>
                    <p className="heroDescription">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservations"><button className="button">Reserve a Table</button></Link>
                </article>
                <img className="heroImage" src={heroImage} alt="A sample of Little Lemon's menu" />
            </section>
        </section>
    );
}

export default Hero;
