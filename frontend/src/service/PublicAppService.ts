import {TripResultService} from "./TripResultService";
import {PublicAppStore} from "../store/PublicAppStore";
import {
    AuthenticationControllerApi,
    CarControllerApi,
    Configuration,
    CustomerControllerApi,
    DriverControllerApi,
    TripControllerApi
} from "../generated/restclient";
import {createApiConfig} from "../utils/api-utils";
import {TripPostService} from "./TripPostService";
import {LoginInService} from "./LoginInService";
import {SignUpService} from "./SignUpService";
import {UserProfileService} from "./UserProfileService";

export class PublicAppService{

    public readonly tripResultService : TripResultService;
    public readonly tripPostService : TripPostService;
    public readonly loginService : LoginInService
    public readonly signUpService : SignUpService;
    public readonly userProfileService : UserProfileService;

    constructor(apiConfig: Configuration ,public readonly publicAppStore : PublicAppStore) {

        const tripApi = new TripControllerApi(apiConfig);
        const carApi =  new CarControllerApi(apiConfig);
        const driverApi =  new DriverControllerApi(apiConfig);
        const customerApi =  new CustomerControllerApi(apiConfig);
        const authApi =  new AuthenticationControllerApi(apiConfig);

        this.tripResultService = new TripResultService(tripApi ,
            publicAppStore.tripResultStore,
            publicAppStore.searchBarStore);

        this.tripPostService = new TripPostService(tripApi,
            publicAppStore.newTripFormStore);

        this.loginService = new LoginInService(authApi,
            publicAppStore.loginStore);

        this.signUpService = new SignUpService(customerApi ,driverApi ,
            publicAppStore.signUpStore);

        this.userProfileService = new UserProfileService(customerApi,driverApi,
            publicAppStore.userProfileStore);
    }
}