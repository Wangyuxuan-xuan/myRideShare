import {CustomerControllerApi, DriverControllerApi} from "../generated/restclient";
import {UserProfileStore} from "../store/UserProfileStore";

export class UserProfileService {

    constructor(
       private readonly customerApi : CustomerControllerApi,
       private readonly driverApi : DriverControllerApi,
       public readonly userProfileStore : UserProfileStore
    ) {}

    async getTripsForCustomer(){
        const {userProfileStore} = this;
        userProfileStore.isLoading = true;

        const {customerDTO} = userProfileStore;

        const customerId = customerDTO?.customerId;
        if(!customerId){
            return false
        }
        console.log(customerId);

        try {
            userProfileStore.customerTrips = await this.customerApi.getAllCustomerTripsByCustomerId({
                customerId : customerId
            }).toPromise()

            return true;
        }catch (e) {
            console.log(e);
            return false;
        }finally {
            userProfileStore.isLoading = false;
        }
    }

    async getTripsForDriver(){
        const {userProfileStore} = this;
        userProfileStore.isLoading = true;

        const {driverDTO} = userProfileStore;

        const driverId = driverDTO?.driverId;
        if(!driverId){
            return false
        }
        console.log(driverId);

        try {
            userProfileStore.driverTrips = await this.driverApi.getDriverTripByDriverId({
                driverId : driverId
            }).toPromise()

            return true;
        }catch (e) {
            console.log(e);
            return false;
        }finally {
            userProfileStore.isLoading = false;
        }
    }

}