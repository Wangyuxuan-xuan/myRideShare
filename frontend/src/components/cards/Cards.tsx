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
                                text = "this picture size is change by the length of text"
                                label = "Adventure"
                                path = "/services"/>
                            <CardItems
                                src = "../../../images/img-2.jpg"
                                text = "this picture size is change by the length of text"
                                label = "Label 2"
                                path = "/services"/>
                        </ul>
                        <ul className="cards__items">
                            <CardItems
                                src = "../../../images/img-3.jpg"
                                text = "this picture size is change by the length of text"
                                label = "Label 3"
                                path = "/services"/>
                            <CardItems
                                src = "../../../images/img-4.jpg"
                                text = "this picture size is change by the length of text"
                                label = "Label 4"
                                path = "/services"/>
                            <CardItems
                                src = "../../../images/img-5.jpg"
                                text = "this picture size is change by the length of text"
                                label = "Label 5"
                                path = "/services"/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards