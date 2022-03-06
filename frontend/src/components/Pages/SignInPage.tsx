import SignInForm from "../SignInForm/SignInForm";
import "./SignInPage.css"
import {LoginInService} from "../../service/LoginInService";

interface SignInPageProps {
    loginService : LoginInService,
    changeLogInState : any
}
function SignInPage({loginService,changeLogInState} : SignInPageProps){

    return (

        <div>
            <h1 className="sign-in">SIGNUP</h1>
                <SignInForm loginService={loginService} changeLogInState={changeLogInState}/>
        </div>


    )
}

export default SignInPage;