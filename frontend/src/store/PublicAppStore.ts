import {TripResultStore} from "./TripResultStore";
import {SearchBarStore} from "./SearchBarStore";
import {NewTripFormStore} from "./NewTripFormStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;
    readonly searchBarStore : SearchBarStore ;
    readonly newTripFormStore : NewTripFormStore;

    constructor() {
        this.tripResultStore =  new TripResultStore();
        this.searchBarStore = new SearchBarStore();
        this.newTripFormStore = new NewTripFormStore();
    }
}