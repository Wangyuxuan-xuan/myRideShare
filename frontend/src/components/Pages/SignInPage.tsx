import SignInForm from "../SignInForm/SignInForm";
import "./SignInPage.css"
import {LoginInService} from "../../service/LoginInService";

interface SignInPageProps {
    loginService : LoginInService,
    changeLogInState : any
}
function SignInPage({loginService,changeLogInState} : SignInPageProps){

    return (

        <div className="sign-in">
                <SignInForm loginService={loginService} changeLogInState={changeLogInState}/>
        </div>


    )
}

export default SignInPage;