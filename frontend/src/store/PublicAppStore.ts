import {TripResultStore} from "./TripResultStore";
import {SearchBarStore} from "./SearchBarStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;
    readonly searchBarStore : SearchBarStore ;

    constructor() {
        this.tripResultStore =  new TripResultStore();
        this.searchBarStore = new SearchBarStore();
    }
}