import {TripControllerApi} from "../generated/restclient";
import {TripResultStore} from "../store/TripResultStore";
import {createApiConfig} from "../utils/api-utils";

export class TripResultService {

    constructor(
        private readonly tripApi : TripControllerApi,
        private readonly tripResultStore : TripResultStore
    ) {}

    async getTripInfo () {
        const {tripResultStore} = this;
        tripResultStore.isLoading = true;

        try {
            tripResultStore.tripDTOs = await this.tripApi
                .getAllTrips()
                .toPromise()

            console.log(tripResultStore.tripDTOs);
            return true

        }catch (e){
            console.log("fetch tripDTOs error");
            return false;
        }finally {
            tripResultStore.isLoading = false;
        }
    }
}