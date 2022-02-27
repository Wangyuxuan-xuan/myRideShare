import {TripResultStore} from "./TripResultStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;

    constructor() {
        this.tripResultStore =  new TripResultStore();
    }
}