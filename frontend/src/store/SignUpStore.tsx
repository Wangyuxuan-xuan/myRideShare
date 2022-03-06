import {action, makeObservable, observable} from "mobx";

export class SignUpStore {

    @observable
    name :  string = "";

    @observable
    email : string = "";

    @observable
    phoneNumber : string = "";

    @observable
    password : string = "";

    @observable
    rePassword : string = "";

    @observable
    isLoading : boolean = false;

    constructor() {
        makeObservable(this);
    }

}