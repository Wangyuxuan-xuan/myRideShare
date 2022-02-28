import {TripDTO} from "../generated/restclient";
import {makeObservable, observable} from "mobx";

export class TripResultStore {

    @observable
    tripDTOs : TripDTO[] | null = null;

    @observable
    tripDTO : TripDTO | null = null;

    @observable
    isLoading : boolean = false;

    constructor() {
        makeObservable(this);
    }

    get trips(){
        const {tripDTOs} = this;
        if(!tripDTOs){
            return null;
        }

        return tripDTOs;
    }

}