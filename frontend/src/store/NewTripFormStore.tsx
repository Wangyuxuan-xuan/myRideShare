import {action, makeObservable, observable} from "mobx";

export class NewTripFormStore {
    @observable
    departure : string = "";

    @observable
    destination : string = "";

    @observable
    maxNumOfPassenger : number = 0;

    @observable
    carId : number = 0;

    @observable
    driverId : number = 0;

    @observable
    price : number = 0;

    @observable
    startTimeDate : Date = new Date();

    @observable
    startTimeTime : Date = new Date();

    @observable
    endTimeDate : Date = new Date();

    @observable
    endTimeTime : Date = new Date();

    constructor() {
        makeObservable(this);
    }
}