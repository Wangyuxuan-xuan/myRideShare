import {action, makeObservable, observable} from "mobx";

export class BookTripStore {

    @observable
    customerId : number = 0;

    @observable
    tripId : number = 0;

    @observable
    isLoading : boolean = false;

    constructor() {
        makeObservable(this);
    }
}