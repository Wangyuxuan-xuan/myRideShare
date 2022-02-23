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
                                text = "this picture size is changeable by the length of text"
                                label = "Adventure"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-2.jpg"
                                text = "this picture size is changeable by the length of text"
                                label = "Label 2"
                                path = "/search"/>
                        </ul>
                        <ul className="cards__items">
                            <CardItems
                                src = "../../../images/img-3.jpg"
                                text = "this picture size is changeable by the length of text"
                                label = "Label 3"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-4.jpg"
                                text = "this picture size is changeable by the length of text"
                                label = "Label 4"
                                path = "/search"/>
                            <CardItems
                                src = "../../../images/img-5.jpg"
                                text = "this picture size is changeable by the length of text"
                                label = "Label 5"
                                path = "/search"/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards