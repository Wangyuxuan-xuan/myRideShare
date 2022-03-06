import {TripResultStore} from "./TripResultStore";
import {SearchBarStore} from "./SearchBarStore";
import {NewTripFormStore} from "./NewTripFormStore";
import {LoginInStore} from "./LoginInStore";
import {SignUpStore} from "./SignUpStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;
    readonly searchBarStore : SearchBarStore ;
    readonly newTripFormStore : NewTripFormStore;
    readonly loginStore : LoginInStore;
    readonly signUpStore : SignUpStore;

    constructor() {
        this.tripResultStore =  new TripResultStore();
        this.searchBarStore = new SearchBarStore();
        this.newTripFormStore = new NewTripFormStore();
        this.loginStore = new LoginInStore();
        this.signUpStore = new SignUpStore();
    }
}