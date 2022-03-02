import {TripControllerApi} from "../generated/restclient";
import {TripResultStore} from "../store/TripResultStore";
import {createApiConfig} from "../utils/api-utils";
import {SearchBarStore} from "../store/SearchBarStore";
import {PublicAppStore} from "../store/PublicAppStore";

export class TripResultService {

    constructor(
        private readonly tripApi : TripControllerApi,
        public readonly tripResultStore : TripResultStore,
        public readonly searchBarStore : SearchBarStore
    ) {}



    async getTripInfo () {
        const {tripResultStore} = this;
        tripResultStore.isLoading = true;

        const {searchBarStore} = this;

        const {departure , destination} = searchBarStore;

        console.log("params : " + departure + destination)

        try {

            tripResultStore.tripDTOs = await this.tripApi
                .searchTrips({
                    departure : departure,
                    destination : destination,
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