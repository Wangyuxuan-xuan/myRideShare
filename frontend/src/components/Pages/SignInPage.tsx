import SignInForm from "../SignInForm/SignInForm";
import "./SignInPage.css"
import {LoginInService} from "../../service/LoginInService";

interface SignInPageProps {
    loginService : LoginInService;
}
function SignInPage({loginService} : SignInPageProps){

    return (

        <div className="sign-in">
                <SignInForm loginService={loginService}/>
        </div>


    )
}

export default SignInPage;