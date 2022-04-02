import CardItems from "./CardItems";
import "./Cards.css"

function Cards() {

    return(
        <>
            <div className="cards">
                <h1>Check out this !!!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        {/*you can adjust the ul here to adjust the group*/}
                        <ul className="cards__items">
                            <CardItems
                                src = "../../../images/img-1.jpg"
                                text = "No matter where you’re going, by carpool, find the perfect ride from our wide range of destinations and routes at low prices."
                                label = "Adventure"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-2.jpg"
                                text = "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes."
                                label = "Leisure"
                                path = "/search"/>
                        </ul>
                        <ul className="cards__items">
                            <CardItems
                                src = "../../../images/img-3.jpg"
                                text = "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform."
                                label = "Business"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-4.jpg"
                                text = "Every week, every month. To meet with a loved one, or to discover a new place. With a big family, or a big luggage. To Paris, Amsterdam or any other European destination."
                                label = "Travelling"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-5.jpg"
                                text = "Carpooling is one of the world's best community-based travel network. No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices."
                                label = "Community"
                                path = "/search"/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards