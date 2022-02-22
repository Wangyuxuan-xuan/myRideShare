import {CustomButton} from "../button/CustomButton";
import "./HeroSection.css"

function HeroSection(){

    return(
        <div className= "hero-container">
            <video src= "../../../public/videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className= "hero-btns">
                <CustomButton className="btns"
                              buttonStyle = "btn--outline"
                              buttonSize = "btn--large"
                >
                    GET STARTED
                </CustomButton>

                <CustomButton className="btns"
                              buttonStyle = "btn--primary"
                              buttonSize = "btn--large"
                >
                    WATCH TRAILER
                    <i className="far fa-play-circle"/>
                </CustomButton>

            </div>
        </div>
    )
}

export default HeroSection