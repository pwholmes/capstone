import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import fullStar from '../assets/openmoji--star.svg';
import emptyStar from '../assets/weui--star-outlined.svg';

function TestimonialCard(props) {
    return (
        <article className={"testimonialCard " + props.myClass}>
            <div className="userRating">
                {[...Array(Number(props.rating))].map(()=> <img src={fullStar} alt="star" />)}
                {[...Array(5 - props.rating)].map(()=> <img src={emptyStar} alt="empty star" />)}
            </div>
            <img className="userImage" src={props.userImage} alt="User portrait"/>
            <h1 className="userName">{props.userName}</h1>
            <p className="userReview">{props.review}</p>
        </article>
    );
}

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <TestimonialCard
                myClass="testimonial1"
                rating="5"
                userName="Elyssa"
                userImage={user1}
                review='"The greatest dining experience of my life."'/>
            <TestimonialCard
                myClass="testimonial2"
                rating="3"
                userName="Billy"
                userImage={user2}
                review='"Eh, it was okay I guess."'/>
            <TestimonialCard
                myClass="testimonial3"
                rating="4"
                userName="Lizzy"
                userImage={user3}
                review='"The Lemon Dessert was divine!"'/>
            <TestimonialCard
                myClass="testimonial4"
                rating="4"
                userName="Robert"
                userImage={user4}
                review='"I ate until my belly burst."'/>
        </section>
    );
}

export default Testimonials;
