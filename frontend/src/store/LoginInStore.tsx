import {action, makeObservable, observable} from "mobx";
import {CustomerDTO, DriverDTO} from "../generated/restclient";

export class LoginInStore {

    @observable
    email : string = "";

    @observable
    password : string = "";

    @observable
    isLoading : boolean = false;

    @observable
    driverDTO : DriverDTO | null = null;

    @observable
    customerDTO : CustomerDTO | null = null;

    constructor() {
        makeObservable(this);
    }
    
}