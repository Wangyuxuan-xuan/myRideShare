import {action, makeObservable, observable} from "mobx";
import {CustomerDTO, CustomerTripDTO, DriverDTO, DriverTripDTO} from "../generated/restclient";

export class UserProfileStore {

    @observable
    customerDTO : CustomerDTO | null = null;

    @observable
    driverDTO : DriverDTO | null = null;

    @observable
    description : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed augue a arcu efficitur condimentum. Duis sed neque vel urna varius gravida ac ac mauris. Aliquam eget cursus eros. Quisque maximus eros est, id tincidunt arcu luctus malesuada. Donec egestas sit amet velit iaculis efficitur. Integer ornare nisi sit amet enim varius fermentum. Vivamus consequat laoreet volutpat. Cras sollicitudin leo ut eleifend bibendum.";

    @observable
    customerTrips : CustomerTripDTO[] | null = null;

    @observable
    driverTrips : DriverTripDTO[] | null = null;

    @observable
    customers : Map<number,CustomerDTO[]> = new Map<number,CustomerDTO[]>();

    @observable
    isLoading : boolean =  false;

    constructor() {
        makeObservable(this);
    }
}