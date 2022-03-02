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
            // tripResultStore.tripDTOs = await this.tripApi
            //     .getAllTrips()
            //     .toPromise()
            tripResultStore.tripDTOs = await this.tripApi
                .searchTrips({
                    departure : "Budapest",
                    destination : "Debrecen",
                    dateTime : "2022-03-02 09:26:19.927Z"
                })
                .toPromise()

            console.log(tripResultStore.tripDTOs);
            return true

        }catch (e){
            console.log("fetch tripDTOs error");
            console.log(e)
            return false;
        }finally {
            tripResultStore.isLoading = false;
        }
    }
}