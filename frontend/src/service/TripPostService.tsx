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
            ,startTimeDate,startTimeTime,endTimeDate,endTimeTime,description} = newTripFormStore;
        //
        // console.log(departure,destination,maxNumOfPassenger,carId,driverId,price
        //     ,startTimeDate,startTimeTime,endTimeDate,endTimeTime,description)

        const startDateTime = new Date(startTimeDate.getFullYear(),startTimeDate.getMonth(),startTimeDate.getDate()
            ,startTimeTime.getHours(),startTimeTime.getMinutes());

        const endDateTime = new Date(endTimeDate.getFullYear(),endTimeDate.getMonth(),endTimeDate.getDate()
            ,endTimeTime.getHours(),endTimeTime.getMinutes());

        console.log(startDateTime.toISOString());
        console.log(endDateTime.toISOString());

        try {

            const res = await this.tripApi.createTrip({
                tripPostDTO : {
                    startLocation : departure,
                    endLocation : destination,
                    startTime : startDateTime.toISOString(),
                    endTime : endDateTime.toISOString(),
                    price : price,
                    maxNumOfPassengers : maxNumOfPassenger,
                    description : description,
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