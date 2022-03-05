import {AuthenticationControllerApi} from "../generated/restclient";
import {LoginInStore} from "../store/LoginInStore";

export class LoginInService {

    constructor(private readonly authApi : AuthenticationControllerApi ,
                public readonly loginStore : LoginInStore) {}

    async loginAsCustomer(){
        const {loginStore} =  this;
        const {email , password} = loginStore;

        loginStore.isLoading = true;
        try {
            loginStore.customerDTO = await this.authApi
                .loginAsCustomer({
                    authRequestDTO : {
                        email : email,
                        password : password
                    }
                })
                .toPromise();
            return true;
        }catch (e) {
            console.log(e);
            return false;
        }finally {
            loginStore.isLoading = false;
        }
    }

    async loginAsDriver(){
        const {loginStore} =  this;
        const {email , password} = loginStore;

        loginStore.isLoading = true;
        try {
            loginStore.driverDTO = await this.authApi
                .loginAsDriver({
                    authRequestDTO : {
                        email : email,
                        password : password
                    }
                })
                .toPromise();
            return true;
        }catch (e) {
            console.log(e);
            return false;
        }finally {
            loginStore.isLoading = false;
        }
    }

}