import {CustomerControllerApi, DriverControllerApi} from "../generated/restclient";
import {UserProfileStore} from "../store/UserProfileStore";

export class UserProfileService {

    constructor(
       private readonly customerApi : CustomerControllerApi,
       private readonly driverApi : DriverControllerApi,
       public readonly userProfileStore : UserProfileStore
    ) {}



}