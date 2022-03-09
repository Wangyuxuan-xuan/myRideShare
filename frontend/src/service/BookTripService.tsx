import {CustomerControllerApi} from "../generated/restclient";
import {BookTripStore} from "../store/BookTripStore";

export class BookTripService {

    constructor(private readonly customerApi : CustomerControllerApi ,
                public readonly bookTripStore : BookTripStore) {
    }

    async bookTrip(){
        const {bookTripStore} = this;
        bookTripStore.isLoading = true;

        const {customerId,tripId} = bookTripStore;

        console.log(customerId +" "+ tripId);

        try {
            const res = await this.customerApi.createCustomerTrip({
                customerTripPostDTO : {
                    customerId : customerId,
                    tripId : tripId
                }
            }).toPromise();

            return true;
        }catch (e) {
            console.log("error")
            console.log(e);
            return false;
        }finally {
            bookTripStore.isLoading = false;
        }
    }

}