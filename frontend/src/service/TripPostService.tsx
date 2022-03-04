import {TripControllerApi} from "../generated/restclient";
import {NewTripFormStore} from "../store/NewTripFormStore";

export class TripPostService {

    constructor(private readonly tripApi : TripControllerApi,
                public readonly newTripFormStore : NewTripFormStore
                ) {}
}