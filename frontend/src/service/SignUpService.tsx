import {CustomerControllerApi, DriverControllerApi} from "../generated/restclient";
import {SignUpStore} from "../store/SignUpStore";

export class SignUpService {

    constructor(private readonly customerApi : CustomerControllerApi,
                private readonly driverApi : DriverControllerApi ,
                public readonly signUpStore : SignUpStore) {}

    async signUpAsCustomer() {
        const {signUpStore} = this;
        const {name,email,phoneNumber,password,rePassword} = signUpStore;

        console.log(name+email+phoneNumber+password+rePassword);

        if (password !== rePassword){
            return false;
        }else {
            signUpStore.isLoading = true
            try {
                const res = await this.customerApi.createCustomer({
                    name : name,
                    email : email,
                    password : password,
                    phone : phoneNumber
                }).toPromise();

                return true
            }catch (e) {
                console.log(e);
                return false
            }finally {
                signUpStore.isLoading = false;
            }

        }

    }

    async signUpAsDriver() {
        const {signUpStore} = this;
        const {name,email,phoneNumber,password,rePassword} = signUpStore;

        console.log(name+email+phoneNumber+password+rePassword);

        if (password !== rePassword){
            return false;
        }else {
            signUpStore.isLoading = true
            try {
                const res = await this.driverApi.createDriver({
                    name : name,
                    email : email,
                    password : password,
                    phone : phoneNumber
                }).toPromise();

                return true
            }catch (e) {
                console.log(e);
                return false
            }finally {
                signUpStore.isLoading = false;
            }

        }

    }
}