import {TripResultStore} from "./TripResultStore";
import {SearchBarStore} from "./SearchBarStore";
import {NewTripFormStore} from "./NewTripFormStore";
import {LoginInStore} from "./LoginInStore";
import {SignUpStore} from "./SignUpStore";
import {UserProfileStore} from "./UserProfileStore";
import {BookTripStore} from "./BookTripStore";

export class PublicAppStore{

    readonly tripResultStore : TripResultStore;
    readonly searchBarStore : SearchBarStore ;
    readonly newTripFormStore : NewTripFormStore;
    readonly loginStore : LoginInStore;
    readonly signUpStore : SignUpStore;
    readonly userProfileStore : UserProfileStore;
    readonly bookTripStore : BookTripStore;

    constructor() {
        this.tripResultStore =  new TripResultStore();
        this.searchBarStore = new SearchBarStore();
        this.newTripFormStore = new NewTripFormStore();
        this.loginStore = new LoginInStore();
        this.signUpStore = new SignUpStore();
        this.userProfileStore = new UserProfileStore();
        this.bookTripStore = new BookTripStore();
    }
}