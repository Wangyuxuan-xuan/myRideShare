import {TripResultService} from "./TripResultService";
import {PublicAppStore} from "../store/PublicAppStore";
import {
    CarControllerApi,
    Configuration,
    CustomerControllerApi,
    DriverControllerApi,
    TripControllerApi
} from "../generated/restclient";
import {createApiConfig} from "../utils/api-utils";
import {TripPostService} from "./TripPostService";

export class PublicAppService{

    public readonly tripResultService : TripResultService;
    public readonly tripPostService : TripPostService;

    constructor(apiConfig: Configuration ,public readonly publicAppStore : PublicAppStore) {

        const tripApi = new TripControllerApi(apiConfig);
        const carApi =  new CarControllerApi(apiConfig);
        const driverApi =  new DriverControllerApi(apiConfig);
        const CustomerApi =  new CustomerControllerApi(apiConfig);

        this.tripResultService = new TripResultService(tripApi ,
            publicAppStore.tripResultStore,
            publicAppStore.searchBarStore);

        this.tripPostService = new TripPostService(tripApi,
            publicAppStore.newTripFormStore)
    }
}