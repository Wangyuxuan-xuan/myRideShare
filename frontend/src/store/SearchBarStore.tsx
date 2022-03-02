import {action, makeObservable, observable} from "mobx";

export class SearchBarStore{

    @observable
    selectedDate : Date = new Date();

    @observable
    selectedTime : Date = new Date();

    constructor() {
        makeObservable(this);
    }


    @action
    updateSelectedDate = (selectedDate : Date) => {
        this.selectedDate = selectedDate;
    }

    @action
    updateSelectedTime = (selectedTime : Date) => {
        this.selectedTime = selectedTime;
    }

}