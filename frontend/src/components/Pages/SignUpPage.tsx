import SignUpForm from "../SignUpForm/SignUpForm";
import {SignUpService} from "../../service/SignUpService";

interface SignUpPageProps {
    signUpService : SignUpService
}

function SignUpPage({signUpService} : SignUpPageProps) {

    return(
        <div>
            <h1 className="sign-up">SIGNUP</h1>
            <SignUpForm signUpService={signUpService}/>
        </div>

    )
}

export default SignUpPage;