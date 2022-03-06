import CustomerProfile from "../UserProfile/CustomerProfile";
import {UserProfileService} from "../../service/UserProfileService";
import {CustomerDTO, DriverDTO} from "../../generated/restclient";
import DriverProfile from "../UserProfile/DriverProfile";

interface PersonalPageProps {
    userProfileService : UserProfileService,
    currentCustomerDTO : CustomerDTO | undefined,
    currentDriverDTO : DriverDTO |undefined,
    isCustomerLoggedIn : boolean,
    isDriverLoggedIn : boolean
}

function Personal({userProfileService,currentCustomerDTO,currentDriverDTO,isCustomerLoggedIn,isDriverLoggedIn} : PersonalPageProps) {

    console.log("currentCustomerDTO");
    console.log(currentCustomerDTO);
    const whoLoggedIn = (currentCustomerDTO : CustomerDTO | undefined, currentDriverDTO: DriverDTO |undefined) => {
      if (isCustomerLoggedIn && currentCustomerDTO !== undefined)
          return (<CustomerProfile userProfileService={userProfileService} currentCustomerDTO={currentCustomerDTO}/>);
      if (isDriverLoggedIn && currentDriverDTO !== undefined){
          return (<DriverProfile userProfileService={userProfileService} currentDriverDTO={currentDriverDTO}/>)
      }
    }

    return(
        <div>
            <h1 className="personal">PERSONAL</h1>
            {whoLoggedIn(currentCustomerDTO,currentDriverDTO)}
        </div>
    )
}

export default Personal;