import CustomerProfile from "../UserProfile/CustomerProfile";
import {UserProfileService} from "../../service/UserProfileService";
import {CustomerDTO, DriverDTO, TripDTO} from "../../generated/restclient";
import DriverProfile from "../UserProfile/DriverProfile";
import CustomerTrips from "../PersonalTrips/CustomerTrips";
import DriverTrips from "../PersonalTrips/DriverTrips";

interface PersonalPageProps {
    userProfileService : UserProfileService,
    currentCustomerDTO : CustomerDTO | undefined,
    currentDriverDTO : DriverDTO |undefined,
    isCustomerLoggedIn : boolean,
    isDriverLoggedIn : boolean
    tripDTOs : TripDTO[] | undefined,
}

function Personal({userProfileService,currentCustomerDTO,currentDriverDTO,isCustomerLoggedIn,isDriverLoggedIn,tripDTOs} : PersonalPageProps) {

    const whoLoggedIn = (currentCustomerDTO : CustomerDTO | undefined, currentDriverDTO: DriverDTO |undefined) => {
      if (isCustomerLoggedIn && currentCustomerDTO !== undefined)
          return (
              <div>
                  <CustomerProfile userProfileService={userProfileService} currentCustomerDTO={currentCustomerDTO}/>
                  <h2>Trips</h2>
                  <CustomerTrips userProfileService={userProfileService} currentCustomerDTO={currentCustomerDTO} tripDTOs={tripDTOs}/>
              </div>

          );
      if (isDriverLoggedIn && currentDriverDTO !== undefined){
          return (
              <div>
                  <DriverProfile userProfileService={userProfileService} currentDriverDTO={currentDriverDTO}/>
                  <DriverTrips userProfileService={userProfileService} currentDriverDTO={currentDriverDTO} tripDTOs={tripDTOs}/>
              </div>

          )
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