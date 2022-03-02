import {action, makeObservable, observable} from "mobx";
import {ChangeEvent} from "react";

export class SearchBarStore{

    @observable
    selectedDate : Date = new Date();

    @observable
    selectedTime : Date = new Date();

    @observable
    departure : string = "";

    @observable
    destination : string = "";

    constructor() {
        makeObservable(this);
    }


    @action
    updateSelectedDate = (selectedDate : Date) => {
        this.selectedDate = selectedDate;
    };

    @action
    updateSelectedTime = (selectedTime : Date) => {
        this.selectedTime = selectedTime;
    };

    @action
    updateDeparture = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
        if (typeof e == "string") {
            this.departure = e;
            return;
        }
        this.departure = e.target.value;
    };

    @action
    updateDestination = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
        if (typeof e == "string") {
            this.destination = e;
            return;
        }
        this.destination = e.target.value;
    };

}