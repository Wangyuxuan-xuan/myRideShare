import SearchBar from "../searchBar/sarchBar";
import {TripResultService} from "../../service/TripResultService";

interface SearchProps{
    services : TripResultService;
}

function Search({services} : SearchProps) {

    return(
        <>
            <h1 className="search">SEARCH</h1>
            <SearchBar tripResultService={services}/>
        </>

    )
}

export default Search;