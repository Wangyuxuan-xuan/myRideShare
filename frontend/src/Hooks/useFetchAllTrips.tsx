
//custom hook need to start with "use"
import {useEffect, useState} from "react";
import {TripDTO} from "../generated/restclient";

const useFetchAllTrips = (url : string) => {

    const [data  , setData] = useState<TripDTO[]>();
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);
    /**
     * This function runs every render
     * When we change the data , it rerender this to the dom
     * good to use when we need to fetch data
     *
     * for second argument , we can config when to run  , called dependencies
     * [] is run for only the first time load
     *
     * [name] runs for every time name changes
     */
    useEffect(() => {

        const abortController = new AbortController();


        fetch(url, {signal : abortController.signal})
            .then(res => {

                if(!res.ok){
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();  //json obj to js obj
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setIsPending(false);
            } )
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted");
                }else {
                    setError(err.message);
                    setIsPending(false)
                }

            })
        return () => {abortController.abort()};
    } , [url]) // for second argument , we can config when to run

    return {data , isPending , error};
}

export default useFetchAllTrips;