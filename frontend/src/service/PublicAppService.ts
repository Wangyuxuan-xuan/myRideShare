import {TripResultService} from "./TripResultService";
import {PublicAppStore} from "../store/PublicAppStore";
import {CarControllerApi, CustomerControllerApi, DriverControllerApi, TripControllerApi} from "../generated/restclient";
import {createApiConfig} from "../utils/api-utils";

export class PublicAppService{

    public readonly tripResultService : TripResultService;

    constructor(public readonly publicAppStore : PublicAppStore) {

        const apiConfig = createApiConfig();

        const tripApi = new TripControllerApi(apiConfig);
        const carApi =  new CarControllerApi(apiConfig);
        const driverApi =  new DriverControllerApi(apiConfig);
        const CustomerApi =  new CustomerControllerApi(apiConfig);

        this.tripResultService = new TripResultService(tripApi , publicAppStore.tripResultStore);
    }
}