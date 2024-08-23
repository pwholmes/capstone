import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import fullStar from '../assets/openmoji--star.svg';
import emptyStar from '../assets/weui--star-outlined.svg';

function TestimonialCard(props) {
    return (
        <article className={"tesCard " + props.myClass}>
            <div className="tesUserRating">
                {[...Array(Number(props.rating))].map((num,i)=> <img key={i} src={fullStar} alt="star" />)}
                {[...Array(5 - props.rating)].map((num,i)=> <img key={i} src={emptyStar} alt="empty star" />)}
            </div>
            <img className="tesUserImage" src={props.userImage} alt="User portrait"/>
            <h1 className="tesUserName">{props.userName}</h1>
            <p className="tesUserReview">{props.review}</p>
        </article>
    );
}

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <section className="tesContainer">
                <TestimonialCard
                    myClass="tes1"
                    rating="5"
                    userName="Elyssa"
                    userImage={user1}
                    review='"The greatest dining experience of my life."'/>
                <TestimonialCard
                    myClass="tes2"
                    rating="3"
                    userName="Billy"
                    userImage={user2}
                    review='"Eh, it was okay I guess."'/>
                <TestimonialCard
                    myClass="tes3"
                    rating="4"
                    userName="Lizzy"
                    userImage={user3}
                    review='"The Lemon Dessert was divine!"'/>
                <TestimonialCard
                    myClass="tes4"
                    rating="4"
                    userName="Robert"
                    userImage={user4}
                    review='"I ate until my belly burst."'/>
            </section>
        </section>
    );
}

export default Testimonials;
