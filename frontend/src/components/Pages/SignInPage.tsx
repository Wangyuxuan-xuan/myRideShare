import SignInForm from "../SignInForm/SignInForm";
import "./SignInPage.css"
import {LoginInService} from "../../service/LoginInService";

interface SignInPageProps {
    loginService : LoginInService,
    changeLogInState : any
    setCurrentCustomer : any
    setCurrentDriver : any
}
function SignInPage({loginService,changeLogInState ,setCurrentCustomer , setCurrentDriver} : SignInPageProps){

    return (

        <div>
            <h1 className="sign-in">SIGNUP</h1>
                <SignInForm loginService={loginService} changeLogInState={changeLogInState} setCurrentCustomer={setCurrentCustomer} setCurrentDriver={setCurrentDriver}/>
        </div>


    )
}

export default SignInPage;