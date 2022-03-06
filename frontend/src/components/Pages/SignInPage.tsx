import SignInForm from "../SignInForm/SignInForm";
import "./SignInPage.css"
import {LoginInService} from "../../service/LoginInService";

interface SignInPageProps {
    loginService : LoginInService,
    changeDriverLogInState : any,
    changeCustomerLogInState : any,
    setCurrentCustomer : any,
    setCurrentDriver : any
}
function SignInPage({loginService,changeDriverLogInState ,changeCustomerLogInState,setCurrentCustomer , setCurrentDriver} : SignInPageProps){

    return (

        <div>
            <h1 className="sign-in">SIGNUP</h1>
                <SignInForm loginService={loginService} changeDriverLogInState={changeDriverLogInState} changeCustomerLogInState={changeCustomerLogInState} setCurrentCustomer={setCurrentCustomer} setCurrentDriver={setCurrentDriver}/>
        </div>


    )
}

export default SignInPage;