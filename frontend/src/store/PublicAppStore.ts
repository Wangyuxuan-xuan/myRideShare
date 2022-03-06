import {TripResultStore} from "./TripResultStore";
import {SearchBarStore} from "./SearchBarStore";
import {NewTripFormStore} from "./NewTripFormStore";
import {LoginInStore} from "./LoginInStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;
    readonly searchBarStore : SearchBarStore ;
    readonly newTripFormStore : NewTripFormStore;
    readonly loginStore : LoginInStore;

    constructor() {
        this.tripResultStore =  new TripResultStore();
        this.searchBarStore = new SearchBarStore();
        this.newTripFormStore = new NewTripFormStore();
        this.loginStore = new LoginInStore();
    }
}