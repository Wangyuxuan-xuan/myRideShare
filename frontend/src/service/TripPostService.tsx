import {TripControllerApi} from "../generated/restclient";
import {NewTripFormStore} from "../store/NewTripFormStore";

export class TripPostService {

    constructor(private readonly tripApi : TripControllerApi,
                public readonly newTripFormStore : NewTripFormStore
                ) {}

    async saveTrip(){
        const {newTripFormStore} = this;
        newTripFormStore.isLoading = true;

        const {departure,destination,maxNumOfPassenger,carId,driverId,price
            ,startTimeDate,startTimeTime,endTimeDate,endTimeTime} = newTripFormStore;

        console.log(departure,destination,maxNumOfPassenger,carId,driverId,price
            ,startTimeDate,startTimeTime,endTimeDate,endTimeTime)

        try {

            const res = await this.tripApi.createTrip({
                tripPostDTO : {
                    startLocation : departure,
                    endLocation : destination,
                    startTime : "2022-03-05T09:26:19.927Z",
                    endTime : "2022-03-06T09:26:19.927Z",
                    price : price,
                    driverId : driverId,
                    carId : carId
                }
            }).toPromise();
            return true;

        }catch (e){
            console.log(e)
            return false;
        }finally {
            newTripFormStore.isLoading = false;
        }
    }
}