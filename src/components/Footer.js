import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';

function Footer() {
    return (
        <footer className="footer">
            <section className="footerContainer">
                <img className="footerImage" src={logo2} alt="Little Lemon logo" />
                <article className="footerLinks" >
                    <h1 className="footerTitle">Links</h1>
                    <Link to="/" className="footerLink">Home</Link><br/>
                    <a href="#about" className="footerLink">About</a><br/>
                    <a href="#footer" className="footerLink">Menu</a><br/>
                    <Link to="/reservations" className="footerLink">Reservations</Link><br/>
                    <a href="#footer" className="footerLink">Order Online</a><br/>
                    <a href="#footer" className="footerLink">Login</a><br/>
                </article>
                <article className="footerContact" >
                    <h1 className="footerTitle">Contact</h1>
                    <a href="#footer" className="footerLink">Address</a><br/>
                    <a href="#footer" className="footerLink">Phone Number</a><br/>
                    <a href="#footer" className="footerLink">Email</a><br/>
                </article>
                <article className="footerSocials" >
                    <h1 className="footerTitle">Socials</h1>
                    <a href="#footer" className="footerLink">Facebook</a><br/>
                    <a href="#footer" className="footerLink">Twitter</a><br/>
                    <a href="#footer" className="footerLink">Instagram</a><br/>
                </article>
            </section>
        </footer>
    );
}

export default Footer;
