import greekSaladImage from '../assets/greek-salad.jpg';
import bruchettaImage from '../assets/bruchetta.jpg';
import lemonDessertImage from '../assets/lemon-dessert.jpg';
import deliveryIcon from '../assets/mdi--delivery-dining.svg';

function FoodCard(props) {
    return (
        <article className={"specialCard " + props.myClass}>
            <img className="specialImage" src={props.foodImage} alt={props.title}/>
            <header className="specialHeader">
                <h2 className="specialTitle">{props.title}</h2>
                <h3 className="specialPrice">{props.price}</h3>
            </header>
            <p className="specialDescription">{props.description}</p>
            <footer className="specialFooter">
                <p className="specialDeliveryText">Order a Delivery</p>
                <img className="specialDeliveryIcon" src={deliveryIcon} alt="Delivery icon" />
            </footer>
        </article>
    );
}


function Specials() {
    return (
        <section id="specials" className="specials">
            <h1 className="specialsTitle">Specials</h1>
            <button className="button specialsButton">Online Menu</button>
            <FoodCard
                myClass="special1"
                foodImage={greekSaladImage}
                title="Greek Salad"
                price="$12.99"
                description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
            <FoodCard
                myClass="special2"
                foodImage={bruchettaImage}
                title="Bruchetta"
                price="$5.99"
                description="Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
            <FoodCard
                myClass="special3"
                foodImage={lemonDessertImage}
                title="Lemon Dessert"
                price="$5.00"
                description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
        </section>
    );
}

export default Specials;
