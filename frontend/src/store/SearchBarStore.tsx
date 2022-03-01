import {action, makeObservable, observable} from "mobx";

export class SearchBarStore{

    @observable
    departure : string = "";

    @observable
    destination : string = "";

    @observable
    selectedDate : string = String(Date.now());

    @observable
    selectedTime : string = String(Date.now());

    constructor() {
        makeObservable(this);
    }


    @action
    updateSelectedDate = (selectedDate : string) => {
        this.selectedDate = selectedDate;
    }

    @action
    updateSelectedTime = (selectedTime : string) => {
        this.selectedTime = selectedTime;
    }

    @action
    updateDeparture = (departure : string) => {
        this.departure = departure;
    }

    @action
    updateDestination = (destination : string) => {
        this.destination = destination;
    }
}