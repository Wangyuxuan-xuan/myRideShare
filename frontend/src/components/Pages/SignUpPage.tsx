import SignUpForm from "../SignUpForm/SignUpForm";
import {SignUpService} from "../../service/SignUpService";
import "./SignUpPage.css";

interface SignUpPageProps {
    signUpService : SignUpService
}

function SignUpPage({signUpService} : SignUpPageProps) {

    return(
        <div className="sign-up-outer">
            {/*<h1 className="sign-up">SIGNUP</h1>*/}
            <SignUpForm signUpService={signUpService}/>
        </div>

    )
}

export default SignUpPage;