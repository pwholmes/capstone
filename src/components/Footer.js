import logo2 from '../assets/logo2.png';

function Footer() {
    return (
        <footer className="footer">
            <img className="footerImage" src={logo2} alt="Little Lemon logo" />
            <article className="footerLinks" >
                <h1 className="footerTitle">Links</h1>
                <a href="#navbar" className="footerText">Home</a><br/>
                <a href="#about" className="footerText">About</a><br/>
                <a href="#footer" className="footerText">Menu</a><br/>
                <a href="#reservations" className="footerText">Reservations</a><br/>
                <a href="#footer" className="footerText">Order Online</a><br/>
                <a href="#footer" className="footerText">Login</a><br/>
            </article>
            <article className="footerContact" >
                <h1 className="footerTitle">Contact</h1>
                <a href="#footer" className="footerText">Address</a><br/>
                <a href="#footer" className="footerText">Phone Number</a><br/>
                <a href="#footer" className="footerText">Email</a><br/>
            </article>
            <article className="footerSocials" >
                <h1 className="footerTitle">Socials</h1>
                <a href="#footer" className="footerText">Facebook</a><br/>
                <a href="#footer" className="footerText">Twitter</a><br/>
                <a href="#footer" className="footerText">Instagram</a><br/>
            </article>
        </footer>
    );
}

export default Footer;
